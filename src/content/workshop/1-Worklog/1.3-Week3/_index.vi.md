---
title: "Nhật ký công việc Tuần 3"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## TUẦN 3 - NHẬT KÝ

### Mục tiêu Tuần 3

Đây là tuần đầu tiên đụng GPU thật: launch EC2 g5.xlarge, gắn IAM role thay vì access key, cài driver NVIDIA và PyTorch CUDA. Sau khi máy chạy được, viết `ModelManager` (Singleton, lazy-load từ S3, cache trên đĩa EBS) và endpoint `/upscale/ai` xử lý multipart upload, đẩy input tạm lên S3 `tmp/`.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Launch **EC2 g5.xlarge** (NVIDIA A10G 24GB, Ubuntu 22.04 Deep Learning AMI), gắn EBS gp3 100GB. | 05/05/2026 | 05/05/2026 | [EC2 G5](https://aws.amazon.com/ec2/instance-types/g5/) |
| 2 | Gắn **IAM Role** `EC2-Upscaler-Dev` cho instance (S3 read/write bucket `upscaler-io-dev`), tránh dùng access key. | 06/05/2026 | 06/05/2026 | [IAM Roles for EC2](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) |
| 3 | Cài `nvidia-smi`, PyTorch 2.4 + CUDA 12.4, verify FP16 inference. | 07/05/2026 | 08/05/2026 | - |
| 4 | Viết `ModelManager` Singleton: `load()` download từ S3 → `/opt/weights/`, hold model in-memory. | 09/05/2026 | 10/05/2026 | - |
| 5 | Viết validator: max 10MB, đuôi `jpg/png/webp`, dùng Pillow verify. | 11/05/2026 | 11/05/2026 | - |
| 6 | Endpoint `/upscale/ai` (POST multipart) → upload input `tmp/{uuid}.png` lên S3. | 12/05/2026 | 12/05/2026 | - |
| 7 | Test đầu-cuối: 1 ảnh 1080p → x4 → trả `output/{uuid}.png` public presigned URL 1h. | 13/05/2026 | 13/05/2026 | [S3 Presigned URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) |

### Kết quả đạt được Tuần 3

Máy GPU chạy stable qua đêm không rớt. Cold-start model khoảng 4.2s tính cả bước tải weights từ S3. Endpoint `/upscale/ai` chạy end-to-end được: một ảnh 1080p lên 4K mất tầm 5.8s. Presigned URL cũng hoạt động, nghĩa là FE không cần biết cấu trúc bucket.

### Thách thức & Bài học

Vấn đề đau ví nhất là chi phí: g5.xlarge khoảng $1.006/giờ, để 24/7 thì bill tháng đủ để phải giải trình. Mình dùng AWS Instance Scheduler stop máy lúc 22:00, bật lại 08:00, giảm được tầm 60%. Ngoài chuyện tiền, tuần này còn xác nhận thêm hai thứ: IAM Role cho EC2 luôn an toàn hơn hard-code access key, và presigned URL tách phần permission bucket ra khỏi FE nên phía client không cần biết gì về S3.

### Kế hoạch tuần sau

Viết endpoint `/upscale/standard` chạy LANCZOS bằng CPU, không cần GPU. Thêm SSE progress stream (`/upscale/ai/stream`). Bắt đầu bootstrap FE.
