---
title: "Worklog Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục Tiêu Tuần 8

- Xây dựng giao diện upload ảnh và tích hợp API upload trên frontend.
- Phát triển API backend cho upload và quản lý lưu trữ ảnh.
- Kiểm thử tích hợp và xử lý các vấn đề trong luồng upload.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Xây dựng giao diện upload ảnh và cấu hình validation file trên frontend. | 08/06/2026 | 08/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T3 | Tích hợp API upload ảnh và hiển thị trạng thái xử lý. | 09/06/2026 | 09/06/2026 | [TanStack Router](https://tanstack.com/router); [FastAPI](https://fastapi.tiangolo.com/) |
| T4 | Phát triển API backend cho upload và quản lý lưu trữ ảnh. | 10/06/2026 | 10/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T5 | Xử lý quản lý ảnh, error handling và request validation. | 11/06/2026 | 11/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Kiểm thử tích hợp và sửa các lỗi trong luồng upload. | 12/06/2026 | 12/06/2026 | [TanStack Router](https://tanstack.com/router); [FastAPI](https://fastapi.tiangolo.com/) |

### Kết quả đạt được Tuần 8

- Hoàn thiện giao diện upload ảnh có validation phía client.
- API upload và quản lý lưu trữ chạy thông suốt với frontend.
- Xử lý được các lỗi chính trong luồng upload qua kiểm thử tích hợp.

### Khó khăn & Bài học

- **Khó khăn:**
  - Xử lý upload ảnh lớn và validate loại/kích thước file đồng nhất ở cả hai phía.
- **Giải pháp:**
  - Validate chặt ở frontend và validate lại ở backend, kèm thông báo lỗi rõ ràng.
- **Bài học:**
  - Trùng lặp validation ở cả frontend và backend giúp tăng bảo mật và trải nghiệm.

### Kế hoạch Tuần tới

- Tích hợp mô hình AI Real-ESRGAN và CodeFormer vào backend.
- Tối ưu pipeline inference và kiểm tra chất lượng đầu ra.
- Kiểm thử kết quả nâng cấp ảnh trên nhiều loại ảnh.
