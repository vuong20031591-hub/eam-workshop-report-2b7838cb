---
title: "Worklog Tuần 3"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Mục Tiêu Tuần 3

- Gắn IAM Role vào EC2 thay cho access key và xác nhận SDK pick lên đúng.
- Thử Cloud9 xem có đáng thay VS Code cho vài task hay không.
- Đưa một trang tĩnh lên S3, mở public đúng cách, không mở toang.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tạo IAM Role cho EC2 với policy tối thiểu, gán qua instance profile. | 04/05/2026 | 04/05/2026 | [IAM Roles for EC2](https://000005.awsstudygroup.com/) |
| T3 | Chạy AWS CLI trên instance để xác nhận credential đến từ role. | 05/05/2026 | 05/05/2026 | [IAM Roles for EC2](https://000005.awsstudygroup.com/) |
| T4 | Mở Cloud9, viết một script Python nhỏ đọc từ S3. | 06/05/2026 | 06/05/2026 | [AWS Cloud9](https://000006.awsstudygroup.com/) |
| T5 | Tạo S3 bucket cho website, upload index.html + assets, bật Static Website Hosting. | 07/05/2026 | 07/05/2026 | [S3 Static Website](https://000010.awsstudygroup.com/) |
| T6 | Viết Bucket Policy public read tối thiểu và tắt đúng phần Block Public Access. | 08/05/2026 | 08/05/2026 | [S3 Static Website](https://000010.awsstudygroup.com/) |

### Kết quả đạt được Tuần 3

- EC2 dùng role thay key, không còn credential nằm trên đĩa.
- Cloud9 chạy được, nhưng tôi vẫn về VS Code cho công việc chính.
- Trang tĩnh có URL, mở lên bằng browser thấy nội dung như ý.
- Hiểu vì sao Block Public Access sinh ra và khi nào mới nên tắt.

### Khó khăn & Bài học

- **Khó khăn:**
  - Bucket cứ 403 dù đã viết policy, quên là Block Public Access đang chặn ở tầng account.
- **Giải pháp:**
  - Tách các lớp chặn: account, bucket, object; đi từ trên xuống, mỗi lớp bật một cái rồi test lại.
- **Bài học:**
  - Guardrail mặc định của AWS thường là bạn, không phải kẻ thù, tắt phải có lý do.

### Kế hoạch Tuần tới

- RDS: bật một Postgres nhỏ và kết nối từ EC2 cùng VPC.
- Ngó Lightsail xem trải nghiệm khác gì với EC2.
- Đọc trước về backup và snapshot.
