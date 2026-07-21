---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WORKLOG TUẦN 10

Tuần deploy. Docker cho mọi thứ, ECS/Fargate làm runtime, S3 để chứa ảnh. Đây là lúc app rời khỏi laptop của tôi. `UPS-10` trên Linear.

Tôi viết Dockerfile cho cả hai service. File frontend nhẹ và nhàm (`node` build, `nginx` runtime). File backend là chỗ tốn thời gian thật, vì mô hình kéo theo cả tá dependency Python và thứ liên quan CUDA, tôi không muốn image phình lên tám gigabyte vô nghĩa. Multi-stage build, chỉ giữ layer runtime trong image cuối, ra được size chấp nhận được.

Về phía AWS, setup ECS/Fargate gần như bám nguyên tài liệu FCAJ. Task definition cho từng service, một service phía trước từng task, một target group cho mỗi service sau ALB đã dựng trước. Deploy đầu ra được, task lên rồi vài phút sau chết vì container CPU-only bị OOM lúc chạy inference ảnh lớn. Nâng memory, đi tiếp.

S3 vào cho input và output ảnh. Backend upload lên `upscale-<env>-input`, worker đọc từ đó, ghi sang `upscale-<env>-output`, frontend fetch kết quả theo URL. Bật Block Public Access cả hai bucket, chỉ signed URL đi ra ngoài.

Về team, một quyết định lớn: GPU worker để tuần sau. Tuần này mục tiêu là chứng minh hình dạng deploy chạy được, không phải bóp hiệu năng.

Tuần sau: SQS, Redis, và SSE cho tiến trình realtime.
