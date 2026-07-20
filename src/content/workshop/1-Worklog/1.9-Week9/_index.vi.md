---
title: "Nhật ký công việc Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## TUẦN 9 - NHẬT KÝ

### Mục tiêu Tuần 9

Chạy load test 20 concurrent uploads qua API Gateway để tìm bottleneck GPU. Bật tile-based inference (`TILE_SIZE=512`) cho input trên 2K. Dựng CloudWatch dashboard gộp metric của API Gateway với custom Prometheus, gắn alarm bắn SNS email khi p90 vượt ngưỡng.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Chạy `hey -n 100 -c 5 -m POST` với ảnh 1080p qua endpoint API Gateway. | 28/06/2026 | 28/06/2026 | [hey](https://github.com/rakyll/hey) |
| 2 | Đo p50=6.2s, p90=9.8s, GPU util ~95% (từ CloudWatch custom metric). | 29/06/2026 | 29/06/2026 | - |
| 3 | Bật `TILE_SIZE=512` cho input >2K, đo lại p90 giảm còn 8.1s, hết OOM. | 30/06/2026 | 01/07/2026 | - |
| 4 | Serialize AI request qua `asyncio.Lock`, Standard mode chạy song song. | 02/07/2026 | 03/07/2026 | - |
| 5 | Publish custom metric `Upscaler/GPU/Utilization` bằng CloudWatch Agent + `nvidia-smi`. | 04/07/2026 | 04/07/2026 | - |
| 6 | Tạo **CloudWatch Dashboard** `upscaler-dev`: API Gateway 4XX/5XX/latency + GPU util + p90. | 05/07/2026 | 05/07/2026 | [CloudWatch Dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html) |
| 7 | Set **CloudWatch Alarm**: p90 > 12s trong 5 phút → SNS email. | 06/07/2026 | 06/07/2026 | [CloudWatch Alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html) |

### Kết quả đạt được Tuần 9

p90 giảm từ 9.8s xuống 8.1s sau khi bật tile. Ảnh 3840×2160 không còn OOM. Dashboard và alarm sẵn sàng để bật production.

### Thách thức & Bài học

Khi concurrency lên cao, một GPU đơn lẻ bị thrash: nhiều request cùng nạp mô hình vào VRAM là thắt cổ chai. Mình serialize AI qua lock để tránh dẫm chân nhau, còn scale-out thì để dành cho tuần 11 (ASG + SQS). Cái quan sát rút gọn là: 1 GPU = 1 worker AI hiệu dụng, muốn nhiều hơn phải scale ngang chứ không tối ưu dọc được nữa.

### Kế hoạch tuần sau

Sinh docs API (OpenAPI + Redoc). Đưa AWS Secrets Manager vào giữ token analytics thay .env. Gắn AWS WAF trước CloudFront và API Gateway.
