---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục Tiêu Tuần 11

- Đẩy job từ BE sang worker qua SQS, không chạy inference trong request nữa.
- Dùng Redis giữ trạng thái job và tiến độ để BE trả nhanh không đợi.
- Đẩy progress về FE bằng SSE để user thấy thanh chạy thật.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tạo SQS queue upscale-jobs, gắn dead-letter queue và visibility timeout hợp lý. | 29/06/2026 | 29/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| T3 | Sửa BE để enqueue job và trả job id ngay, không đợi worker. | 30/06/2026 | 30/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| T4 | Worker nhận message, chạy enhance(), upload output lên S3, cập nhật status vào Redis. | 01/07/2026 | 01/07/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| T5 | Endpoint SSE /jobs/{id}/events đọc Redis và stream progress ra FE. | 02/07/2026 | 02/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Xử lý retry, timeout và job dead: đưa vào DLQ, log rõ ràng, cho FE hiển thị lỗi thân thiện. | 03/07/2026 | 03/07/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |

### Kết quả đạt được Tuần 11

- Request upload trả trong dưới 200ms, không còn phụ thuộc thời gian inference.
- FE có progress mượt qua SSE, thay hẳn cho polling cũ.
- Job hỏng rơi vào DLQ, có thể replay tay, không mất dấu.

### Khó khăn & Bài học

- **Khó khăn:**
  - SSE qua ALB rớt kết nối định kỳ do idle timeout mặc định, user thấy progress khựng.
- **Giải pháp:**
  - Nâng idle timeout của ALB và gửi comment SSE heartbeat mỗi 15s để giữ kết nối.
- **Bài học:**
  - Long-lived connection qua load balancer cần cả hai đầu đồng thuận, không chỉ code app.

### Kế hoạch Tuần tới

- Final testing end-to-end với ảnh thật của người dùng thử.
- Chuẩn bị demo, script kịch bản và bản dự phòng.
- Cleanup tài nguyên tuần sau để không đốt tiền sau demo.
