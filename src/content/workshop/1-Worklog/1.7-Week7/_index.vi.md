---
title: "Nhật ký công việc Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## TUẦN 7 - NHẬT KÝ

### Mục tiêu Tuần 7

Chuyển pipeline sang container + presigned direct-upload. Mình chốt strategy Docker multi-stage (giữ image slim), giao Thắng viết Dockerfile production (UPS-4), giao Khiêm set ECR + push CI (UPS-7 remove weights khỏi git). FE-side, Quân sửa upload flow dùng presigned URL.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Chốt Docker strategy: multi-stage, base `nvidia/cuda:12.4.0-runtime-ubuntu22.04`, image target ≤ 2GB; ADR-003. | 08/06/2026 | 08/06/2026 | [Docker Multi-stage](https://docs.docker.com/build/building/multi-stage/) |
| 2 | Review PR Thắng UPS-4: Dockerfile + docker-compose + healthcheck; feedback (thiếu non-root user), duyệt vòng 2. | 09/06/2026 | 10/06/2026 | - |
| 3 | Review PR Khiêm UPS-7: xoá weights khỏi git history + `.gitignore` + script pull từ S3 ở entrypoint. | 11/06/2026 | 11/06/2026 | [git filter-repo](https://github.com/newren/git-filter-repo) |
| 4 | Review Khiêm: tạo ECR repo `upscale-be` + IAM policy push/pull + GitHub Actions push on tag. | 12/06/2026 | 12/06/2026 | [Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/) |
| 5 | Design presigned direct-upload flow: FE xin URL từ `/upload/init`, PUT thẳng S3, gọi `/upscale/ai` với `object_key`. | 13/06/2026 | 13/06/2026 | - |
| 6 | Review PR Thắng: endpoint `/upload/init` (trả presigned PUT 5 phút) + refactor `/upscale/ai` nhận `object_key`. | 14/06/2026 | 14/06/2026 | - |
| 7 | Review PR Quân: FE dùng presigned PUT + progress upload thật; end-to-end test ảnh 20MB không qua BE. | 14/06/2026 | 14/06/2026 | - |

### Kết quả đạt được Tuần 7

Docker image production 1.7GB, chạy trên EC2 GPU đúng như dev. ECR có tag `v0.7.0`. Presigned direct-upload giảm latency perceived ~40% cho ảnh > 10MB — user thấy progress upload chạy tay, không phải chờ BE proxy. UPS-4, UPS-7 close.

### Thách thức & Bài học

UPS-7 (remove weights khỏi git) là bài học lớn: repo đã commit weights 64MB từ tuần 2, giờ phải `git filter-repo` viết lại history. Team phải re-clone. Lesson: nếu tuần 1 mình ép `.gitignore` chặt hơn thì không mất buổi này. Mình thêm rule vào PR template: "confirm không có file > 10MB trong PR" — checklist đơn giản nhưng hiệu quả.

### Kế hoạch tuần sau

Auth: chốt Cognito hay tự viết JWT. Design API contract auth. Review Khiêm provision ALB + WAF + Cognito user pool.
