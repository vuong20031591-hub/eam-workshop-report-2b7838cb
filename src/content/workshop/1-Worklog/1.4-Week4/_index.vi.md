---
title: "Worklog Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WORKLOG TUẦN 4

### Trọng tâm

Security Group và S3. Hai thứ nhìn nhàm nhưng làm sai convention là rất đau.

### Việc tôi làm

- Chia `UPS-6` (SG) và `UPS-7` (S3) thành ticket nhỏ theo service.
- Review ma trận SG (ai được gọi ai, port nào), gạt bản đầu tiên vì mở Redis ra ngoài Internet.
- Review PR S3, chốt mọi bucket bật block-public-access mặc định.
- Tự làm: chọn tên bucket `upscale-<env>-<purpose>` (input, output, artifacts, logs), viết lifecycle rule (glacier sau 30 ngày, xoá logs sau 90 ngày), làm template bucket policy dùng chung.
- Làm buổi review ngắn với nhóm để giải thích vì sao SG lại chốt như vậy.

### Kết quả

Ma trận SG và convention S3 merge xong. Bucket và service mới cứ theo template, tôi không phải bám từng PR nữa.

### Khó khăn

Có bạn ngạc nhiên là ALB → ECS trong cùng VPC vẫn cần SG rule. Ghi thêm dòng ghi chú vào ADR.

### Kế hoạch tuần sau

Chương 5.5. EFS cho model weights dùng chung và ECR cho image container.
