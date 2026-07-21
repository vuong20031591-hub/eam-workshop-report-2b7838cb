---
title: "Worklog Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục Tiêu Tuần 8

- Với vai trò lead, điều phối FE và BE để tuần này ship xong luồng upload thật: thả ảnh, thấy preview, thấy progress, nhận job id.
- Đặt tiêu chí duyệt cho endpoint /upload (validate đầy đủ + job id ổn định) và review PR theo đúng tiêu chí đó.
- Đảm bảo doc "upload chạy thế nào" được viết và merge để người mới trace được request đầu-đến-cuối.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Review PR dropzone (file picker, preview, progress bar) và pair với FE để xử lý edge case UX. | 08/06/2026 | 08/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T3 | Ngồi với FE chốt rule validate size/MIME và hành vi disable nút submit, duyệt PR. | 09/06/2026 | 09/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T4 | Review PR /upload phía FastAPI: parse multipart, re-validate server-side, cấu trúc lưu tạm. | 10/06/2026 | 10/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T5 | Chủ trì buổi chốt contract FE/BE, thống nhất tên field multipart và tự tay cập nhật doc dùng chung. | 11/06/2026 | 11/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Điều phối test end-to-end với team: ảnh lớn, hủy giữa chừng, retry, ảnh sai định dạng. | 12/06/2026 | 12/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Kết quả đạt được Tuần 8

- Luồng chọn ảnh → preview → upload → progress → job id ship đúng tuần, không trượt scope.
- Server-side validation, cái mà mình cố giữ trong tiêu chí review, bắt được cả case FE bị bypass bằng chỉnh DOM.
- Doc upload được merge trong tuần, thành viên mới trace được request đầu-đến-cuối trong khoảng 10 phút.

### Khó khăn & Bài học

- **Khó khăn:**
  - Một bạn muốn bỏ validate server-side vì "client đã làm rồi", nếu duyệt là mở đường cho bug ra prod.
- **Giải pháp:**
  - Mình trả PR lại kèm ví dụ curl bypass validation và giữ nguyên yêu cầu validate ở server.
- **Bài học:**
  - Làm lead có lúc phải giữ nguyên tắc dù việc đó khiến PR chậm thêm một ngày.

### Kế hoạch Tuần tới

- Ghép Real-ESRGAN và CodeFormer vào một hàm enhance() duy nhất.
- Chuẩn bị bộ eval nhỏ để bắt regression sớm.
- Chốt quyết định CPU-dev, GPU-AWS và ghi vào project notes.
