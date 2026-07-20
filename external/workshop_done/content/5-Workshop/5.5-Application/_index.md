---
title: "5.5 - Application"
date: 2026-07-18
weight: 15
chapter: false
pre: "<b>5.5. </b>"
---

## Overview

Deploy the application layer: Redis for caching, SQS for job queuing, ECS cluster with EC2 instances, task definitions, services, and auto scaling.

---

## Part A: ElastiCache Redis

### Step 1: Cache Subnet Group

**ElastiCache Console** → Subnet groups → Create:
- Name: `upscale-redis-subnet-group`
- Subnets: `upscale-priv-1a`, `upscale-priv-1b`

![5.5.0](/images/5-Workshop/5.5.0.png)![5.5.1](/images/5-Workshop/5.5.1.png)

### Step 2: Redis Cluster

Create → Design your own cache:
- Name: `upscale-redis`, Engine: Redis 7.1, Node: cache.t3.micro, Replicas: 0
- VPC: `upscale-vpc`, Subnet group: `upscale-redis-subnet-group`, SG: `upscale-redis-sg`
- Create → wait for Available (~5-10 min)

![5.5.2](/images/5-Workshop/5.5.2.png)

### Step 3: Update Redis Secret

Copy the Redis endpoint → update `upscale/redis-url` secret to `redis://ENDPOINT:6379`

---

## Part B: Amazon SQS

### Step 4: Dead-Letter Queue

**SQS Console** → Create queue:
- Type: Standard, Name: `upscale-job-dlq`
- Retention: 14 days

![5.5.3](/images/5-Workshop/5.5.3.png)

### Step 5: Job Queue

Create queue:
- Name: `upscale-job-queue`
- Visibility timeout: 300s, Retention: 86400s, Wait time: 20s
- Dead-letter queue: `upscale-job-dlq`, Max receives: 3

![5.5.4](/images/5-Workshop/5.5.4.png)

### Step 6: Update SQS Secret

Copy queue URL → update `upscale/sqs-queue-url` secret

![5.5.5](/images/5-Workshop/5.5.5.png)

---

## Part C: ECS Cluster

### Step 7: Create Cluster

**ECS Console** → Clusters → Create:
- Name: `upscale-cluster`
- Infrastructure: Amazon EC2 instances
- Container Insights: enabled

![5.5.6](/images/5-Workshop/5.5.6.png)![5.5.7](/images/5-Workshop/5.5.7.png)

### Step 8: Launch Template

**EC2 Console** → Launch Templates → Create:
- Name: `upscale-gpu-lt`
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
- Storage: 100 GB gp3, encrypted, delete on termination

![5.5.8](/images/5-Workshop/5.5.8.png)![5.5.9](/images/5-Workshop/5.5.9.png)![5.5.10](/images/5-Workshop/5.5.10.png)

### Step 9: Auto Scaling Group

EC2 Console → Auto Scaling Groups → Create:
- Name: `upscale-gpu-asg`
- Launch template: `upscale-gpu-lt` ($Latest)
- Subnets: `upscale-priv-1a`, `upscale-priv-1b`
- Desired: 1, Min: 0, Max: 3

![5.5.11](/images/5-Workshop/5.5.11.png)![5.5.12](/images/5-Workshop/5.5.12.png)![5.5.13](/images/5-Workshop/5.5.13.png)

### Step 10: Capacity Provider

ECS Console → Capacity Providers → Create:
- Name: `upscale-gpu-cp`
- ASG: `upscale-gpu-asg`
- Managed scaling: target 80%

Attach to cluster: `upscale-cluster` → Edit → add `upscale-gpu-cp` (weight=1, base=1)

---

## Part D: Task Definitions

### Step 11: upscale-api

- Family: `upscale-api`, Launch type: EC2
- CPU: 6144, Memory: 12288 (12 GB)
- Execution role: `upscale-ecs-execution-role`
- Task role: `upscale-ecs-task-role`
- Network mode: bridge
- Container: `upscale-api`, Image: ECR URI, Port: 8000/TCP
- Secrets: DATABASE_URL, POSTGRES_PASSWORD, REDIS_URL, SQS_QUEUE_URL, S3_IMAGES_BUCKET, COGNITO_USER_POOL_ID, COGNITO_CLIENT_ID
- EFS volume: `/weights` → access point `upscale-ap-weights`

![5.5.14](/images/5-Workshop/5.5.14.png)![5.5.15](/images/5-Workshop/5.5.15.png)![5.5.16](/images/5-Workshop/5.5.16.png)

### Step 12: upscale-postgres

- Family: `upscale-postgres`, Launch type: EC2
- CPU: 512, Memory: 1024 (1 GB)
- Container: `upscale-postgres`, Image: `postgres:16-alpine`, Port: 5432/TCP
- Env: POSTGRES_DB=upscale, POSTGRES_USER=upscale
- Secret: POSTGRES_PASSWORD
- EFS volume: `/pgdata` → access point `upscale-ap-pgdata`

![5.5.17](/images/5-Workshop/5.5.17.png)![5.5.18](/images/5-Workshop/5.5.18.png)

---

## Part E: ECS Services

### Step 13: PostgreSQL Service

ECS → upscale-cluster → Services → Create:
- Name: `upscale-postgres`, Task def: `upscale-postgres`
- Desired: 1, Launch type: EC2
- Capacity provider: `upscale-gpu-cp`

![5.5.19](/images/5-Workshop/5.5.19.png)![5.5.20](/images/5-Workshop/5.5.20.png)![5.5.21](/images/5-Workshop/5.5.21.png)

### Step 14: API Service

Create:
- Name: `upscale-api`, Task def: `upscale-api`
- Desired: 1
- Load balancing: ALB → new target group `upscale-api-tg` (HTTP:8000, health: `/health/ready`)

![5.5.22](/images/5-Workshop/5.5.22.png)![5.5.23](/images/5-Workshop/5.5.23.png)

### Step 15: Auto Scaling

API service → Auto Scaling tab → Edit:
- Min: 1, Max: 3, Desired: 1
- Policy: Target tracking, CPU >= 70%

---

## Summary

| Resource | Key Config |
|----------|-----------|
| Redis | cache.t3.micro, Redis 7.1, Available |
| SQS | Job queue + DLQ, visibility=300s |
| ECS Cluster | upscale-cluster, EC2 launch type |
| ASG | 1 instance (t3.large), min=0, max=3 |
| Task Defs | upscale-api (12GB), upscale-postgres (1GB) |
| Services | Both running 1/1 |

> **Note**: First deploy takes 5-10 min (model weights loading from EFS).

> **Next**: [5.6 - Access](../5.6-access/)
