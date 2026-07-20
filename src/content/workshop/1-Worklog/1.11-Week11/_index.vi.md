---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

### Week 11 Objectives

Migrate BE từ EC2 đơn sang ECS on EC2 + ASG + SQS. Vai trò tôi: chốt kiến trúc chi tiết, viết spec worker + autoscale policy, review từng PR trong migration path.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Chốt kiến trúc: ALB → ECS task API (2 vCPU) → SQS `upscale-job-queue` → ECS task Worker GPU (g4dn.xlarge). | 06/07/2026 | 06/07/2026 | - |
| 2 | Review PR provision ECS cluster + ASG Capacity Provider (min 0, max 4, target 100% utilization). | 07/07/2026 | 07/07/2026 | [Capacity Providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html) |
| 3 | Viết spec worker: consume SQS long-poll 20s, xử lý job, push status Redis, retry x2, DLQ sau 3 lần fail. | 08/07/2026 | 08/07/2026 | [SQS Long Polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html) |
| 4 | Review PR refactor `/upscale/ai` push job vào SQS + return `job_id`; worker service consume. | 09/07/2026 | 09/07/2026 | - |
| 5 | Chốt autoscale policy: target tracking `SQSMessagesVisible` = 5 msg/task; scale-in cooldown 300s. | 10/07/2026 | 10/07/2026 | [ECS Target Tracking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-autoscaling-targettracking.html) |
| 6 | Chạy load test 100 VU: autoscale từ 1 → 3 GPU instance trong 4 phút; p95 giữ 11s. | 11/07/2026 | 11/07/2026 | - |
| 7 | Sprint retro: migration ECS live; scale-to-0 lúc 0 traffic tiết kiệm ~40% bill so với EC2 24/7. | 12/07/2026 | 12/07/2026 | - |

### Week 11 Achievements

Hệ thống chịu được burst 100 VU với autoscale mượt. Scale-to-0 mở ra khả năng giảm chi phí đáng kể vào giờ thấp điểm. SQS + DLQ đảm bảo không mất job khi worker crash — trước đây EC2 đơn crash là mất luôn request.

### Challenges & Lessons

ECS on EC2 phức tạp hơn Fargate rất nhiều — capacity provider, ASG, task placement đều phải chỉnh. Nhưng đổi lại có GPU. Bài học cho Lead: khi chọn tech đắt về operational complexity, phải chuẩn bị runbook và alarm ngay tuần đầu, không để rơi vào tình huống production incident mới học.

### Next Week Plan

Tuần cuối: viết launch checklist, chạy game-day test failover, viết post-mortem template, chuẩn bị hand-off doc cho vận hành.
