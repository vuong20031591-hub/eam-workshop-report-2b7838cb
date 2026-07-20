---
title: "Worklog Tuần 12"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WORKLOG TUẦN 12

### Trọng tâm

Cleanup, báo cáo cuối, bàn giao. Kết thúc kỳ thực tập với tài khoản gọn và kiến thức được truyền lại.

### Việc tôi làm

- Biến `UPS-18` thành sub-ticket: cleanup, report, handover.
- Chạy cleanup theo chương 5.10, ngược thứ tự (CloudFront → WAF → ALB → ECS → EFS → Redis → SQS → S3 → VPC → IAM), chỉ giữ những artefact cần (log export, repo IaC, doc site).
- Rà bill cuối để chắc không còn gì chạy.
- Chủ trì retrospective với nhóm: cái gì work, cái gì giữ, cái gì bỏ.
- Tự làm: viết báo cáo thực tập cuối, cập nhật doc site để người mới dựng lại stack từ đầu được, và làm slide bàn giao ngắn.

### Kết quả

Tài khoản sạch, bill hôm sau về gần bằng không. Báo cáo nộp xong, doc site cập nhật, retrospective note chia sẻ. Kỳ thực tập đóng.

### Khó khăn

Cleanup thủ công dễ sót. Tôi ghi vào retrospective là lần sau nên Terraform toàn bộ để cleanup chỉ một câu lệnh.

### Kế tiếp

Kết thúc.
