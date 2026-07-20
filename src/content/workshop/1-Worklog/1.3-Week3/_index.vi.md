---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

### Week 3 Objectives

Tuần 3 team bắt đầu chạm GPU thật. Việc của tôi: viết spec endpoint `/upscale/ai`, chốt tech decision cho `ModelManager` bằng ADR-001, review PR provision EC2 GPU + PR implement model loader. Tôi cũng viết spec validator input (size, extension) để tránh crash model sau này.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết spec `/upscale/ai`: POST multipart, response `{ job_id, output_url, elapsed_ms }`; viết OpenAPI spec. | 05/05/2026 | 05/05/2026 | [OpenAPI](https://swagger.io/specification/) |
| 2 | Review PR EC2 g4dn.xlarge (T4 16GB) + Ubuntu 22.04 DLAMI + EBS gp3 100GB + IAM role `EC2-Upscale-Role`. | 06/05/2026 | 06/05/2026 | [EC2 G4](https://aws.amazon.com/ec2/instance-types/g4/) |
| 3 | Viết ADR-001: `ModelManager` Singleton, lazy-load, cache `/opt/weights/`; document lý do và alternative bị loại. | 07/05/2026 | 08/05/2026 | [ADR](https://adr.github.io/) |
| 4 | Review PR `ModelManager.load()` + FP16 inference; feedback vòng 1 (thiếu warmup), approve vòng 2. | 09/05/2026 | 10/05/2026 | - |
| 5 | Viết spec validator: max 10MB, extensions `jpg/png/webp`, Pillow `verify()`; kèm test case yêu cầu. | 11/05/2026 | 11/05/2026 | - |
| 6 | Review PR endpoint `/upscale/ai` + upload S3 `tmp/{uuid}.png` + presigned URL 1h; approve. | 12/05/2026 | 12/05/2026 | [S3 Presigned URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) |
| 7 | Chạy end-to-end demo cùng cả nhóm: 1080p → 4K, ~5.8s; log metric vào Linear để tuần sau baseline. | 13/05/2026 | 13/05/2026 | - |

### Week 3 Achievements

Endpoint `/upscale/ai` chạy end-to-end, cold-start ~4.2s, inference ~5.8s cho 1080p. Presigned URL đã tách permission bucket ra khỏi FE — chốt sớm giúp tuần 5 không phải đụng lại IAM. ADR đầu tiên của project cũng có, sau này review dễ vì có căn cứ.

### Challenges & Lessons

PR đầu về model loader tôi phải reject vòng 1 vì thiếu warmup — cold-start GPU dài sẽ làm request đầu timeout. Bài học review PR: nhìn code không đủ, phải hỏi chạy lần đầu có gì khác lần thứ hai không. Chi phí g4dn cũng là quyết định phải sớm, tôi chốt đặt AWS Instance Scheduler stop 22:00 - start 08:00, giảm ~60% bill.

### Next Week Plan

Viết spec `/upscale/standard` (LANCZOS, CPU). Viết spec log format JSON cho CloudWatch. Design property tests strategy cho pipeline xử lý ảnh.
