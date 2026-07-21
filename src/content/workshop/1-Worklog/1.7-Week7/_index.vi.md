---
title: "Worklog Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục Tiêu Tuần 7

- Phân tích yêu cầu dự án và thiết kế kiến trúc tổng thể.
- Khởi tạo dự án frontend TanStack và backend FastAPI.
- Kết nối frontend–backend và xác minh tích hợp ban đầu.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Phân tích yêu cầu dự án, xác định tính năng và xem xét kiến trúc hệ thống tổng thể. | 01/06/2026 | 01/06/2026 | [TanStack Router](https://tanstack.com/router); [FastAPI](https://fastapi.tiangolo.com/) |
| T3 | Thiết kế kiến trúc hệ thống, định nghĩa cách giao tiếp giữa TanStack frontend, FastAPI backend, AI service và AWS. | 02/06/2026 | 02/06/2026 | [TanStack Router](https://tanstack.com/router); [FastAPI](https://fastapi.tiangolo.com/) |
| T4 | Khởi tạo dự án TanStack frontend, cấu hình routing, layout và cấu trúc dự án. | 03/06/2026 | 03/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T5 | Khởi tạo dự án FastAPI backend, cài đặt dependency và tạo cấu trúc REST API cơ bản. | 04/06/2026 | 04/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Kết nối frontend và backend, kiểm tra giao tiếp API và xử lý các vấn đề tích hợp ban đầu. | 05/06/2026 | 05/06/2026 | [TanStack Router](https://tanstack.com/router); [FastAPI](https://fastapi.tiangolo.com/) |

### Kết quả đạt được Tuần 7

- Xác định được kiến trúc tổng thể của hệ thống nâng cấp ảnh.
- Khởi tạo thành công cả TanStack frontend và FastAPI backend.
- Kiểm tra được giao tiếp API cơ bản giữa frontend và backend.

### Khó khăn & Bài học

- **Khó khăn:**
  - Thống nhất định dạng dữ liệu giữa TanStack frontend và FastAPI backend ngay từ đầu.
- **Giải pháp:**
  - Định nghĩa sớm schema request/response chung và thử nghiệm với một endpoint tối giản end-to-end.
- **Bài học:**
  - Đầu tư kỹ vào kiến trúc và interface từ đầu giúp giảm rework về sau.

### Kế hoạch Tuần tới

- Xây dựng giao diện upload ảnh và tích hợp với API backend.
- Triển khai validation file và luồng upload.
- Kiểm thử tích hợp ban đầu cho luồng upload.
