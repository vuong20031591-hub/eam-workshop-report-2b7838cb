---
title: "Worklog Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục Tiêu Tuần 4

- Hiểu về Amazon RDS và triển khai một database quan hệ được quản lý.
- Tìm hiểu Amazon Lightsail và so sánh với Amazon EC2.
- Tổng kết best practices khi lựa chọn giữa RDS và Lightsail.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tìm hiểu Amazon Relational Database Service (RDS), hiểu các khái niệm database và tùy chọn triển khai. | 08/05/2026 | 08/05/2026 | [Amazon RDS](https://000005.awsstudygroup.com/) |
| T3 | Tạo Amazon RDS instance và cấu hình kết nối database. | 11/05/2026 | 11/05/2026 | [Amazon RDS](https://000005.awsstudygroup.com/) |
| T4 | Khám phá Amazon Lightsail và so sánh với Amazon EC2. | 12/05/2026 | 12/05/2026 | [Amazon Lightsail](https://000045.awsstudygroup.com/) |
| T5 | Triển khai một ứng dụng đơn giản trên Amazon Lightsail. | 13/05/2026 | 13/05/2026 | [Amazon Lightsail](https://000045.awsstudygroup.com/) |
| T6 | Ôn tập kiến trúc RDS và Lightsail, tổng kết điểm khác biệt và best practices. | 14/05/2026 | 14/05/2026 | [Amazon Lightsail](https://000045.awsstudygroup.com/) |

### Kết quả đạt được Tuần 4

- Triển khai thành công một Amazon RDS instance và kết nối được từ client.
- Deploy được ứng dụng đơn giản trên Amazon Lightsail và truy cập công khai.
- Hiểu được ưu/nhược điểm giữa database quản lý (RDS) và tự quản lý trên EC2/Lightsail.

### Khó khăn & Bài học

- **Khó khăn:**
  - Cấu hình Security Group và network cho RDS để chỉ nguồn cho phép mới truy cập được.
- **Giải pháp:**
  - Làm theo lab awsstudygroup, chỉ mở port cần thiết (ví dụ 3306) cho một Security Group hoặc IP cụ thể.
- **Bài học:**
  - Dịch vụ managed như RDS, Lightsail giúp triển khai nhanh nhưng cấu hình mạng và quyền truy cập vẫn rất quan trọng.

### Kế hoạch Tuần tới

- Học Amazon CloudWatch để giám sát và cảnh báo.
- Cài đặt và sử dụng AWS CLI để quản lý tài nguyên AWS từ terminal.
- Tự động hóa một số tác vụ vận hành cơ bản bằng AWS CLI.
