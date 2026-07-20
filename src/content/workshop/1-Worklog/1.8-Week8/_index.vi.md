---
title: "Nhật ký công việc Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## TUẦN 8 - NHẬT KÝ

### Mục tiêu Tuần 8

Đưa API Gateway HTTP API đứng trước EC2 FastAPI, gắn custom domain kèm ACM, để BE không phải lo TLS và CORS nữa. Bật throttling + usage plan 10 req/phút/IP luôn ở tầng gateway. Song song đó mở rộng test suite lên 24 tests (property + integration).

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Tạo **API Gateway HTTP API** `upscaler-api`, integration `HTTP_PROXY` tới EC2 public DNS (dev). | 19/06/2026 | 19/06/2026 | [API Gateway HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) |
| 2 | Gắn custom domain `api.upscaler.vuongtech.dev` + ACM cert `ap-southeast-1`. | 20/06/2026 | 20/06/2026 | - |
| 3 | Bật **throttling** stage-level 10 rps burst 20, ghi log 4XX ra CloudWatch. | 21/06/2026 | 21/06/2026 | - |
| 4 | Cấu hình CORS trên API Gateway (không xử lý ở FastAPI nữa). | 22/06/2026 | 22/06/2026 | - |
| 5 | Thêm 10 integration test dùng `httpx.AsyncClient` mock S3 (`moto`). | 23/06/2026 | 24/06/2026 | [moto](https://github.com/getmoto/moto) |
| 6 | Viết test cho presigned POST endpoint (validate policy, expiry). | 25/06/2026 | 26/06/2026 | - |
| 7 | FE đổi `VITE_API_URL` sang `https://api.upscaler.vuongtech.dev`. | 27/06/2026 | 27/06/2026 | - |

### Kết quả đạt được Tuần 8

API Gateway đứng ra xử lý TLS, throttling và CORS, kéo FastAPI gọn lại còn logic thực sự. CI chạy 24/24 test trong khoảng 48 giây.

### Thách thức & Bài học

SSE qua HTTP API bị đóng đúng mốc 30 giây vì idle timeout mặc định — mà một request AI thường lâu hơn thế. Fix bằng cách gửi `:heartbeat` comment mỗi 15s cùng `keep-alive`, giữ connection dưới ngưỡng idle. Managed gateway rẻ và tiện, nhưng mình phải biết trước các giới hạn (idle timeout, payload 10MB) rồi mới yên tâm dựa vào nó.

### Kế hoạch tuần sau

Load test đi qua API Gateway thay vì bypass. Tile-based inference để giảm OOM với ảnh lớn. Dựng CloudWatch dashboard.
