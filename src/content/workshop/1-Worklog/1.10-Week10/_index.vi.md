---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WORKLOG TUẦN 10

### Trọng tâm

Cognito cho đăng nhập user và một góc CloudWatch thực sự báo được khi có vấn đề.

### Việc tôi làm

- Chia việc thành `UPS-15` (Cognito user pool + Google OAuth) và `UPS-16` (observability).
- Chủ trì buổi thiết kế luồng auth: Cognito user pool, hosted UI, Google làm identity provider, ID token đổi lấy session cookie ở FastAPI.
- Review PR Cognito, siết danh sách callback OAuth chỉ còn prod và local dev.
- Review PR dashboard CloudWatch, cắt bớt nửa số widget vì không ai nhìn.
- Tự làm: viết tài liệu luồng auth cho nhóm, và chọn alarm để paging (ALB 5xx > 1% trong 5 phút, DLQ SQS khác rỗng, GPU util > 90% kéo dài, ECS service unhealthy).

### Kết quả

User đăng nhập được bằng Google, API xác thực token, dashboard chỉ hiện bốn số thực sự cần nhìn.

### Khó khăn

CORS Cognito hosted UI ngốn vài tiếng. Viết một ghi chú ngắn "quy tắc callback URL" vào runbook.

### Kế hoạch tuần sau

Đóng chương 5.9. Diễn tập deploy end-to-end và demo.
