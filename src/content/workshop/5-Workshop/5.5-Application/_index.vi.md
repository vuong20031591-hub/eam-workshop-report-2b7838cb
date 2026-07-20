---
title: "5.5 - Ứng dụng"
date: 2026-07-18
weight: 15
chapter: false
pre: "<b>5.5. </b>"
---

## Tổng quan

Triển khai lớp ứng dụng: Redis cho đệm, SQS cho hàng đợi tác vụ, ECS cluster với EC2 instances, task definitions, services và auto scaling.

---

## Phần A: ElastiCache Redis

### Bước 1: Cache Subnet Group

**ElastiCache Console** → Subnet groups → Tạo:
- Tên: `upscale-redis-subnet-group`
- Subnets: `upscale-priv-1a`, `upscale-priv-1b`
![5.5.0](/images/5-Workshop/5.5.0.png)![5.5.1](/images/5-Workshop/5.5.1.png)
### Bước 2: Redis Cluster

Tạo → Design your own cache:
- Tên: `upscale-redis`, Engine: Redis 7.1, Node: cache.t3.micro, Replicas: 0
- VPC: `upscale-vpc`, Subnet group: `upscale-redis-subnet-group`, SG: `upscale-redis-sg`
- Tạo → đợi Available (~5-10 phút)
![5.5.2](/images/5-Workshop/5.5.2.png)

### Bước 3: Cập nhật Redis Secret

Sao chép endpoint của Redis → cập nhật secret `upscale/redis-url` thành `redis://ENDPOINT:6379`

---

## Phần B: Amazon SQS

### Bước 4: Dead-Letter Queue

**SQS Console** → Create queue:
- Type: Standard, Tên: `upscale-job-dlq`
- Retention: 14 ngày
![5.5.3](/images/5-Workshop/5.5.3.png)
### Bước 5: Job Queue

Create queue:
- Tên: `upscale-job-queue`
- Visibility timeout: 300s, Retention: 86400s, Wait time: 20s
- Dead-letter queue: `upscale-job-dlq`, Max receives: 3
![5.5.4](/images/5-Workshop/5.5.4.png)
### Bước 6: Cập nhật SQS Secret

Sao chép queue URL → cập nhật secret `upscale/sqs-queue-url`
![5.5.5](/images/5-Workshop/5.5.5.png)
---

## Phần C: ECS Cluster

### Bước 7: Tạo Cluster

**ECS Console** → Clusters → Create:
- Tên: `upscale-cluster`
- Infrastructure: Amazon EC2 instances
- Container Insights: bật
![5.5.6](/images/5-Workshop/5.5.6.png)![5.5.7](/images/5-Workshop/5.5.7.png)
### Bước 8: Launch Template

**EC2 Console** → Launch Templates → Create:
- Tên: `upscale-gpu-lt`
- AMI: Amazon Linux 2 ECS Optimized
- Instance: t3.large (test) / g4dn.xlarge (GPU production)
- SG: `upscale-ecs-sg`
- IAM: `upscale-ec2-ecs-profile`
- User data:
```bash
#!/bin/bash
echo ECS_CLUSTER=upscale-cluster >> /etc/ecs/ecs.config
echo ECS_ENABLE_GPU_SUPPORT=true >> /etc/ecs/ecs.config
echo ECS_ENABLE_AWSLOGS_EXECUTIONROLE_OVERRIDE=true >> /etc/ecs/ecs.config
```
- Storage: 100 GB gp3, mã hóa, xóa khi terminate
![5.5.8](/images/5-Workshop/5.5.8.png)![5.5.9](/images/5-Workshop/5.5.9.png)![5.5.10](/images/5-Workshop/5.5.10.png)
### Bước 9: Auto Scaling Group

EC2 Console → Auto Scaling Groups → Create:
- Tên: `upscale-gpu-asg`
- Launch template: `upscale-gpu-lt` ($Latest)
- Subnets: `upscale-priv-1a`, `upscale-priv-1b`
- Desired: 1, Min: 0, Max: 3
![5.5.11](/images/5-Workshop/5.5.11.png)![5.5.12](/images/5-Workshop/5.5.12.png)![5.5.13](/images/5-Workshop/5.5.13.png)

### Bước 10: Capacity Provider

ECS Console → Capacity Providers → Create:
- Tên: `upscale-gpu-cp`
- ASG: `upscale-gpu-asg`
- Managed scaling: mục tiêu 80%

Gắn vào cluster: `upscale-cluster` → Edit → thêm `upscale-gpu-cp` (weight=1, base=1)

---

## Phần D: Task Definitions

### Bước 11: upscale-api

- Family: `upscale-api`, Launch type: EC2
- CPU: 6144, Memory: 12288 (12 GB)
- Execution role: `upscale-ecs-execution-role`
- Task role: `upscale-ecs-task-role`
- Network mode: bridge
- Container: `upscale-api`, Image: ECR URI, Port: 8000/TCP
- Secrets: DATABASE_URL, POSTGRES_PASSWORD, REDIS_URL, SQS_QUEUE_URL, S3_IMAGES_BUCKET, COGNITO_USER_POOL_ID, COGNITO_CLIENT_ID
- EFS volume: `/weights` → access point `upscale-ap-weights`
![5.5.14](/images/5-Workshop/5.5.14.png)![5.5.15](/images/5-Workshop/5.5.15.png)![5.5.16](/images/5-Workshop/5.5.16.png)
### Bước 12: upscale-postgres

- Family: `upscale-postgres`, Launch type: EC2
- CPU: 512, Memory: 1024 (1 GB)
- Container: `upscale-postgres`, Image: `postgres:16-alpine`, Port: 5432/TCP
- Env: POSTGRES_DB=upscale, POSTGRES_USER=upscale
- Secret: POSTGRES_PASSWORD
- EFS volume: `/pgdata` → access point `upscale-ap-pgdata`
![5.5.17](/images/5-Workshop/5.5.17.png)![5.5.18](/images/5-Workshop/5.5.18.png)
---

## Phần E: ECS Services

### Bước 13: PostgreSQL Service

ECS → upscale-cluster → Services → Create:
- Tên: `upscale-postgres`, Task def: `upscale-postgres`
- Desired: 1, Launch type: EC2
- Capacity provider: `upscale-gpu-cp`
![5.5.19](/images/5-Workshop/5.5.19.png)![5.5.20](/images/5-Workshop/5.5.20.png)![5.5.21](/images/5-Workshop/5.5.21.png)
### Bước 14: API Service

Create:
- Tên: `upscale-api`, Task def: `upscale-api`
- Desired: 1
- Load balancing: ALB → target group mới `upscale-api-tg` (HTTP:8000, health: `/health/ready`)
![5.5.22](/images/5-Workshop/5.5.22.png)![5.5.23](/images/5-Workshop/5.5.23.png)

### Bước 15: Tự động mở rộng (Auto Scaling)

API service → tab Auto Scaling → Edit:
- Min: 1, Max: 3, Desired: 1
- Policy: Target tracking, CPU >= 70%

---

## Tóm tắt

| Tài nguyên | Cấu hình chính |
|-----------|---------------|
| Redis | cache.t3.micro, Redis 7.1, Available |
| SQS | Job queue + DLQ, visibility=300s |
| ECS Cluster | upscale-cluster, EC2 launch type |
| ASG | 1 instance (t3.large), min=0, max=3 |
| Task Defs | upscale-api (12GB), upscale-postgres (1GB) |
| Services | Cả hai đang chạy 1/1 |

> **Lưu ý**: Lần triển khai đầu tiên mất 5-10 phút (tải trọng số mô hình từ EFS).

> **Tiếp theo**: [5.6 - Truy cập](../5.6-access/)
