---
title: "Worklog Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục Tiêu Tuần 4

- Cảm được ý nghĩa 'managed' của RDS bằng cách bật một Postgres nhỏ và kết nối thật.
- Đọc kỹ backup tự động, snapshot, Multi-AZ so với read replica dù chưa cần dùng.
- Nghịch Lightsail để thấy đầu kia của phổ trải nghiệm AWS.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tạo RDS Postgres db.t3.micro trong VPC, chọn subnet group và parameter group mặc định. | 11/05/2026 | 11/05/2026 | [Amazon RDS](https://000011.awsstudygroup.com/) |
| T3 | Kết nối từ EC2 cùng VPC, chỉnh SG cho phép port 5432 tối thiểu, chạy vài query. | 12/05/2026 | 12/05/2026 | [Amazon RDS](https://000011.awsstudygroup.com/) |
| T4 | Bật backup tự động, thử tạo snapshot thủ công và restore ra một instance khác. | 13/05/2026 | 13/05/2026 | [Amazon RDS Backup](https://000011.awsstudygroup.com/) |
| T5 | Đọc so sánh Multi-AZ với read replica; ghi lại khi nào chọn cái nào. | 14/05/2026 | 14/05/2026 | [RDS Multi-AZ](https://000011.awsstudygroup.com/) |
| T6 | Dựng một app mẫu trên Lightsail cho nhanh, so cảm giác với EC2. | 15/05/2026 | 15/05/2026 | [Amazon Lightsail](https://000012.awsstudygroup.com/) |

### Kết quả đạt được Tuần 4

- Postgres chạy được, kết nối ổn, biết cách siết SG chỉ mở đúng nguồn cần.
- Có sẵn snapshot đầu tay và một lần restore để biết flow trông ra sao.
- Trong đầu đã có bảng đối chiếu Multi-AZ và read replica gọn gàng.
- Lightsail dựng app rất nhanh, phù hợp mấy thứ nhỏ, không thay được EC2 cho việc thật.

### Khó khăn & Bài học

- **Khó khăn:**
  - Lần đầu SG quá đóng, kết nối rớt và tôi tưởng RDS lỗi; loay hoay hơi lâu mới nhận ra là mạng.
- **Giải pháp:**
  - Đi ngược từ lỗi client về phía RDS: telnet cổng, kiểm SG cả hai chiều, kiểm subnet route.
- **Bài học:**
  - Với DB, nghi mạng trước khi nghi engine, dễ đúng hơn.

### Kế hoạch Tuần tới

- CloudWatch cho metric, log và alarm cơ bản.
- Sống hẳn trong AWS CLI thay vì Console cho các thao tác lặp.
- Chuẩn bị vocabulary trước khi vào DynamoDB.
