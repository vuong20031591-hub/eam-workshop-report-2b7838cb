---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

### Week 8 Objectives

Chapter 5.6 Access. Put an Application Load Balancer in front of the ECS service and get real HTTP traffic reaching the API from outside the VPC.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Created ALB `upscale-alb` in the two public subnets. | 07/06/2026 | 07/06/2026 | [ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/) |
| 2 | Created target group `upscale-api-tg` with health check on `/health`. | 08/06/2026 | 08/06/2026 | - |
| 3 | Registered the ECS service with the target group. | 09/06/2026 | 09/06/2026 | - |
| 4 | Added an HTTP listener on port 80 → target group. | 10/06/2026 | 10/06/2026 | - |
| 5 | Watched the target go from `initial` to `healthy` and finally hit the ALB DNS from my browser. | 11/06/2026 | 11/06/2026 | - |
| 6 | Uploaded a real image through the API and saw the file appear in S3. | 12/06/2026 | 12/06/2026 | - |
| 7 | Closed `UPS-10` on Linear, took `UPS-11` (CloudFront + WAF). | 13/06/2026 | 13/06/2026 | - |

### Week 8 Achievements

The API is reachable from the public internet. End to end works: browser → ALB → ECS task → S3. This was the week Upscale AI stopped being a diagram in my notebook.

### Challenges & Lessons

Health check kept returning `unhealthy` because the SG on ECS did not allow inbound from the ALB SG on the container port. I had done the reverse rule. Reading SGs from both sides (source and destination) is a small habit I want to keep.

### Next Week Plan

Chapter 5.7 Delivery: ACM certificate, CloudFront distribution, WAF. Track on `UPS-11`.
