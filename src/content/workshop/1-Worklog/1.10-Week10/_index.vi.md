---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục Tiêu Tuần 10

- Containerize frontend và backend bằng Docker.
- Triển khai container lên Amazon ECS/Fargate.
- Cấu hình network và xác minh hệ thống sau khi deploy.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tạo cấu hình Docker cho service frontend. | 22/06/2026 | 22/06/2026 | [Docker Docs](https://docs.docker.com/) |
| T3 | Containerize FastAPI backend và kiểm tra chạy Docker. | 23/06/2026 | 23/06/2026 | [Docker Docs](https://docs.docker.com/) |
| T4 | Triển khai container frontend và backend lên Amazon ECS/Fargate. | 24/06/2026 | 24/06/2026 | [Amazon ECS](https://docs.aws.amazon.com/ecs/) |
| T5 | Tiếp tục triển khai ECS, cấu hình network và service. | 25/06/2026 | 25/06/2026 | [Amazon ECS](https://docs.aws.amazon.com/ecs/) |
| T6 | Xác minh hệ thống đã deploy, test luồng end-to-end và sửa các lỗi triển khai. | 26/06/2026 | 26/06/2026 | [Amazon ECS](https://docs.aws.amazon.com/ecs/) |

### Kết quả đạt được Tuần 10

- Build thành công Docker image cho cả frontend và backend.
- Triển khai ứng dụng lên Amazon ECS/Fargate.
- Kiểm chứng toàn bộ luồng end-to-end trên môi trường cloud.

### Khó khăn & Bài học

- **Khó khăn:**
  - Cấu hình network, security group và IAM role cho service ECS/Fargate.
- **Giải pháp:**
  - Bám theo reference architecture của AWS và cấp quyền tối thiểu cho từng service.
- **Bài học:**
  - Orchestrate container rất mạnh nhưng đòi hỏi cấu hình network và security cẩn thận.

### Kế hoạch Tuần tới

- Triển khai Amazon SQS để xử lý ảnh bất đồng bộ.
- Tích hợp Redis cho cache và SSE cho tiến độ real-time.
- Test và tối ưu luồng xử lý bất đồng bộ.
