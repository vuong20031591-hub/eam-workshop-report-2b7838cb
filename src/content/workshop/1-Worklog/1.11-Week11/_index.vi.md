---
title: "Nhật ký công việc Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## TUẦN 11 - NHẬT KÝ

### Mục tiêu Tuần 11

Tuần scale — lớn nhất project. Mình chia thành 4 track song song: (1) Khiêm provision ECS on EC2 + ASG + ALB target group; (2) Khiêm set SQS + ElastiCache Redis + EFS; (3) Thắng refactor rate limiter dùng Redis (UPS-2) + async worker consume SQS; (4) Quân viết Playwright E2E. Mình làm coordinator, review daily.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Design scale architecture: ECS on EC2 (g4dn.xlarge, ASG 1-4 instance), SQS `upscale-job-queue`, Redis `upscale-redis`, EFS `upscale-efs` cho weights + pgdata. | 13/07/2026 | 13/07/2026 | [ECS Capacity Providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html) |
| 2 | Review Khiêm: ECS cluster + task definition GPU + ASG capacity provider + scaling policy (target 70% CPU/GPU). | 14/07/2026 | 15/07/2026 | - |
| 3 | Review Khiêm: SQS queue + DLQ + visibility timeout 300s; ElastiCache Redis cluster 1 node cache.t3.small; EFS mount target 2 AZ. | 16/07/2026 | 16/07/2026 | [ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/) |
| 4 | Review PR Thắng UPS-2: rate limiter chuyển từ in-memory sang Redis (`redis-py` + sliding window); tests pass. | 17/07/2026 | 17/07/2026 | - |
| 5 | Review PR Thắng UPS-1: fix memory leak `_progress_store` (cleanup sau `done` + TTL 1h) + async worker consume SQS. | 18/07/2026 | 18/07/2026 | - |
| 6 | Review PR Quân: Playwright E2E 8 scenario (login, upload, upscale, download, error, mobile) chạy CI xanh. | 19/07/2026 | 19/07/2026 | [Playwright](https://playwright.dev/) |
| 7 | Load test lại: sustained 60 RPS OK, spike 100 RPS OK — ASG scale từ 1 lên 3 instance trong 4 phút. | 19/07/2026 | 19/07/2026 | - |

### Kết quả đạt được Tuần 11

Từ 20 RPS lên 60 RPS ổn định. Job dài (> 30s) chuyển sang SQS + async worker, ALB không còn timeout. Rate limiter Redis đúng ngữ nghĩa distributed. UPS-1, UPS-2 close. Playwright chạy CI, mỗi PR bây giờ có xác nhận E2E trước khi merge.

### Thách thức & Bài học

EFS latency ban đầu cao hơn EBS ~3x cho weights read → Khiêm enable `provisioned-throughput` mode. Đây là loại chi tiết chỉ lộ ra khi load test thật; ADR mình cập nhật lại note lesson này. Bài học Lead: design đúng lý thuyết chưa đủ, phải đo thật rồi mới ký ADR final. Nếu deploy production luôn thì user sẽ là người test hộ.

### Kế hoạch tuần sau

Go-live: Route 53 alias `upscale.dev`, cost review + Savings Plan, launch checklist. Sprint retro toàn project.
