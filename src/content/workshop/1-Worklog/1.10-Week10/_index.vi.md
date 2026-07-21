---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục Tiêu Tuần 10

- Đóng gói FE, BE và worker vào Docker image sạch, không phụ thuộc máy dev.
- Đưa staging lên ECS Fargate và cho ảnh chạy qua S3 thay vì filesystem.
- Có domain staging để team dùng chung, không ai phải chạy local để review.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Viết Dockerfile multi-stage cho FE (Vite build) và BE (FastAPI + uvicorn). | 22/06/2026 | 22/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| T3 | Tách worker inference thành image riêng, cắm entrypoint gọn. | 23/06/2026 | 23/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| T4 | Push image lên ECR, dựng task definition và service trên ECS Fargate. | 24/06/2026 | 24/06/2026 | [Amazon ECR](https://000017.awsstudygroup.com/) |
| T5 | Đổi backend từ lưu tạm sang S3, ký presigned URL cho FE upload trực tiếp. | 25/06/2026 | 25/06/2026 | [Amazon S3](https://000010.awsstudygroup.com/) |
| T6 | Đặt ALB trước service, cắm domain staging, bật HTTPS bằng ACM. | 26/06/2026 | 26/06/2026 | [Application Load Balancer](https://000017.awsstudygroup.com/) |

### Kết quả đạt được Tuần 10

- Ba image build được trên CI, chạy giống hệt trên máy dev và trên Fargate.
- Ảnh không còn nằm trên container, S3 giữ vai trò storage duy nhất.
- Staging có URL HTTPS ổn định, team review không cần dựng local.

### Khó khăn & Bài học

- **Khó khăn:**
  - Presigned URL đầu tiên bị 403 vì CORS trên bucket không cho phép method PUT từ origin của FE.
- **Giải pháp:**
  - Đọc kỹ AccessControl và CORS của S3, cấu hình đúng AllowedMethods và AllowedOrigins.
- **Bài học:**
  - S3 có nhiều lớp chính sách chồng lên nhau, bug 403 thường không ở nơi mình đoán đầu tiên.

### Kế hoạch Tuần tới

- SQS cho hàng đợi job giữa BE và worker.
- Redis cho trạng thái job và progress tạm.
- SSE để đẩy tiến độ về FE thay vì polling.
