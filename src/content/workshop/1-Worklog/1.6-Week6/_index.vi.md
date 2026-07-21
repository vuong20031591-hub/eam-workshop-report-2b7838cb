---
title: "Worklog Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục Tiêu Tuần 6

- Tập nghĩ ngược từ query về schema với DynamoDB thay vì bê tư duy SQL sang.
- Chạy ElastiCache Redis thật và đo chênh lệch trước–sau khi cache một tính toán chậm.
- Đọc trước intro dự án AI Face Enhancement để tuần sau vào đỡ ngợp.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tạo bảng DynamoDB với partition key và sort key phù hợp với 3 access pattern giả lập. | 25/05/2026 | 25/05/2026 | [Amazon DynamoDB](https://000015.awsstudygroup.com/) |
| T3 | Thử GSI cho một truy vấn phụ, đo consumed capacity để hiểu chi phí. | 26/05/2026 | 26/05/2026 | [DynamoDB GSI](https://000015.awsstudygroup.com/) |
| T4 | Bật ElastiCache Redis trong VPC, kết nối từ EC2 cùng subnet. | 27/05/2026 | 27/05/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| T5 | Viết script cache một hàm tính chậm; đo thời gian miss vs hit. | 28/05/2026 | 28/05/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| T6 | Đọc intro FCAJ về dự án nâng cấp ảnh; ghi câu hỏi cho mentor. | 29/05/2026 | 29/05/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |

### Kết quả đạt được Tuần 6

- Có một bảng DynamoDB dùng được cho vài truy vấn thực, hiểu vì sao thiết kế lại sau khi làm lần đầu.
- Redis giảm thời gian đọc từ hàng trăm ms xuống gần như tức thời với dữ liệu nóng.
- Có sẵn danh sách câu hỏi cụ thể để hỏi mentor ngày đầu tuần sau.

### Khó khăn & Bài học

- **Khó khăn:**
  - Bảng DynamoDB đầu tiên tôi thiết kế theo cách nghĩ SQL, nửa số truy vấn quan trọng phải scan.
- **Giải pháp:**
  - Viết lại danh sách access pattern trước, rồi mới chọn PK/SK để phục vụ đủ chúng.
- **Bài học:**
  - Ở DynamoDB, câu hỏi 'sẽ hỏi cái gì?' đến trước 'sẽ lưu cái gì?', ngược với SQL.

### Kế hoạch Tuần tới

- Kickoff dự án Upscale AI với team.
- Chốt kiến trúc phác thảo và chia module cho từng người.
- Dựng CI xanh sớm để bảo vệ cho các tuần sau.
