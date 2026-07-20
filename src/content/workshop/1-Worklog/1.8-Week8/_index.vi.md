---
title: "Nhật ký công việc Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## TUẦN 8 - NHẬT KÝ

### Mục tiêu Tuần 8

Auth week. Mình chốt dùng Cognito (managed, đỡ tự quản JWT), design API contract auth với Quân-Thắng, giao Khiêm provision ALB + WAF + Cognito user pool. Định nghĩa integration test suite để tuần 9 chạy load test có căn cứ.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Chốt Cognito over JWT self-managed: ADR-004 — lý do (rotation, MFA, hosted UI); scope: email + Google OIDC. | 15/06/2026 | 15/06/2026 | [Cognito](https://docs.aws.amazon.com/cognito/) |
| 2 | Design auth contract: FE dùng OIDC hosted UI, callback lưu token, gọi BE với `Authorization: Bearer`; sync với Quân-Thắng. | 16/06/2026 | 16/06/2026 | - |
| 3 | Review Khiêm: Cognito user pool `upscale-users` + app client + Google identity provider + hosted UI domain. | 17/06/2026 | 17/06/2026 | - |
| 4 | Review Khiêm: ALB `upscale-alb` HTTPS listener + target group EC2 + WAF rate-limit 100 req/5min/IP. | 18/06/2026 | 19/06/2026 | [ALB + Cognito](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html) |
| 5 | Review PR Thắng: middleware verify JWT Cognito (JWKS cache 24h) + inject `user_id` vào request context. | 20/06/2026 | 20/06/2026 | - |
| 6 | Review PR Quân: đăng nhập qua hosted UI + lưu token + refresh flow; approve. | 21/06/2026 | 21/06/2026 | - |
| 7 | Design integration test suite (pytest) + list 20 scenario auth + upscale flow; giao Thắng implement tuần sau. | 21/06/2026 | 21/06/2026 | - |

### Kết quả đạt được Tuần 8

Login flow chạy end-to-end qua Google. ALB làm TLS termination + WAF chặn rate-limit trước khi tới EC2. Token verify server-side đúng chuẩn (audience + issuer). Cả team đồng thuận dùng Cognito thay tự viết auth — decision này save cho project ít nhất 2 tuần công.

### Thách thức & Bài học

Cognito hosted UI custom hạn chế — Quân hỏi có làm login form riêng được không, mình cân nhắc rồi giữ hosted UI vì effort custom quá lớn so với lợi ích. Đây là loại trade-off Lead phải quyết dứt khoát, không để team debate mãi. Rule mình dùng: nếu tự viết mất > 1 tuần và managed service đáp ứng 80% yêu cầu, chọn managed.

### Kế hoạch tuần sau

Load test (k6), tile inference cho ảnh > 4K, CloudWatch dashboard. Review kế hoạch với Khiêm + Thắng.
