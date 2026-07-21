---
title: "Worklog Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục Tiêu Tuần 5

- Đọc metric và log của một EC2 thật trong CloudWatch, không chỉ trên slide.
- Bật ít nhất một alarm chạy được và cho nó gửi email khi vi phạm.
- Chuyển các thao tác lặp từ Console sang AWS CLI cho quen ngón tay.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Cài CloudWatch Agent trên EC2, đẩy metric bộ nhớ và disk lên. | 18/05/2026 | 18/05/2026 | [Amazon CloudWatch](https://000013.awsstudygroup.com/) |
| T3 | Tạo alarm CPU > 70% trong 5 phút và bắn qua SNS về email. | 19/05/2026 | 19/05/2026 | [CloudWatch Alarms](https://000013.awsstudygroup.com/) |
| T4 | Đẩy log ứng dụng vào CloudWatch Logs, viết một filter đơn giản. | 20/05/2026 | 20/05/2026 | [CloudWatch Logs](https://000013.awsstudygroup.com/) |
| T5 | Cấu hình AWS CLI với profile riêng và region mặc định. | 21/05/2026 | 21/05/2026 | [AWS CLI](https://000014.awsstudygroup.com/) |
| T6 | Viết vài script CLI ngắn: list bucket, copy file, describe instance. | 22/05/2026 | 22/05/2026 | [AWS CLI](https://000014.awsstudygroup.com/) |

### Kết quả đạt được Tuần 5

- Dashboard CloudWatch có sẵn cho một EC2, đọc được xu hướng nhanh.
- Alarm bắn email khi tôi cố tình load CPU, không phải chỉ chạy trên giấy.
- Log ứng dụng vào CloudWatch, biết cách grep bằng filter pattern.
- CLI đã thành phản xạ cho các thao tác ngắn, đỡ mở tab Console.

### Khó khăn & Bài học

- **Khó khăn:**
  - Cài CloudWatch Agent lần đầu vướng ở IAM permission, agent im lặng không đẩy gì lên.
- **Giải pháp:**
  - Bật debug log của agent, đọc dòng đầu tiên báo AccessDenied, gắn thêm policy tối thiểu là xong.
- **Bài học:**
  - Khi agent im re, đừng đoán, mở log của chính nó ra trước.

### Kế hoạch Tuần tới

- DynamoDB: thiết kế theo access pattern chứ không theo bảng SQL.
- ElastiCache Redis: đo thử độ trễ đọc trước và sau khi cache.
- Chuẩn bị tinh thần bước sang giai đoạn dự án.
