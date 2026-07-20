---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

### Week 9 Objectives

Load test + tile inference + dashboard. Tôi design test plan (RPS mục tiêu, ảnh mẫu), giao Thang implement tile inference cho ảnh > 4K (tránh OOM GPU), review dashboard Khiem build. Kết quả tuần này là căn cứ để tuần 11 quyết định horizontal scale.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Design load test plan: k6 script, 3 kịch bản (spike 50 RPS, sustained 20 RPS 30 phút, endurance 5 RPS 4h). | 29/06/2026 | 29/06/2026 | [k6](https://k6.io/docs/) |
| 2 | Chốt strategy tile inference: cắt ảnh > 4K thành tile 1024×1024 overlap 32px, ghép lại; ADR-005. | 30/06/2026 | 30/06/2026 | - |
| 3 | Review PR Thang: `TileProcessor` + unit test seam continuity (không thấy đường ghép). | 01/07/2026 | 02/07/2026 | - |
| 4 | Review integration test suite Thang implement từ spec tuần 8: 20/20 pass. | 03/07/2026 | 03/07/2026 | - |
| 5 | Chạy load test cùng Khiem: sustained 20 RPS OK, spike 50 RPS thấy 502 sau 3 phút → cần scale ngang. | 04/07/2026 | 04/07/2026 | - |
| 6 | Review Khiem: CloudWatch Dashboard `upscale-dev` (ALB 5XX, TargetResponseTime, GPU util, p90 latency) + SNS alarm p90 > 8s. | 05/07/2026 | 05/07/2026 | [CloudWatch Dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html) |
| 7 | Retro + roadmap tuần 11: chốt ECS on EC2 + ASG capacity provider + SQS async cho request > 30s. | 05/07/2026 | 05/07/2026 | - |

### Week 9 Achievements

Tile inference cho phép xử lý ảnh 8K không OOM (test với 7680×4320). Load test có số thật: 1 instance GPU chịu 20 RPS ổn định, > 30 RPS bắt đầu 502. Dashboard live, alarm SNS bắn ping tới Slack. Số này là input cho quyết định scale ngang tuần 11.

### Challenges & Lessons

502 dưới spike là dấu hiệu single-instance chạm trần. Team ban đầu muốn nhảy sang EKS luôn, tôi giữ lại — chọn ECS on EC2 vì team chưa có ai quản Kubernetes, chi phí learning quá cao so với lợi ích. Bài học: chọn tech theo năng lực team, không theo hype. Nếu ép EKS lúc này thì tuần 11 sẽ chậm 2 tuần.

### Next Week Plan

Security hardening: Secrets Manager rotation, WAF managed rules, API docs public. Review Khiem provision Secrets Manager + rotate DB password.
