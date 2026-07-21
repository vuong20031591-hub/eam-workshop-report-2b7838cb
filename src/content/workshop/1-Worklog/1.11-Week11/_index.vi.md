---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục Tiêu Tuần 11

- Triển khai Amazon SQS để xử lý ảnh bất đồng bộ.
- Tích hợp Redis cache và Server-Sent Events (SSE) cho tiến độ real-time.
- Test và tối ưu luồng xử lý bất đồng bộ.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Triển khai Amazon SQS để xử lý yêu cầu nâng cấp ảnh bất đồng bộ. | 29/06/2026 | 29/06/2026 | [Amazon SQS](https://docs.aws.amazon.com/sqs/) |
| T3 | Hoàn thiện tích hợp SQS và kiểm tra luồng xử lý message. | 30/06/2026 | 30/06/2026 | [Amazon SQS](https://docs.aws.amazon.com/sqs/) |
| T4 | Tích hợp Redis để cache các kết quả xử lý được truy cập thường xuyên. | 01/07/2026 | 01/07/2026 | [Redis Docs](https://redis.io/docs/) |
| T5 | Triển khai Server-Sent Events (SSE) để cung cấp tiến độ xử lý real-time. | 02/07/2026 | 02/07/2026 | [MDN - Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| T6 | Test luồng bất đồng bộ và tối ưu hiệu năng tổng thể. | 03/07/2026 | 03/07/2026 | [Amazon SQS](https://docs.aws.amazon.com/sqs/); [Redis Docs](https://redis.io/docs/) |

### Kết quả đạt được Tuần 11

- Tích hợp Amazon SQS để xử lý yêu cầu bất đồng bộ.
- Bổ sung cache Redis giúp giảm xử lý trùng lặp và cải thiện thời gian phản hồi.
- Triển khai SSE để người dùng theo dõi tiến độ xử lý theo thời gian thực.

### Khó khăn & Bài học

- **Khó khăn:**
  - Điều phối giữa SQS, worker, Redis và luồng SSE mà vẫn đảm bảo trạng thái nhất quán.
- **Giải pháp:**
  - Định nghĩa rõ các trạng thái job, dùng Redis làm nơi lưu state chung và stream tiến độ qua SSE.
- **Bài học:**
  - Kiến trúc bất đồng bộ scale tốt hơn nhưng cần xử lý state và lỗi cẩn thận.

### Kế hoạch Tuần tới

- Kiểm thử chức năng và sửa các bug còn lại.
- Tối ưu hiệu năng backend và trải nghiệm frontend.
- Hoàn thiện tài liệu và chuẩn bị demo.
