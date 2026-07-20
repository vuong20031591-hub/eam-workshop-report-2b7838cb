---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

### Week 8 Objectives

Tuần 8 tôi đầu tư vào auth và security baseline. Chốt Cognito thay vì self-managed JWT (ADR-004), viết spec rate limit trong FastAPI, và chốt WAF rule baseline trước khi mở public traffic.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết ADR-004 auth: chọn Cognito User Pool + Google Federation thay vì self-managed JWT; document trade-off. | 15/06/2026 | 15/06/2026 | [Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/) |
| 2 | Viết spec Cognito setup: User Pool `upscale-users`, App Client, Google IdP; hosted UI domain. | 16/06/2026 | 16/06/2026 | - |
| 3 | Review PR Cognito provision + FastAPI middleware verify JWT bằng JWKS. | 17/06/2026 | 17/06/2026 | [Cognito JWT Verify](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html) |
| 4 | Viết spec rate limit: `slowapi` 30 req/phút/user cho `/upscale/*`; return 429 với `Retry-After`. | 18/06/2026 | 18/06/2026 | [slowapi](https://slowapi.readthedocs.io/) |
| 5 | Chốt WAF baseline: AWS Managed Rules Common + IP reputation + geo-block; log full request; giao provision. | 19/06/2026 | 19/06/2026 | [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/) |
| 6 | Review PR FE tích hợp Cognito hosted UI + token refresh flow. | 20/06/2026 | 20/06/2026 | - |
| 7 | Sprint retro: auth end-to-end, WAF live; note prep load test cho tuần 9. | 21/06/2026 | 21/06/2026 | - |

### Week 8 Achievements

Cognito + Google OAuth chạy end-to-end. WAF chặn được test payload SQLi/XSS ngay lần đầu bật. Rate limit 30 req/phút bảo vệ GPU khỏi bị lạm dụng. ADR-004 giúp giải thích với stakeholder tại sao không tự viết JWT.

### Challenges & Lessons

Bài học lớn nhất khi chọn Cognito: rẻ hơn self-managed JWT không phải về tiền, mà về thời gian bảo trì. Tôi từng nghiêng về self-managed vì nghĩ đơn giản hơn, nhưng liệt kê ra checklist (password reset, MFA, refresh token rotation, revoke, audit log) mới thấy Cognito free được toàn bộ. Kỹ năng Lead cần rèn: khi phân vân, list checklist chi tiết thay vì cảm tính.

### Next Week Plan

Viết spec load test plan bằng k6. Viết spec tile-based inference cho ảnh 8K để tránh OOM GPU.
