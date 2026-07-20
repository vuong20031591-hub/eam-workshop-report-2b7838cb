---
title: "Worklog Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WORKLOG TUẦN 6

### Trọng tâm

Redis và SQS. Hai mảnh quyết định hệ thống có mượt khi tải cao hay không.

### Việc tôi làm

- Chia việc thành `UPS-9` (Redis) và `UPS-10` (SQS), gắn owner rõ.
- Chủ trì buổi thiết kế queue: một main queue kèm DLQ, redrive sau 3 lần thất bại, visibility timeout khớp p95 thời gian upscale.
- Review PR cấu hình Redis, gạt phương án single-node, yêu cầu multi-AZ.
- Review PR worker consume SQS, cờ chỗ quên delete message ở nhánh lỗi.
- Tự làm: viết schema message (JSON: job_id, s3_input, s3_output, params, submitted_at), retry policy, và convention key cache.

### Kết quả

Queue và cache đã dựng, schema chung để mọi người code theo. DLQ đưa lên CloudWatch board để phát hiện lỗi sớm.

### Khó khăn

Visibility timeout ban đầu đặt thấp, job dài bị retry trong khi đang chạy. Nâng lên 15 phút và ghi rõ lý do.

### Kế hoạch tuần sau

Chương 5.7. Dựng ECS cluster và chạy task đầu tiên.
