---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

### Week 11 Objectives

Move from a single EC2 running Docker manually to an **ECS cluster on EC2** with an ASG capacity provider. Register a task definition for FastAPI, mount **EFS** for model weights + Postgres data, and stand up **ElastiCache Redis** for job state. The ALB from Week 8 now forwards to the ECS service target group, health check on `/health`. Also stand up an SQS queue for AI jobs to prepare for async scale-out, even though the MVP keeps the feature flag OFF.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Create **Launch Template** `upscale-gpu-lt` (g5.xlarge, ECS-optimized GPU AMI, IAM role with `AmazonEC2ContainerServiceforEC2Role`). | 16/07/2026 | 16/07/2026 | [ECS-optimized AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) |
| 2 | Create **ASG** `upscale-gpu-asg` min=1 max=3, target-tracking on `Upscale/GPU/Utilization = 70%`, register as an **ECS capacity provider** on cluster `upscale-cluster`. | 17/07/2026 | 17/07/2026 | [ECS Capacity Providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html) |
| 3 | Provision **EFS** `upscale-efs` with access points for `/weights` and `/pgdata`; create **ElastiCache Redis** `upscale-redis` in the private subnets. | 18/07/2026 | 19/07/2026 | [EFS + ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html) |
| 4 | Register ECS task definitions `upscale-api` (FastAPI, EFS mount for weights, Redis endpoint via Secrets Manager) and `upscale-postgres` (EFS-backed data dir); create services with the capacity provider. | 20/07/2026 | 20/07/2026 | [ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html) |
| 5 | Point the **ALB target group** `upscale-api-tg` at the ECS service (dynamic host-port mapping); create **SQS** standard queue `upscale-ai-jobs`, visibility timeout 300s; BE consumes via a polling loop (feature flag OFF for MVP). | 21/07/2026 | 22/07/2026 | [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/) |
| 6 | Playwright E2E on staging: upload → progress → download, all green. | 23/07/2026 | 23/07/2026 | [Playwright](https://playwright.dev/) |
| 7 | Blue/green rollout via ECS deployment (rolling with `minimumHealthyPercent=100`), drain the old task set — zero downtime. | 24/07/2026 | 24/07/2026 | - |

### Week 11 Achievements

The production shape is done: CloudFront → S3 (FE) and ALB → ECS on EC2 GPU (BE) with EFS for weights/DB and Redis for job state. When GPU util stays above 70% for 3 minutes, the ECS capacity provider scales the ASG out to 2 instances and schedules a second task as intended. All 8 Playwright E2E scenarios pass clean.

### Challenges & Lessons

GPU cold-start started at around 4 minutes because the ECS-optimized AMI still had to boot and ECR-pull the image, so the capacity provider reacted slower than the traffic that triggered it. Baking a custom AMI with the image + weights already inside brought cold-start down to about 90 seconds. Moving weights to EFS also meant new tasks skip the S3 download entirely. For GPU workloads, a pre-baked AMI or ECS warm pool is basically mandatory — without it, auto-scaling is only nominal.

### Next Week Plan

Publish the production endpoint. Cost review through Cost Explorer. Prep the final demo and report.
