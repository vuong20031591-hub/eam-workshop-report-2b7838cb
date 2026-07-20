---
title: "Nhật ký công việc Tuần 12"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## TUẦN 12 - NHẬT KÝ

### Mục tiêu Tuần 12

Deploy production ở `upscaler.vuongtech.dev` và `api.upscaler.vuongtech.dev` qua Route 53. Review chi phí AWS bằng Cost Explorer và tính toán Savings Plan (Compute 1-year no-upfront). Hoàn thiện báo cáo cuối kỳ + demo.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Route 53 hosted zone `vuongtech.dev`, tạo A-alias `upscaler` → CloudFront, `api.upscaler` → ALB (alias). | 24/07/2026 | 24/07/2026 | [Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/) |
| 2 | Bật **CloudFront logging** vào S3 + **ALB access logs** vào S3. | 25/07/2026 | 25/07/2026 | - |
| 3 | Tag toàn bộ resource `Project=Upscale, Env=prod` để filter Cost Explorer. | 26/07/2026 | 26/07/2026 | [AWS Tagging](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) |
| 4 | Chạy **Cost Explorer** 30 ngày: EC2 g5 chiếm 78%, S3 6%, CloudFront 4%, còn lại phụ trợ. | 27/07/2026 | 27/07/2026 | [Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html) |
| 5 | Tính toán **Compute Savings Plan** 1-year no-upfront: tiết kiệm ~27% cho g5. | 28/07/2026 | 28/07/2026 | [Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/) |
| 6 | Chốt SLA MVP: p90 < 10s, availability 99% (single AZ), RPO 24h (S3 versioning + cross-region replication future). | 29/07/2026 | 29/07/2026 | - |
| 7 | Viết báo cáo cuối kỳ + slide demo (kiến trúc + số liệu load test). | 30/07/2026 | 30/07/2026 | - |

### Kết quả đạt được Tuần 12

Production live tại `upscaler.vuongtech.dev`, toàn bộ traffic đi qua HTTPS + WAF. Cost baseline khoảng $142/tháng, phần lớn là 1 GPU instance chạy giờ dev cộng với prod on-demand. Báo cáo và demo hoàn tất đúng hạn.

### Thách thức & Bài học

Cái đắt nhất trong bill vẫn là GPU on-demand, và với một solo project 12 tuần thì rất khó justify reservation 1-3 năm. Mình đề xuất chạy worker AI trên EC2 Spot (chấp nhận interrupt) cho phần load tăng đột biến, giữ 1 instance on-demand làm baseline. Nếu tiếp tục kéo dài dự án, đây là hướng cắt chi phí đầu tiên nên thử. Bên cạnh đó, việc tag resource ngay từ đầu (Project, Env) khiến Cost Explorer trở nên thực sự có ích thay vì một biểu đồ nhiễu.
