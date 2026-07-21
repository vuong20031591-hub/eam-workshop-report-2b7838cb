---
title: "Worklog Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục Tiêu Tuần 7

- Với vai trò lead, mở buổi họp khởi tạo dự án Upscale AI để cả team đồng nhất mục tiêu và phạm vi MVP.
- Chốt lát cắt kiến trúc đầu tiên (TanStack Start, FastAPI, worker riêng, S3 cho giai đoạn AWS) và ghi thành ADR ngắn trong repo.
- Phân công đầu việc scaffold FE/BE cho từng thành viên, đặt tiêu chí "done" để tuần sau không tranh cãi lại.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Chủ trì buổi họp khởi tạo, chốt pitch một câu và phạm vi MVP cùng team. | 01/06/2026 | 01/06/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| T3 | Vẽ kiến trúc end-to-end lên whiteboard, chia module theo owner và tạo ticket trên Linear. | 02/06/2026 | 02/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T4 | Review setup repo FE (TanStack + Vite) do bạn phụ trách FE dựng, góp ý route và layout tối thiểu. | 03/06/2026 | 03/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T5 | Cùng bạn BE thống nhất cấu trúc thư mục router/service của FastAPI, chốt endpoint /healthz làm chuẩn kiểm tra. | 04/06/2026 | 04/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Duyệt PR CI skeleton hai repo, ngồi cùng team debug CORS cho tới khi FE gọi BE thành công. | 05/06/2026 | 05/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Kết quả đạt được Tuần 7

- Team thống nhất kiến trúc nháp, mỗi người biết mình sở hữu phần nào trên Linear mà không cần nhắc lại.
- FE load, BE trả 200, CORS thông, CI xanh ở cả hai repo ngay trong tuần mở dự án.
- ADR đầu tiên nằm trong repo, đủ ngắn để một thành viên mới đọc là hiểu vì sao chọn stack này.

### Khó khăn & Bài học

- **Khó khăn:**
  - Một vài bạn muốn over-engineer folder structure ngay từ tuần đầu, mình phải cân giữa lắng nghe và giữ nhịp.
- **Giải pháp:**
  - Mình chốt nguyên tắc "ship upload chạy được trước, refactor khi có bằng chứng", ghi vào README và đóng thảo luận.
- **Bài học:**
  - Vai trò lead ở tuần đầu là bảo vệ nhịp làm việc, đôi khi phải chốt một quyết định "đủ tốt" thay vì đi tìm cái hoàn hảo.

### Kế hoạch Tuần tới

- Điều phối team ship luồng upload thật từ FE sang BE.
- Chốt cùng team tên field multipart và schema response chung.
- Đặt yêu cầu validate ở cả FE và BE trước khi duyệt PR.
