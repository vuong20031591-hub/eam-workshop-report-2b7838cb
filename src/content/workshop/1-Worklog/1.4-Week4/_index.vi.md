---
title: "Nhật ký công việc Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## TUẦN 4 - NHẬT KÝ

### Mục tiêu Tuần 4

Hoàn thiện `/upscale/standard` chạy LANCZOS bằng Pillow — mục tiêu là để mode này không phụ thuộc vào GPU, đỡ chi phí. Thêm CloudWatch Logs cho FastAPI qua CloudWatch Agent trên EC2. Viết property test bằng Hypothesis cho validator, kèm PSNR sanity check để so sánh chất lượng hai mode.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Implement `/upscale/standard` dùng `Pillow.Image.resize(LANCZOS)` cho scale 2/3/4. | 14/05/2026 | 14/05/2026 | [Pillow](https://pillow.readthedocs.io/) |
| 2 | Cài **CloudWatch Agent** trên EC2, ship log `/var/log/upscale/*.log` vào log group `/upscale/be/dev`. | 15/05/2026 | 15/05/2026 | [CloudWatch Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html) |
| 3 | Cấu hình structured logging (JSON) với `structlog`, mỗi request có `request_id`. | 16/05/2026 | 17/05/2026 | - |
| 4 | Viết 14 property tests với Hypothesis: kích thước, kênh màu, EXIF orientation. | 18/05/2026 | 19/05/2026 | [Hypothesis](https://hypothesis.readthedocs.io/) |
| 5 | PSNR test: LANCZOS x4 vs Real-ESRGAN x4 trên bộ 20 ảnh mẫu — Real-ESRGAN cao hơn ~2.4 dB. | 20/05/2026 | 20/05/2026 | - |
| 6 | Thêm metric `x_ray_trace_id` header để chuẩn bị AWS X-Ray tuần sau. | 21/05/2026 | 21/05/2026 | - |
| 7 | Cập nhật Linear UPS-7, UPS-8. | 22/05/2026 | 22/05/2026 | - |

### Kết quả đạt được Tuần 4

Cả hai mode AI và Standard đều chạy stable trên EC2. CloudWatch Logs Insights query được theo `request_id`, không phải SSH vào máy grep nữa. 14 property test đều pass; PSNR delta ~2.4 dB xác nhận AI mode thật sự đáng để duy trì thêm chi phí GPU.

### Thách thức & Bài học

Log FastAPI mặc định trả plain-text, filter trên CloudWatch cực kỳ khó chịu vì regex trên text tự do dễ sai. Chuyển sang structured JSON với `structlog`, kèm pattern `%message` trong config CloudWatch Agent là hết đau. Thời gian debug rút ngắn thấy rõ so với cách cũ, và điều đó khiến mình đặt structured logging là mặc định cho mọi dự án về sau.

### Kế hoạch tuần sau

FE bootstrap TanStack Start (React 19 + Vite 8), làm upload UI. SSE progress endpoint. Bật AWS X-Ray tracing cho FastAPI.
