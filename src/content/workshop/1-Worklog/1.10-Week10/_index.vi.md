---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục Tiêu Tuần 10

- Với vai trò lead, lên kế hoạch cutover container cho FE, BE và worker sao cho không phụ thuộc máy của bất kỳ ai.
- Chịu trách nhiệm quyết định chuyển sang ECS Fargate, review PR IaC và chuyển storage sang S3.
- Bàn giao domain staging dùng chung để review không còn phải chạy local.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Review Dockerfile multi-stage cho FE (Vite build) và BE (FastAPI + uvicorn), pair để trim size. | 22/06/2026 | 22/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| T3 | Duyệt phương án tách worker inference thành image riêng với entrypoint gọn. | 23/06/2026 | 23/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| T4 | Điều phối việc push image lên ECR và review PR task definition + service trên ECS Fargate. | 24/06/2026 | 24/06/2026 | [Amazon ECR](https://000017.awsstudygroup.com/) |
| T5 | Cùng BE thiết kế luồng presigned URL, review đầu-cuối PR chuyển sang S3. | 25/06/2026 | 25/06/2026 | [Amazon S3](https://000010.awsstudygroup.com/) |
| T6 | Chịu trách nhiệm setup ALB + ACM, cắm domain staging và kiểm HTTPS cùng team. | 26/06/2026 | 26/06/2026 | [Application Load Balancer](https://000017.awsstudygroup.com/) |

### Kết quả đạt được Tuần 10

- Ba image build được trên CI, chạy giống hệt trên máy dev và trên Fargate.
- Ảnh không còn nằm trên container, S3 là single source of truth cho storage.
- Staging có URL HTTPS ổn định mình chia sẻ cho reviewer, giảm hẳn friction khi review.

### Khó khăn & Bài học

- **Khó khăn:**
  - Presigned URL đầu tiên bị 403 vì CORS trên bucket không cho phép PUT từ origin FE, cả team đứng.
- **Giải pháp:**
  - Mình nhảy vào unblock, đọc kỹ AccessControl và CORS của S3 cùng bạn phụ trách, chỉnh AllowedMethods và AllowedOrigins.
- **Bài học:**
  - Làm lead, đôi khi nhảy vào unblock một bug policy nhanh hơn nhiều so với chờ handoff đủ context.

### Kế hoạch Tuần tới

- SQS cho hàng đợi job giữa BE và worker.
- Redis cho trạng thái job và progress tạm.
- SSE để đẩy tiến độ về FE thay vì polling.
