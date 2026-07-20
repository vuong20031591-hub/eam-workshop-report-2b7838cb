---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

### Week 11 Objectives

Migrate BE from a single EC2 to ECS on EC2 + ASG + SQS. My role: lock the detailed architecture, write the worker + autoscale policy spec, and review each PR along the migration path.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Locked the architecture: ALB → API ECS task (2 vCPU) → SQS `upscale-job-queue` → Worker ECS task on GPU (g4dn.xlarge). | 06/07/2026 | 06/07/2026 | - |
| 2 | Reviewed the ECS cluster + ASG Capacity Provider (min 0, max 4, target 100% utilization) provisioning PR. | 07/07/2026 | 07/07/2026 | [Capacity Providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html) |
| 3 | Wrote the worker spec: SQS long-poll 20s, process job, push status to Redis, retry x2, DLQ after 3 failures. | 08/07/2026 | 08/07/2026 | [SQS Long Polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html) |
| 4 | Reviewed the `/upscale/ai` refactor PR: push job to SQS + return `job_id`; worker service consumes. | 09/07/2026 | 09/07/2026 | - |
| 5 | Locked the autoscale policy: target tracking on `SQSMessagesVisible` = 5 msg/task; scale-in cooldown 300s. | 10/07/2026 | 10/07/2026 | [ECS Target Tracking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-autoscaling-targettracking.html) |
| 6 | Ran a 100 VU load test: autoscale from 1 → 3 GPU instances in 4 minutes; p95 stayed at 11s. | 11/07/2026 | 11/07/2026 | - |
| 7 | Sprint retro: ECS migration live; scale-to-0 at idle saves ~40% on the bill versus 24/7 EC2. | 12/07/2026 | 12/07/2026 | - |

### Week 11 Achievements

The system handled a 100 VU burst with smooth autoscaling. Scale-to-0 unlocks meaningful cost savings during off-peak hours. SQS + DLQ mean jobs aren't lost when a worker crashes — with the old single EC2, a crash meant losing the request outright.

### Challenges & Lessons

ECS on EC2 is far more complex than Fargate — capacity provider, ASG, task placement all need tuning. But it buys us GPUs. Lesson for the Lead: when picking a stack that's expensive in operational complexity, prepare the runbook and alarms in Week 1, don't wait until a production incident forces the learning.

### Next Week Plan

Final week: launch checklist, game-day failover, incident post-mortem template, ops hand-off doc.
