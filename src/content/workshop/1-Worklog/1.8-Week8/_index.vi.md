---
title: "Nhật ký công việc Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## TUẦN 8 - NHẬT KÝ

### Mục tiêu Tuần 8

Đưa **Application Load Balancer** internet-facing đứng trước FastAPI trên EC2, gắn custom domain kèm ACM, để BE không phải lo TLS và CORS nữa. Gắn **AWS WAF** ở ALB với rate-based rule 10 req/phút/IP thay cho managed gateway. Cấu hình **Cognito** OIDC (Google IdP) để ALB listener xác thực trước khi forward về target group. Song song đó mở rộng test suite lên 24 tests (property + integration).

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Tạo **ALB** `upscale-alb` (internet-facing, 2 public subnet), target group `upscale-api-tg` trỏ tới EC2 dev host cổng 8000. | 19/06/2026 | 19/06/2026 | [ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/) |
| 2 | Request ACM cho `api.upscaler.vuongtech.dev` ở `ap-southeast-1`, gắn vào listener HTTPS; HTTP:80 redirect sang HTTPS:443. | 20/06/2026 | 20/06/2026 | [ACM](https://docs.aws.amazon.com/acm/latest/userguide/) |
| 3 | Tạo **Cognito** user pool + Google IdP; thêm listener rule `authenticate-cognito` cho `/upscale/*` để request chưa đăng nhập bị đẩy về hosted UI. | 21/06/2026 | 21/06/2026 | [ALB + Cognito](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html) |
| 4 | Cấu hình CORS response header trên FastAPI cho FE origin (ALB không rewrite CORS); dọn các đoạn CORS lẻ tẻ khác. | 22/06/2026 | 22/06/2026 | - |
| 5 | Thêm 10 integration test dùng `httpx.AsyncClient` mock S3 (`moto`). | 23/06/2026 | 24/06/2026 | [moto](https://github.com/getmoto/moto) |
| 6 | Viết test cho presigned POST endpoint (validate policy, expiry). | 25/06/2026 | 26/06/2026 | - |
| 7 | FE đổi `VITE_API_URL` sang `https://api.upscaler.vuongtech.dev`. | 27/06/2026 | 27/06/2026 | - |

### Kết quả đạt được Tuần 8

ALB đứng ra xử lý TLS và Cognito auth trước khi traffic vào FastAPI, kéo BE gọn lại còn logic thực sự. CI chạy 24/24 test trong khoảng 48 giây.

### Thách thức & Bài học

SSE qua ALB bị đóng đúng 60 giây vì target-group idle timeout mặc định — mà request AI thường lâu hơn. Fix: nâng ALB idle timeout lên 300s VÀ gửi `:heartbeat` comment mỗi 15s cùng `keep-alive` để proxy không cắt connection. ALB linh hoạt hơn managed gateway (không giới hạn 10MB, không ép 30s idle), đổi lại mình tự tune các knob này.

### Kế hoạch tuần sau

Load test đi qua ALB. Tile-based inference để giảm OOM với ảnh lớn. Dựng CloudWatch dashboard gộp ALB metric với GPU custom metric.
