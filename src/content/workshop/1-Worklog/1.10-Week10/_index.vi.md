---
title: "Nhật ký công việc Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## TUẦN 10 - NHẬT KÝ

### Mục tiêu Tuần 10

Security hardening tuần: Secrets Manager rotation cho DB password + API key, WAF managed rules (OWASP top 10), Prometheus `/metrics` (UPS-6) cho Khiêm. Song song mình viết API docs public + ADR tổng kết security posture.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Review Khiêm: Secrets Manager `upscale/db` + `upscale/api-keys` + rotation Lambda 90 ngày. | 06/07/2026 | 07/07/2026 | [Secrets Manager Rotation](https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html) |
| 2 | Review Khiêm: WAF rule group `AWSManagedRulesCommonRuleSet` + `AWSManagedRulesKnownBadInputsRuleSet` áp cho ALB + CloudFront. | 08/07/2026 | 08/07/2026 | [WAF Managed Rules](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups.html) |
| 3 | Review PR Khiêm UPS-6: expose `/metrics` (prometheus-fastapi-instrumentator) + CloudWatch Agent scrape. | 09/07/2026 | 09/07/2026 | [prometheus-fastapi-instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) |
| 4 | Viết API docs public (Redoc từ OpenAPI): endpoint public + auth flow + rate limit + error codes. | 10/07/2026 | 11/07/2026 | [Redoc](https://redocly.com/) |
| 5 | Security review meeting với team: đi qua checklist OWASP + IAM least-privilege audit; ghi 3 finding cho tuần 11. | 12/07/2026 | 12/07/2026 | - |
| 6 | Review PR Thắng: sửa 2 finding (input validation strict hơn cho `object_key`, log không leak PII). | 12/07/2026 | 12/07/2026 | - |
| 7 | Viết ADR-006 security posture: authn Cognito, authz middleware, secrets rotation, WAF, log retention. | 12/07/2026 | 12/07/2026 | - |

### Kết quả đạt được Tuần 10

Ba lớp security đã đóng: identity (Cognito), transport (ALB TLS + WAF), storage (SSE-S3 + Secrets Manager rotation). API docs public tại `docs.upscale.dev`. Prometheus metrics chạy song song với CloudWatch, cho phép Grafana dashboard tuần sau nếu cần. UPS-6 close.

### Thách thức & Bài học

WAF managed rule ban đầu chặn nhầm 1 request FE hợp lệ (nghi ngờ XSS trên filename), mình phải review log rồi giao Khiêm thêm exception rule cho path `/upload/init`. Bài học: managed rule tiện nhưng phải monitor false positive tuần đầu, không bật-quên. Với Lead, đây là quyết định trade-off giữa "chặn hết" và "để user chạy được".

### Kế hoạch tuần sau

Scale ngang: ECS on EC2, ASG, SQS async, ElastiCache Redis, EFS shared. Playwright E2E. Đây là tuần lớn nhất — mình sẽ chia nhỏ issue cho từng người.
