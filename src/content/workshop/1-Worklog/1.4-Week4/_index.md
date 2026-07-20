---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

### Week 4 Objectives

Finish chapter 5.3 (security groups and IAM roles), then move into chapter 5.4 Storage for S3. This is where the workshop starts asking me to think about who can talk to what, and I have to be careful with rules.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Created security groups: `upscale-alb-sg`, `upscale-ecs-sg`, `upscale-redis-sg`. | 10/05/2026 | 10/05/2026 | - |
| 2 | Wired inbound rules so the ALB SG can reach the ECS SG on port 8000. | 11/05/2026 | 11/05/2026 | [Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html) |
| 3 | Created IAM role `ecs-task-execution-role` for pulling images and writing logs. | 12/05/2026 | 12/05/2026 | - |
| 4 | Created S3 bucket `upscale-static-*` for the frontend build. | 13/05/2026 | 13/05/2026 | [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/) |
| 5 | Created S3 bucket `upscale-images-*` for user uploads, with versioning on. | 14/05/2026 | 14/05/2026 | - |
| 6 | Uploaded a test image via console and confirmed I can only read it through a presigned URL. | 15/05/2026 | 15/05/2026 | - |
| 7 | Closed `UPS-4` and `UPS-5` on Linear, planned S3 lifecycle and EFS for next week. | 16/05/2026 | 16/05/2026 | - |

### Week 4 Achievements

Security groups are drawn and named consistently. Two S3 buckets are live. I can upload and download objects and I understand what Block Public Access is protecting me from. Linear sprint is on track.

### Challenges & Lessons

Security groups clicked for me only when I stopped thinking about them as "firewalls" and started thinking about them as labels: the ALB has a label, the ECS task has a label, and I open a door between those two labels. Once I saw it that way I stopped guessing.

### Next Week Plan

Chapter 5.4 the rest: EFS, ECR, Secrets Manager. Take `UPS-6`.
