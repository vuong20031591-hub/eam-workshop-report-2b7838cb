---
title: "Nhật ký công việc Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## TUẦN 7 - NHẬT KÝ

### Mục tiêu Tuần 7

Đóng gói BE thành Docker image multi-stage với base `nvidia/cuda:12.4-runtime`, push lên Amazon ECR private repo `upscale-be`. Đồng thời chuyển pattern upload sang presigned POST để FE đẩy file trực tiếp lên S3 thay vì proxy qua BE.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Viết `Dockerfile` multi-stage: builder cài deps → runtime `nvidia/cuda:12.4-runtime-ubuntu22.04`, image ~2.1GB. | 10/06/2026 | 10/06/2026 | [Docker multi-stage](https://docs.docker.com/build/building/multi-stage/) |
| 2 | Tạo **ECR** repo `upscale-be`, bật scan-on-push + image immutable tag. | 11/06/2026 | 11/06/2026 | [Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/) |
| 3 | GitHub Actions: `aws ecr get-login-password | 12/06/2026 | 13/06/2026 | 12/06/2026 | - |
| 4 | Endpoint `/upload/presign` trả `{url, fields}` cho **S3 Presigned POST**, giới hạn size 10MB + content-type. | 14/06/2026 | 14/06/2026 | [Presigned POST](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html) |
| 5 | FE `UploadZone` dùng presigned POST → S3 trực tiếp, sau đó chỉ gửi `s3_key` tới BE. | 15/06/2026 | 16/06/2026 | - |
| 6 | Đo bandwidth: giảm 40% traffic qua BE (không proxy 2MB nữa). | 17/06/2026 | 17/06/2026 | - |
| 7 | Chạy ECR scan: 0 CRITICAL, 2 HIGH (torch CVE), tạm accept + note. | 18/06/2026 | 18/06/2026 | - |

### Kết quả đạt được Tuần 7

Image BE giờ build reproducible qua CI, ECR quét lỗ hổng tự động trước khi mình pull. Presigned POST kéo lượng I/O phía BE xuống đáng kể vì file không còn đi vòng nữa.

### Thách thức & Bài học

Image `nvidia/cuda-runtime` sau khi cài xong PyTorch vẫn nặng khoảng 2.1GB, cold-start kéo lâu vì phải pull cả GB xuống. Tạm chấp nhận cho MVP và ghi note cho tuần 11 sẽ thử `slim` variant kèm trim bớt CUDA lib không dùng. Cái insight lớn hơn là presigned POST rất phù hợp với thinking serverless — compute và transfer nên tách nhau, đường nào chạy đường nấy.

### Kế hoạch tuần sau

Đưa ALB đứng trước EC2 (target group + listener HTTPS). Cấu hình IAM role cho ECS/EC2 pull ECR. Bổ sung property test cho endpoint presign.
