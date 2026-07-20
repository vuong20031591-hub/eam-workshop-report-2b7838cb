---
title: "Nhật ký công việc Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## TUẦN 11 - NHẬT KÝ

### Mục tiêu Tuần 11

Chuyển từ single EC2 chạy Docker thủ công sang **ECS cluster trên EC2** với ASG làm capacity provider. Đăng ký task definition cho FastAPI, mount **EFS** cho model weights + dữ liệu Postgres, dựng **ElastiCache Redis** cho job state. ALB từ Tuần 8 giờ forward về target group của ECS service, health check `/health`. Dựng thêm SQS queue cho AI job để chuẩn bị scale bất đồng bộ, dù MVP vẫn để feature flag OFF.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Tạo **Launch Template** `upscale-gpu-lt` (g4dn.xlarge, ECS-optimized GPU AMI, IAM role có `AmazonEC2ContainerServiceforEC2Role`). | 16/07/2026 | 16/07/2026 | [ECS-optimized AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) |
| 2 | Tạo **ASG** `upscale-gpu-asg` min=1 max=3, target-tracking `Upscale/GPU/Utilization = 70%`, đăng ký làm **ECS capacity provider** cho cluster `upscale-cluster`. | 17/07/2026 | 17/07/2026 | [ECS Capacity Providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html) |
| 3 | Provision **EFS** `upscale-efs` với access point cho `/weights` và `/pgdata`; tạo **ElastiCache Redis** `upscale-redis` trong private subnet. | 18/07/2026 | 19/07/2026 | [EFS + ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html) |
| 4 | Đăng ký task definition `upscale-api` (FastAPI, EFS mount weights, Redis endpoint qua Secrets Manager) và `upscale-postgres` (dữ liệu trên EFS); tạo service dùng capacity provider. | 20/07/2026 | 20/07/2026 | [ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html) |
| 5 | Trỏ **target group** `upscale-api-tg` của ALB về ECS service (dynamic host-port mapping); tạo **SQS** standard queue `upscale-job-queue`, visibility timeout 300s; BE consume qua polling loop (feature flag OFF cho MVP). | 21/07/2026 | 22/07/2026 | [SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/) |
| 6 | Chạy Playwright E2E: upload → progress → download, pass trên staging. | 23/07/2026 | 23/07/2026 | [Playwright](https://playwright.dev/) |
| 7 | Blue/green rollout qua ECS deployment (rolling `minimumHealthyPercent=100`), drain task set cũ — 0 downtime. | 24/07/2026 | 24/07/2026 | - |

### Kết quả đạt được Tuần 11

Kiến trúc production hoàn chỉnh: CloudFront → S3 (FE) và ALB → ECS on EC2 GPU (BE) với EFS cho weights/DB và Redis cho job state. Khi GPU util trên 70% liên tục 3 phút, ECS capacity provider bung ASG lên 2 instance và schedule task thứ hai như thiết kế. 8 kịch bản E2E Playwright pass sạch.

### Thách thức & Bài học

Cold-start GPU instance ban đầu mất tầm 4 phút vì ECS-optimized AMI vẫn phải boot rồi ECR-pull image, capacity provider phản ứng chậm hơn traffic. Mình bake custom AMI có sẵn image kèm weights, kéo cold-start còn khoảng 90 giây. Chuyển weights lên EFS cũng giúp task mới bỏ hẳn bước tải từ S3. Với workload GPU, pre-baked AMI hoặc ECS warm pool gần như là bắt buộc — không có nó thì auto-scaling chỉ là danh nghĩa.

### Kế hoạch tuần sau

Publish endpoint production. Review chi phí bằng Cost Explorer. Chuẩn bị demo và báo cáo cuối kỳ.
