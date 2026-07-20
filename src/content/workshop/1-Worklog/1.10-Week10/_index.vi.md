---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

### Week 10 Objectives

Chương 5.8 Observability. Đẩy log từ ECS sang CloudWatch, dựng dashboard nhỏ và thêm một alarm để biết khi API có vấn đề.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Tạo CloudWatch log group `/ecs/upscale-api` và `/ecs/upscale-postgres`. | 21/06/2026 | 21/06/2026 | [CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/) |
| 2 | Xác nhận ECS task đang stream stdout vào log group. | 22/06/2026 | 22/06/2026 | - |
| 3 | Dựng dashboard CloudWatch 4 widget: request count, tỉ lệ 5xx, CPU, GPU util. | 23/06/2026 | 23/06/2026 | - |
| 4 | Tạo một alarm khi tỉ lệ 5xx > 5% trong 5 phút. | 24/06/2026 | 24/06/2026 | - |
| 5 | Đấu alarm về email qua SNS. | 25/06/2026 | 25/06/2026 | [SNS](https://docs.aws.amazon.com/sns/latest/dg/) |
| 6 | Cố tình phá app (kill task) để xem alarm có kêu thật không. | 26/06/2026 | 26/06/2026 | - |
| 7 | Đóng `UPS-12` trên Linear, kéo `UPS-13` (deploy frontend). | 27/06/2026 | 27/06/2026 | - |

### Week 10 Achievements

Tôi có thể theo dõi API trong một tab. Alarm chạy đúng: kill task là có email. Tuần đầu tiên dự án cảm giác vận hành được, không chỉ dựng xong.

### Challenges & Lessons

Ban đầu log không lên do task role thiếu `logs:CreateLogStream`. Lỗi ẩn trong "Stopped reason" của task. Bài học: xem event của task trước khi mở code ra debug.

### Next Week Plan

Chương 5.9 Deployment: build frontend, upload lên S3, invalidate CloudFront. Theo dõi ở `UPS-13`.
