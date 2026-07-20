---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

### Week 5 Objectives

Hoàn tất chương 5.4 Storage: EFS cho model weights dùng chung, ECR cho Docker image, Secrets Manager cho credential. Tất cả những gì application cần khi bước sang chương 5.5.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Tạo filesystem EFS `upscale-efs` và mount target ở cả 2 private subnet. | 17/05/2026 | 17/05/2026 | [EFS](https://docs.aws.amazon.com/efs/latest/ug/) |
| 2 | Mount EFS lên EC2 test, copy file weights giả để chắc là chạy được. | 18/05/2026 | 18/05/2026 | - |
| 3 | Tạo ECR repo `upscale-api` và `upscale-worker`. | 19/05/2026 | 19/05/2026 | [ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/) |
| 4 | Tập `docker push` lên ECR từ laptop bằng profile deployer. | 20/05/2026 | 20/05/2026 | - |
| 5 | Lưu password DB và Cognito client secret vào Secrets Manager. | 21/05/2026 | 21/05/2026 | [Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/) |
| 6 | Cập nhật ghi chú với bức tranh storage đầy đủ: S3 cho object, EFS cho weights, ECR cho image. | 22/05/2026 | 22/05/2026 | - |
| 7 | Đóng `UPS-6` trên Linear, kéo `UPS-7` (ECS cluster) sang sprint sau. | 23/05/2026 | 23/05/2026 | - |

### Week 5 Achievements

Storage xong. Tuần sau bước vào app layer, mọi thứ cần dùng đã có sẵn, không phải dừng workshop giữa chừng đi tạo bucket.

### Challenges & Lessons

`docker push` lần đầu fail vì quên `aws ecr get-login-password`. Đọc to error lên (thay vì paste vào search) là tự ra ngay. Thói quen nhỏ, lợi lớn.

### Next Week Plan

Chương 5.5 Application phần A và B: Redis + SQS. Làm trong `UPS-7`.
