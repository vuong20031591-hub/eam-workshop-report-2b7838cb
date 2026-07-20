---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

### Week 11 Objectives

Move from a single EC2 to an Auto Scaling Group with a launch template and user-data that pulls the ECR image. Put an ALB between API Gateway and the ASG, health check on `/health`. Also stand up an SQS queue for AI jobs to prepare for async scale-out, even though the MVP keeps the feature flag OFF.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Create **Launch Template** `upscale-gpu-lt` (g5.xlarge, IAM role, user-data pulls ECR + `docker run`). | 16/07/2026 | 16/07/2026 | - |
| 2 | Create **Auto Scaling Group** min=1 max=3, scaling policy targeting `Upscale/GPU/Utilization = 70%`. | 17/07/2026 | 17/07/2026 | [EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/) |
| 3 | Provision an internal **Application Load Balancer**, target group = ASG, health check `/health` every 15s. | 18/07/2026 | 19/07/2026 | [ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/) |
| 4 | Switch API Gateway integration from EC2 public DNS → **ALB DNS** (VPC Link). | 20/07/2026 | 20/07/2026 | [API Gateway VPC Link](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-private.html) |
| 5 | Create **SQS** standard queue `upscale-ai-jobs`, visibility timeout 300s; BE consumes via a polling loop (feature flag OFF for MVP). | 21/07/2026 | 22/07/2026 | [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/) |
| 6 | Playwright E2E on staging: upload → progress → download, all green. | 23/07/2026 | 23/07/2026 | [Playwright](https://playwright.dev/) |
| 7 | Blue/green rollout: attach the new ASG to the ALB, drain the old — zero downtime. | 24/07/2026 | 24/07/2026 | - |

### Week 11 Achievements

The production shape is done: CloudFront → S3 (FE) and API Gateway → VPC Link → ALB → ASG (BE GPU). When GPU util stays above 70% for 3 minutes, the ASG scales out to 2 instances as intended. All 8 Playwright E2E scenarios pass clean.

### Challenges & Lessons

GPU cold-start started at around 4 minutes because the base AMI had to boot and then pull the Docker image, so the ASG reacted slower than the traffic that triggered it. Baking a custom AMI with the Docker image + weights already inside brought cold-start down to about 90 seconds. For GPU workloads, a pre-baked AMI or warm pool is basically mandatory — without it, auto-scaling is only nominal.

### Next Week Plan

Publish the production endpoint. Cost review through Cost Explorer. Prep the final demo and report.
