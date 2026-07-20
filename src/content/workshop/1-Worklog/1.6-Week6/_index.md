---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

### Week 6 Objectives

Chapter 5.5 Application, first half: stand up ElastiCache Redis for caching and SQS for the async job queue. These are the two supporting pieces the FastAPI app will lean on, so I set them up before the ECS cluster itself.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Created ElastiCache subnet group with the two private subnets. | 24/05/2026 | 24/05/2026 | [ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/) |
| 2 | Created Redis cluster `upscale-redis` on `cache.t3.micro`. | 25/05/2026 | 25/05/2026 | - |
| 3 | Connected to Redis from a test EC2, ran `PING` → got `PONG`. Small win. | 26/05/2026 | 26/05/2026 | - |
| 4 | Created SQS queue `upscale-job-queue` and a dead-letter queue for failed jobs. | 27/05/2026 | 27/05/2026 | [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/) |
| 5 | Sent and received a test message with the AWS CLI so I could see the queue actually working. | 28/05/2026 | 28/05/2026 | - |
| 6 | Wrote a short Linear comment on `UPS-7` about what Redis and SQS are for in my own words. | 29/05/2026 | 29/05/2026 | - |
| 7 | Closed `UPS-7`, opened `UPS-8` (ECS cluster + task definitions). | 30/05/2026 | 30/05/2026 | - |

### Week 6 Achievements

Redis and SQS are both live and reachable from my test EC2. Explaining them in the Linear comment forced me to actually understand them, not just click through the wizard.

### Challenges & Lessons

I could not connect to Redis at first. It turned out my test EC2 was in a different security group and the Redis SG only allowed the ECS SG. Lesson: when a connection times out, first suspect the security group, not the code.

### Next Week Plan

Chapter 5.5 second half: ECS cluster with EC2 GPU instances, task definitions, services. Track on `UPS-8`.
