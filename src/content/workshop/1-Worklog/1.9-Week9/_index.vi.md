---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

### Week 9 Objectives

Chương 5.7 Delivery. Thêm HTTPS với ACM, đặt CloudFront trước ALB và bucket S3 static, bật WAF để chặn cơ bản.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Request ACM cert cho domain workshop, validate qua DNS. | 14/06/2026 | 14/06/2026 | [ACM](https://docs.aws.amazon.com/acm/latest/userguide/) |
| 2 | Tạo CloudFront distribution với origin là bucket S3 static. | 15/06/2026 | 15/06/2026 | [CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/) |
| 3 | Thêm origin thứ hai trỏ về ALB cho `/api/*`. | 16/06/2026 | 16/06/2026 | - |
| 4 | Gắn cert ACM vào CloudFront, bật HTTPS-only. | 17/06/2026 | 17/06/2026 | - |
| 5 | Tạo WAF web ACL với AWS-managed rule set và gắn vào CloudFront. | 18/06/2026 | 18/06/2026 | [WAF](https://docs.aws.amazon.com/waf/latest/developerguide/) |
| 6 | Kiểm tra trên trình duyệt: có ổ khoá, request API vẫn chạy. | 19/06/2026 | 19/06/2026 | - |
| 7 | Đóng `UPS-11` trên Linear, nhận `UPS-12` (observability). | 20/06/2026 | 20/06/2026 | - |

### Week 9 Achievements

Traffic đi qua CloudFront với HTTPS đầu-cuối, WAF chặn ngầm mấy request rác rõ ràng. Domain workshop cuối cùng cũng có ổ khoá thay vì màn cảnh báo đáng sợ.

### Challenges & Lessons

Cert bị `Pending validation` cả tiếng. Tôi thêm CNAME nhầm hosted zone. Bài học với mọi thứ DNS: xác minh bằng `dig` ở terminal trước khi ngồi chờ.

### Next Week Plan

Chương 5.8 Observability: CloudWatch log, alarm, dashboard nhỏ. Làm ở `UPS-12`.
