---
title: "Worklog Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục Tiêu Tuần 6

- Tìm hiểu kiến trúc và các thao tác cơ bản của Amazon DynamoDB.
- Hiểu về Amazon ElastiCache và triển khai một cache cluster.
- So sánh NoSQL và in-memory cache trong các tình huống thực tế.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tìm hiểu kiến trúc Amazon DynamoDB: tables, items, partitions và indexes. | 22/05/2026 | 22/05/2026 | [Amazon DynamoDB](https://000060.awsstudygroup.com/) |
| T3 | Tạo DynamoDB tables và thực hiện các thao tác CRUD. | 25/05/2026 | 25/05/2026 | [DynamoDB CRUD](https://000060.awsstudygroup.com/) |
| T4 | Tìm hiểu Amazon ElastiCache và các engine được hỗ trợ. | 26/05/2026 | 26/05/2026 | [Amazon ElastiCache](https://000061.awsstudygroup.com/) |
| T5 | Triển khai một ElastiCache cluster và kết nối vào ứng dụng. | 27/05/2026 | 27/05/2026 | [ElastiCache Cluster](https://000061.awsstudygroup.com/) |
| T6 | Ôn tập DynamoDB và ElastiCache, tổng kết khi nào dùng NoSQL và khi nào dùng in-memory cache. | 28/05/2026 | 28/05/2026 | [ElastiCache](https://000061.awsstudygroup.com/) |

### Kết quả đạt được Tuần 6

- Tạo được bảng DynamoDB và thực hiện thành công các thao tác CRUD.
- Triển khai ElastiCache cluster và kết nối được từ ứng dụng mẫu.
- Hiểu được khác biệt giữa NoSQL storage (DynamoDB) và in-memory cache (ElastiCache).

### Khó khăn & Bài học

- **Khó khăn:**
  - Thiết kế partition key / index cho DynamoDB để tránh hot partition và hiệu năng truy vấn kém.
- **Giải pháp:**
  - Làm theo lab awsstudygroup, xác định access pattern trước rồi mới chọn partition/sort key.
- **Bài học:**
  - NoSQL và cache phát huy sức mạnh khi mô hình dữ liệu bám sát cách ứng dụng truy vấn thực tế.

### Kế hoạch Tuần tới

- Tiếp tục tìm hiểu các dịch vụ serverless (Lambda, API Gateway).
- Bắt đầu tích hợp DynamoDB với backend Lambda đơn giản.
- Kết hợp monitoring (CloudWatch) vào demo serverless.
