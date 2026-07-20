---
title: "5.8 - Quan sát"
date: 2026-07-18
weight: 18
chapter: false
pre: "<b>5.8. </b>"
---

## Tổng quan

Thiết lập CloudWatch logs, alarms và dashboard để giám sát tất cả các dịch vụ.

---

## Bước 1: CloudWatch Log Groups

**CloudWatch Console** → Logs → Log groups:

| Log Group | Thời hạn |
|-----------|---------|
| `/ecs/upscale-api` | 30 ngày |
| `/ecs/upscale-postgres` | 30 ngày |
![5.8.0](/images/5-Workshop/5.8.0.png)
---

## Bước 2: CloudWatch Dashboard

Dashboards → Create dashboard → Tên: `upscale-dashboard`
![5.8.1](/images/5-Workshop/5.8.1.png)![5.8.2](/images/5-Workshop/5.8.2.png)
### Widget 1: ECS CPU
- Type: Line
- Source: ECS → ClusterName=upscale-cluster, ServiceName=upscale-api, Stat=Average
- Metric: CPUUtilization
- Period: 1 phút
![5.8.3](/images/5-Workshop/5.8.3.png)
### Widget 2: ECS Memory
- Type: Line
- Source: ECS → same
- Metric: MemoryUtilization
![5.8.4](/images/5-Workshop/5.8.4.png)
### Widget 3: ALB Requests
- Type: Number
- Source: ALB → TargetGroup=upscale-api-tg
- Metrics: RequestCount, TargetResponseTime
![5.8.5](/images/5-Workshop/5.8.5.png)
### Widget 4: ALB 5xx Errors
- Type: Line
- Source: ALB → TargetGroup=upscale-api-tg
- Metrics: HTTPCode_Target_5XX_Count, HTTPCode_ELB_5XX_Count
![5.8.6](/images/5-Workshop/5.8.6.png)
### Widget 5: SQS Queue Depth
- Type: Line
- Source: SQS → QueueName=upscale-job-queue
- Metrics: ApproximateNumberOfMessagesVisible
![5.8.7](/images/5-Workshop/5.8.7.png)
### Widget 6: Redis CPU + Memory
- Type: Line
- Source: ElastiCache → CacheClusterId=upscale-redis
- Metrics: CPUUtilization, DatabaseMemoryUsagePercentage
![5.8.8](/images/5-Workshop/5.8.8.png)
---

## Bước 3: Alarms

| Tên | Metric | Điều kiện |
|-----|--------|----------|
| ECSHighCPU | ECS CPUUtilization | > 80% trong 5 phút |
| ECSHighMemory | ECS MemoryUtilization | > 85% trong 5 phút |
| ALBHighLatency | ALB TargetResponseTime | > 5s trong 5 phút |
| ALB5xxErrors | ALB HTTPCode_Target_5XX | > 10 trong 5 phút |
| SQSQueueDepth | SQS ApproximateNumberOfMessages | > 100 trong 10 phút |

**Notification** → SNS topic → đăng ký email.
![5.8.9](/images/5-Workshop/5.8.9.png)
---

## Tóm tắt

| Tài nguyên | Cấu hình |
|-----------|---------|
| Log Groups | 2 groups (api, postgres), 30 ngày |
| Dashboard | 6 widgets bao gồm ECS, ALB, SQS, Redis |
| Alarms | 5 alarms với SNS notification |

> **Tiếp theo**: [5.9 - Triển khai](../5.9-deployment/)
