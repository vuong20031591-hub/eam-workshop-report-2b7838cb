---
title: "Worklog Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WORKLOG TUẦN 8

### Trọng tâm

Đặt Application Load Balancer trước API và làm routing rõ ràng.

### Việc tôi làm

- Chia `UPS-12` thành: dựng ALB, target group cho FastAPI, listener rule, chứng chỉ TLS qua ACM.
- Chủ trì buổi ngắn về path routing: `/api/*` sang FastAPI, `/health` cho balancer, còn lại 404.
- Review PR ALB, yêu cầu tắt stickiness (job async) và nâng idle timeout lên 120s cho long polling.
- Review cấu hình target group, siết health check `/health` với ngưỡng 2/2.
- Tự làm: chọn spec health check, request chứng chỉ ACM, viết kế hoạch DNS cho tuần sau, cập nhật deploy checklist.

### Kết quả

FastAPI tiếp cận được qua ALB bằng HTTPS. Health check ổn, không có target lấp lửng.

### Khó khăn

Validate ACM kẹt nửa ngày vì bản ghi DNS ở sai hosted zone. Ghi lại đúng luồng validate vào runbook.

### Kế hoạch tuần sau

Chương 5.9. CloudFront trước ALB, WAF phía trên, và Route 53 trỏ về.
