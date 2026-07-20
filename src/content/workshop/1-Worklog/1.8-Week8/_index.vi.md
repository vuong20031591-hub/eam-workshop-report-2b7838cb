---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

### Week 8 Objectives

Chương 5.6 Access. Đặt Application Load Balancer trước ECS service, đưa traffic HTTP thật vào API từ ngoài VPC.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Tạo ALB `upscale-alb` ở 2 public subnet. | 07/06/2026 | 07/06/2026 | [ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/) |
| 2 | Tạo target group `upscale-api-tg` với health check ở `/health`. | 08/06/2026 | 08/06/2026 | - |
| 3 | Đăng ký ECS service vào target group. | 09/06/2026 | 09/06/2026 | - |
| 4 | Thêm listener HTTP port 80 → target group. | 10/06/2026 | 10/06/2026 | - |
| 5 | Xem target chuyển từ `initial` sang `healthy`, cuối cùng gõ DNS ALB từ trình duyệt là ra. | 11/06/2026 | 11/06/2026 | - |
| 6 | Upload ảnh thật qua API, thấy file xuất hiện trong S3. | 12/06/2026 | 12/06/2026 | - |
| 7 | Đóng `UPS-10` trên Linear, nhận `UPS-11` (CloudFront + WAF). | 13/06/2026 | 13/06/2026 | - |

### Week 8 Achievements

API đã tiếp cận được từ internet. End-to-end chạy: trình duyệt → ALB → ECS task → S3. Tuần này Upscale AI mới hết là sơ đồ trong sổ.

### Challenges & Lessons

Health check báo `unhealthy` liên tục vì SG của ECS chưa cho SG của ALB vào port container. Tôi để nhầm chiều rule. Đọc SG từ cả hai phía (nguồn và đích) là thói quen nhỏ tôi muốn giữ.

### Next Week Plan

Chương 5.7 Delivery: ACM cert, CloudFront distribution, WAF. Theo dõi ở `UPS-11`.
