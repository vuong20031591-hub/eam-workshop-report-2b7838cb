---
title: "Worklog Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục Tiêu Tuần 7

- Mở màn dự án Upscale AI với một buổi kickoff rõ mục tiêu và phạm vi.
- Chốt lát cắt kiến trúc đầu tiên: TanStack Start, FastAPI, worker riêng, S3 khi đến giai đoạn AWS.
- Scaffold FE + BE và cho hai bên nói chuyện được qua CORS.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Chạy buổi kickoff, thống nhất pitch một câu và scope MVP. | 01/06/2026 | 01/06/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| T3 | Vẽ kiến trúc nháp end-to-end lên whiteboard, chia module theo owner. | 02/06/2026 | 02/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T4 | Init repo frontend TanStack + Vite, cắm route và layout tối thiểu. | 03/06/2026 | 03/06/2026 | [TanStack Router](https://tanstack.com/router) |
| T5 | Init repo backend FastAPI, dựng /healthz và cấu trúc thư mục cho router/service. | 04/06/2026 | 04/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Cắm CI skeleton hai bên, cho FE gọi BE qua CORS và log tay để xác nhận. | 05/06/2026 | 05/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Kết quả đạt được Tuần 7

- Team đồng ý kiến trúc bù nhìn, ai làm phần gì đã rõ trên Linear.
- FE load, BE trả 200, CORS thông, CI xanh ở cả hai repo.
- Có sẵn ghi chú kiến trúc trong repo cho người vào sau đọc.

### Khó khăn & Bài học

- **Khó khăn:**
  - Hai bạn muốn over-engineer folder structure ngay từ tuần đầu, dễ trôi vào bàn luận vô hạn.
- **Giải pháp:**
  - Chốt nguyên tắc: ship upload chạy được trước, refactor khi có bằng chứng, và ghi thẳng nguyên tắc đó vào README.
- **Bài học:**
  - Ở tuần đầu của một dự án, một CI xanh có giá trị hơn một cấu trúc đẹp trên giấy.

### Kế hoạch Tuần tới

- Làm thật luồng upload ảnh từ FE sang BE.
- Chốt tên field multipart và schema response chung.
- Validate cả FE và BE để tránh tin client mù quáng.
