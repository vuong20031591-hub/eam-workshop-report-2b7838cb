---
title: "Worklog Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục Tiêu Tuần 8

- Ship luồng upload thật: user thả ảnh, thấy preview, thấy progress, nhận về job id.
- Có endpoint /upload FastAPI validate file và trả về job id ổn định.
- Viết ghi chú 'upload chạy thế nào' đủ ngắn để một người mới đọc là hiểu.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Dựng dropzone + file picker, thumbnail preview và progress bar khi upload. | 08/06/2026 | 08/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T3 | Validate size và MIME phía client rồi disable nút submit khi không đạt. | 09/06/2026 | 09/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T4 | Endpoint FastAPI /upload nhận multipart, kiểm size/MIME lần nữa, lưu tạm. | 10/06/2026 | 10/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T5 | Thống nhất tên field multipart giữa FE và BE, viết vào doc. | 11/06/2026 | 11/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Test end-to-end với ảnh lớn, hủy giữa chừng, retry, và ảnh sai loại. | 12/06/2026 | 12/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Kết quả đạt được Tuần 8

- Chọn ảnh → preview → upload → thấy progress → nhận job id, toàn bộ chạy được.
- Server-side validation bắt được cả các case FE bị bỏ qua khi chỉnh DOM.
- Doc upload trong repo giúp một thành viên mới trace request đầu-đến-cuối trong 10 phút.

### Khó khăn & Bài học

- **Khó khăn:**
  - Một bạn muốn bỏ validate server-side vì 'client đã làm rồi', dễ trôi lỗi ra prod.
- **Giải pháp:**
  - Trả PR lại kèm ví dụ curl bypass validation và giữ nguyên yêu cầu validate ở server.
- **Bài học:**
  - Trust client là cách nhanh nhất để tìm ra bug sau khi user gặp trước.

### Kế hoạch Tuần tới

- Ghép Real-ESRGAN và CodeFormer vào một hàm enhance() duy nhất.
- Chuẩn bị bộ eval nhỏ để bắt regression sớm.
- Chốt quyết định CPU-dev, GPU-AWS và ghi vào project notes.
