---
title: "Worklog Tuần 3"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WORKLOG TUẦN 3

### Trọng tâm

Mạng. Chốt layout VPC để mọi thứ phía sau (ALB, ECS, EFS, Redis) có chỗ đặt ổn định.

### Việc tôi làm

- Chia `UPS-5` (VPC) thành sub-ticket: CIDR plan, subnet, routing, NAT, endpoint.
- Chủ trì buổi vẽ bảng cho topology, xong ngồi viết lại để nhóm không phải cãi nhau bằng trí nhớ.
- Review sơ đồ mạng nhóm dựng, phản đối phương án single-AZ cho tiết kiệm.
- Review PR subnet và route table.
- Tự làm: chọn CIDR (`10.20.0.0/16`), tách public/private subnet trên hai AZ, chốt một NAT cho đỡ tốn, liệt kê VPC endpoint thực sự cần (S3, ECR, CloudWatch Logs). Viết ADR mạng.

### Kết quả

Thiết kế VPC merge thành ADR. Nhóm biết mỗi service sau này thuộc subnet nào, không phải hỏi lại.

### Khó khăn

Cân chi phí và dự phòng cho NAT. Trước mắt một NAT, ghi follow-up để thêm cái thứ hai trước khi lên prod.

### Kế hoạch tuần sau

Chương 5.4. Security Group và S3. Tôi sẽ chốt convention bucket và policy.
