---
title: "Worklog Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WORKLOG TUẦN 8

Tuần ALB. Mục tiêu là đặt Application Load Balancer trước API và làm routing rule rõ ràng, thay vì "mặc định thế nào thì thế".

`UPS-12` chia thành dựng ALB, target group cho FastAPI, listener rule, và chứng chỉ TLS qua ACM. Một buổi thiết kế ngắn về path routing: `/api/*` sang FastAPI, `/health` cho balancer, còn lại trả 404 để không vô tình lộ ra route mà mình chưa nghĩ tới.

PR ALB tôi yêu cầu hai chỗ. Tắt stickiness, vì job async, không có gì để stick. Nâng idle timeout lên 120 giây để client long-polling không bị cắt giữa chừng. Cấu hình target group phần lớn ổn, tôi chỉ siết health check `/health` với ngưỡng 2/2 để một cú chớp không đá target ra.

Tự tay tôi chọn spec health check, request chứng chỉ ACM, viết kế hoạch DNS cho tuần sau, cập nhật deploy checklist.

FastAPI giờ tiếp cận được qua ALB bằng HTTPS. Health check ổn, không có target lấp lửng.

Nửa ngày tôi không dự trù là validate ACM. Bản ghi DNS vào sai hosted zone, chứng chỉ nằm pending cho tới lúc tôi để ý. Tôi ghi lại đúng luồng validate vào runbook để người sau bắt được trong năm phút chứ không phải năm tiếng.

Tuần sau chương 5.9. CloudFront trước ALB, WAF phía trên, Route 53 trỏ về.
