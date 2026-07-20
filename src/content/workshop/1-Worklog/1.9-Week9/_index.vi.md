---
title: "Nhật ký công việc Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## TUẦN 9 - NHẬT KÝ

### Mục tiêu Tuần 9

Load test + tile inference + dashboard. Mình design test plan (RPS mục tiêu, ảnh mẫu), giao Thắng implement tile inference cho ảnh > 4K (tránh OOM GPU), review dashboard Khiêm build. Kết quả tuần này là căn cứ để tuần 11 quyết định horizontal scale.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Design load test plan: k6 script, 3 kịch bản (spike 50 RPS, sustained 20 RPS 30 phút, endurance 5 RPS 4h). | 29/06/2026 | 29/06/2026 | [k6](https://k6.io/docs/) |
| 2 | Chốt strategy tile inference: cắt ảnh > 4K thành tile 1024×1024 overlap 32px, ghép lại; ADR-005. | 30/06/2026 | 30/06/2026 | - |
| 3 | Review PR Thắng: `TileProcessor` + unit test seam continuity (không thấy đường ghép). | 01/07/2026 | 02/07/2026 | - |
| 4 | Review integration test suite Thắng implement từ spec tuần 8: 20/20 pass. | 03/07/2026 | 03/07/2026 | - |
| 5 | Chạy load test cùng Khiêm: sustained 20 RPS OK, spike 50 RPS thấy 502 sau 3 phút → cần scale ngang. | 04/07/2026 | 04/07/2026 | - |
| 6 | Review Khiêm: CloudWatch Dashboard `upscale-dev` (ALB 5XX, TargetResponseTime, GPU util, p90 latency) + SNS alarm p90 > 8s. | 05/07/2026 | 05/07/2026 | [CloudWatch Dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html) |
| 7 | Retro + roadmap tuần 11: chốt ECS on EC2 + ASG capacity provider + SQS async cho request > 30s. | 05/07/2026 | 05/07/2026 | - |

### Kết quả đạt được Tuần 9

Tile inference cho phép xử lý ảnh 8K không OOM (test với 7680×4320). Load test có số thật: 1 instance GPU chịu 20 RPS ổn định, > 30 RPS bắt đầu 502. Dashboard live, alarm SNS bắn ping tới Slack. Số này là input cho quyết định scale ngang tuần 11.

### Thách thức & Bài học

502 dưới spike là dấu hiệu single-instance chạm trần. Team ban đầu muốn nhảy sang EKS luôn, mình giữ lại — chọn ECS on EC2 vì team chưa có ai quản Kubernetes, chi phí learning quá cao so với lợi ích. Bài học: chọn tech theo năng lực team, không theo hype. Nếu ép EKS lúc này thì tuần 11 sẽ chậm 2 tuần.

### Kế hoạch tuần sau

Security hardening: Secrets Manager rotation, WAF managed rules, API docs public. Review Khiêm provision Secrets Manager + rotate DB password.
