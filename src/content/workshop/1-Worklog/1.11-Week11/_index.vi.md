---
title: "Nhật ký công việc Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## TUẦN 11 - NHẬT KÝ

### Mục tiêu Tuần 11

Chuyển từ single EC2 sang Auto Scaling Group với launch template và user-data pull image từ ECR. Đặt ALB giữa API Gateway và ASG, health check `/health`. Dựng thêm SQS queue cho AI job để chuẩn bị scale bất đồng bộ, dù MVP vẫn để feature flag OFF.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Tạo **Launch Template** `upscaler-be-lt` (g5.xlarge, IAM role, user-data pull ECR + `docker run`). | 16/07/2026 | 16/07/2026 | - |
| 2 | Tạo **Auto Scaling Group** min=1 max=3, scaling policy target `Upscaler/GPU/Utilization = 70%`. | 17/07/2026 | 17/07/2026 | [EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/) |
| 3 | Provision **Application Load Balancer** internal, target group ASG, health check `/health` mỗi 15s. | 18/07/2026 | 19/07/2026 | [ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/) |
| 4 | Đổi API Gateway integration từ EC2 public DNS → **ALB DNS** (VPC Link). | 20/07/2026 | 20/07/2026 | [API Gateway VPC Link](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-private.html) |
| 5 | Tạo **SQS** standard queue `upscaler-ai-jobs`, visibility timeout 300s; BE consume qua polling loop (feature flag OFF cho MVP). | 21/07/2026 | 22/07/2026 | [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/) |
| 6 | Chạy Playwright E2E: upload → progress → download, pass trên staging. | 23/07/2026 | 23/07/2026 | [Playwright](https://playwright.dev/) |
| 7 | Blue/green rollout: attach new ASG vào ALB, drain old — 0 downtime. | 24/07/2026 | 24/07/2026 | - |

### Kết quả đạt được Tuần 11

Kiến trúc production hoàn chỉnh: CloudFront → S3 (FE) và API Gateway → VPC Link → ALB → ASG (BE GPU). Khi GPU util trên 70% liên tục 3 phút, ASG bung lên 2 instance như thiết kế. 8 kịch bản E2E Playwright pass sạch.

### Thách thức & Bài học

Cold-start GPU instance ban đầu mất tầm 4 phút vì phải kéo AMI cơ bản rồi mới pull docker image, nghĩa là ASG phản ứng chậm hơn traffic. Mình bake custom AMI có sẵn Docker image kèm weights, kéo cold-start còn khoảng 90 giây. Với workload GPU, pre-baked AMI hoặc warm pool gần như là bắt buộc — không có nó thì auto-scaling chỉ là danh nghĩa.

### Kế hoạch tuần sau

Publish endpoint production. Review chi phí bằng Cost Explorer. Chuẩn bị demo và báo cáo cuối kỳ.
