---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

### Week 5 Objectives

Finish chapter 5.4 Storage: EFS for shared model weights, ECR for Docker images, Secrets Manager for credentials. Everything the application will need to actually run once I get to chapter 5.5.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Created EFS filesystem `upscale-efs` and mount targets in both private subnets. | 17/05/2026 | 17/05/2026 | [EFS](https://docs.aws.amazon.com/efs/latest/ug/) |
| 2 | Mounted EFS on a test EC2 and copied a dummy weights file to confirm it works. | 18/05/2026 | 18/05/2026 | - |
| 3 | Created ECR repositories `upscale-api` and `upscale-worker`. | 19/05/2026 | 19/05/2026 | [ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/) |
| 4 | Practised `docker push` to ECR from my laptop using the deployer profile. | 20/05/2026 | 20/05/2026 | - |
| 5 | Stored the database password and Cognito client secret in Secrets Manager. | 21/05/2026 | 21/05/2026 | [Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/) |
| 6 | Updated my notes with the full storage picture: S3 for objects, EFS for weights, ECR for images. | 22/05/2026 | 22/05/2026 | - |
| 7 | Closed `UPS-6` on Linear, moved `UPS-7` (ECS cluster) into next sprint. | 23/05/2026 | 23/05/2026 | - |

### Week 5 Achievements

Storage is done. When I get to the app layer next week, everything it needs is already sitting there and I do not have to interrupt the workshop steps to go create a bucket.

### Challenges & Lessons

The first `docker push` failed because I forgot `aws ecr get-login-password`. Reading the error out loud (instead of pasting it into search) told me the answer immediately. Small habit, big win.

### Next Week Plan

Chapter 5.5 Application part A and B: Redis + SQS. Work under `UPS-7`.
