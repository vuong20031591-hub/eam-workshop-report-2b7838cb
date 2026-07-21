---
title: "Worklog Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Mục Tiêu Tuần 2

- Nắm vững AWS IAM: Users, Groups, Policies và Roles.
- Áp dụng nguyên tắc least privilege khi cấp quyền.
- Xây dựng mạng VPC cơ bản với subnets, route tables và Internet Gateway.
- Khởi tạo và kết nối được EC2 instance qua SSH.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tìm hiểu AWS Identity and Access Management (IAM), bao gồm Users, Groups, Policies và Roles. | 24/04/2026 | 24/04/2026 | [IAM](https://000002.awsstudygroup.com/) |
| T3 | Tạo IAM users và groups, gán quyền và áp dụng nguyên tắc least privilege. | 27/04/2026 | 27/04/2026 | [IAM Users & Groups](https://000002.awsstudygroup.com/) |
| T4 | Xây dựng Virtual Private Cloud (VPC), cấu hình subnets, route tables và Internet Gateway. | 28/04/2026 | 28/04/2026 | [VPC](https://000003.awsstudygroup.com/) |
| T5 | Khởi tạo Amazon EC2 instance và cấu hình Security Groups, key pairs. | 29/04/2026 | 29/04/2026 | [EC2](https://000004.awsstudygroup.com/) |
| T6 | Kết nối EC2 instance qua SSH và thực hiện các tác vụ quản lý cơ bản. | 30/04/2026 | 30/04/2026 | [EC2 SSH](https://000004.awsstudygroup.com/) |

### Kết quả đạt được Tuần 2

- Tạo được IAM users/groups với quyền phù hợp, áp dụng least privilege đúng cách.
- Dựng thành công VPC cơ bản với public subnet, route table và Internet Gateway.
- Khởi tạo EC2 instance và kết nối SSH được bằng key pair.
- Hiểu cách Security Groups kiểm soát traffic inbound/outbound cho instance.

### Khó khăn & Bài học

- **Khó khăn:**
  - Cấu hình IAM Policy và route table trong VPC dễ sai và khó debug ở lần đầu.
- **Giải pháp:**
  - Làm theo lab từng bước, dùng IAM Policy Simulator để kiểm tra quyền, vẽ sơ đồ VPC trước khi triển khai.
- **Bài học:**
  - IAM và VPC là nền tảng của mọi dịch vụ AWS sau này, cần hiểu chắc trước khi đi tiếp.

### Kế hoạch Tuần tới

- Thực hành IAM Roles for EC2 để truy cập dịch vụ AWS an toàn.
- Tìm hiểu AWS Cloud9 làm môi trường phát triển trên cloud.
- Triển khai static website bằng Amazon S3.
