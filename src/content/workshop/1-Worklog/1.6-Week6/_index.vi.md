---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

### Week 6 Objectives

Chương 5.5 Application, nửa đầu: dựng ElastiCache Redis cho cache và SQS cho job queue. Đây là hai chỗ FastAPI dựa vào, nên tôi set up trước rồi mới đến ECS cluster.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Tạo ElastiCache subnet group gồm 2 private subnet. | 24/05/2026 | 24/05/2026 | [ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/) |
| 2 | Tạo Redis cluster `upscale-redis` trên `cache.t3.micro`. | 25/05/2026 | 25/05/2026 | - |
| 3 | Kết nối Redis từ EC2 test, chạy `PING` → nhận `PONG`. Vui nhỏ. | 26/05/2026 | 26/05/2026 | - |
| 4 | Tạo SQS queue `upscale-job-queue` và một dead-letter queue cho job fail. | 27/05/2026 | 27/05/2026 | [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/) |
| 5 | Gửi và nhận thử message qua AWS CLI để thấy queue hoạt động thật. | 28/05/2026 | 28/05/2026 | - |
| 6 | Viết comment ngắn trên Linear `UPS-7` giải thích Redis và SQS dùng để làm gì bằng lời mình. | 29/05/2026 | 29/05/2026 | - |
| 7 | Đóng `UPS-7`, mở `UPS-8` (ECS cluster + task definition). | 30/05/2026 | 30/05/2026 | - |

### Week 6 Achievements

Redis và SQS đã live, EC2 test kết nối được. Việc phải giải thích lại trên Linear ép tôi hiểu thật, không phải bấm qua wizard cho xong.

### Challenges & Lessons

Ban đầu tôi không connect được Redis. Hoá ra EC2 test ở SG khác, mà SG của Redis chỉ cho SG của ECS vào. Bài học: connection timeout thì nghi ngờ security group trước, đừng vội đổ cho code.

### Next Week Plan

Chương 5.5 nửa sau: ECS cluster với EC2 GPU, task definition, service. Theo dõi ở `UPS-8`.
