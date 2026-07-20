---
title: "5.8 - Observability"
date: 2026-07-18
weight: 18
chapter: false
pre: "<b>5.8. </b>"
---

## Overview

Set up CloudWatch logs, alarms, and dashboard for monitoring all services.

---

## Step 1: CloudWatch Log Groups

**CloudWatch Console** → Logs → Log groups:

| Log Group | Retention |
|-----------|----------|
| `/ecs/upscale-api` | 30 days |
| `/ecs/upscale-postgres` | 30 days |

![5.8.0](/images/5-Workshop/5.8.0.png)

---

## Step 2: CloudWatch Dashboard

Dashboards → Create dashboard → Name: `upscale-dashboard`

![5.8.1](/images/5-Workshop/5.8.1.png)![5.8.2](/images/5-Workshop/5.8.2.png)

### Widget 1: ECS CPU
- Type: Line
- Source: ECS → ClusterName=upscale-cluster, ServiceName=upscale-api, Stat=Average
- Metric: CPUUtilization
- Period: 1 minute

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

## Step 3: Alarms

| Name | Metric | Condition |
|------|--------|----------|
| ECSHighCPU | ECS CPUUtilization | > 80% for 5 min |
| ECSHighMemory | ECS MemoryUtilization | > 85% for 5 min |
| ALBHighLatency | ALB TargetResponseTime | > 5s for 5 min |
| ALB5xxErrors | ALB HTTPCode_Target_5XX | > 10 in 5 min |
| SQSQueueDepth | SQS ApproximateNumberOfMessages | > 100 for 10 min |

**Notification** → SNS topic → subscribe email.

![5.8.9](/images/5-Workshop/5.8.9.png)

---

## Summary

| Resource | Config |
|----------|--------|
| Log Groups | 2 groups (api, postgres), 30 day retention |
| Dashboard | 6 widgets covering ECS, ALB, SQS, Redis |
| Alarms | 5 alarms with SNS notification |

> **Next**: [5.9 - Deployment](../5.9-deployment/)
