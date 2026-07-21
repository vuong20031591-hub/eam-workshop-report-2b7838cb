---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục Tiêu Tuần 11

- Với vai trò lead, chủ trì việc tách BE và worker qua SQS để inference không còn chặn request.
- Quyết định dùng Redis cho trạng thái/progress và review thay đổi cho phép BE trả ngay.
- Đồng bộ FE và BE dùng SSE cho progress thay vì polling.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Thiết kế SQS queue upscale-jobs + DLQ và visibility timeout hợp lý, duyệt PR IaC. | 29/06/2026 | 29/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| T3 | Review PR BE enqueue job và trả job id ngay thay vì đợi worker. | 30/06/2026 | 30/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| T4 | Pair với bạn worker: nhận message, chạy enhance(), upload S3, cập nhật status vào Redis. | 01/07/2026 | 01/07/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| T5 | Spec endpoint SSE /jobs/{id}/events cùng FE/BE, review PR đọc Redis và stream progress. | 02/07/2026 | 02/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Chịu trách nhiệm playbook retry/timeout/DLQ và đảm bảo FE hiển thị lỗi thân thiện. | 03/07/2026 | 03/07/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |

### Kết quả đạt được Tuần 11

- Request upload trả trong dưới 200ms, không còn phụ thuộc thời gian inference.
- FE có progress mượt qua SSE, thay hẳn vòng polling team đang dùng.
- Job hỏng rơi vào DLQ, mình viết luôn hướng dẫn replay để không mất dấu công việc nào.

### Khó khăn & Bài học

- **Khó khăn:**
  - SSE qua ALB rớt kết nối định kỳ do idle timeout mặc định, user thấy progress khựng.
- **Giải pháp:**
  - Mình thống nhất với infra nâng idle timeout của ALB, đồng thời yêu cầu BE gửi comment SSE heartbeat mỗi 15s.
- **Bài học:**
  - Vai trò lead là nhận ra khi một bug đi qua ranh giới team và kéo cả hai bên vào cùng một luồng nhanh nhất có thể.

### Kế hoạch Tuần tới

- Final testing end-to-end với ảnh thật của người dùng thử.
- Chuẩn bị demo, script kịch bản và bản dự phòng.
- Cleanup tài nguyên tuần sau để không đốt tiền sau demo.
