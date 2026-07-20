---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

### Week 3 Objectives

Tuần này team bắt đầu chạm GPU thật. Vai trò của tôi: design endpoint contract `/upscale/ai`, review Khiem provision EC2 GPU + IAM role, review Thang implement `ModelManager`. Tôi cũng ngồi cùng Thang chốt strategy validate input (size, extension) để tránh crash model sau này.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Design contract `/upscale/ai`: POST multipart, response `{ job_id, output_url, elapsed_ms }`; viết OpenAPI spec. | 05/05/2026 | 05/05/2026 | [OpenAPI](https://swagger.io/specification/) |
| 2 | Review Khiem: EC2 g4dn.xlarge (T4 16GB) + Ubuntu 22.04 DLAMI + EBS gp3 100GB + IAM role `EC2-Upscale-Role`. | 06/05/2026 | 06/05/2026 | [EC2 G4](https://aws.amazon.com/ec2/instance-types/g4/) |
| 3 | Chốt tech decision với Thang: dùng Singleton cho `ModelManager`, lazy-load, cache `/opt/weights/`; document trong ADR. | 07/05/2026 | 08/05/2026 | [ADR](https://adr.github.io/) |
| 4 | Review PR Thang: `ModelManager.load()` + FP16 inference verify; feedback vòng 1 (thiếu warmup), duyệt vòng 2. | 09/05/2026 | 10/05/2026 | - |
| 5 | Spec validator: max 10MB, extensions `jpg/png/webp`, Pillow `verify()`; giao Thang implement kèm unit test. | 11/05/2026 | 11/05/2026 | - |
| 6 | Review PR Thang: endpoint `/upscale/ai` + upload S3 `tmp/{uuid}.png` + presigned URL 1h; approve. | 12/05/2026 | 12/05/2026 | [S3 Presigned URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) |
| 7 | Chạy end-to-end demo với team: 1080p → 4K, ~5.8s; log metric vào Linear để tuần sau baseline. | 13/05/2026 | 13/05/2026 | - |

### Week 3 Achievements

Endpoint `/upscale/ai` chạy end-to-end, cold-start ~4.2s, inference ~5.8s cho 1080p. Presigned URL đã tách permission bucket ra khỏi FE — chốt sớm cái này giúp tuần 5 Quan không phải đụng IAM. ADR đầu tiên của project cũng có, sau này review dễ vì có căn cứ.

### Challenges & Lessons

PR đầu tiên của Thang tôi phải reject vòng 1 vì thiếu warmup — cold-start GPU quá dài sẽ làm request đầu timeout. Đây là bài học tôi rút cho việc review: nhìn code không đủ, phải hỏi "chạy lần đầu có gì khác lần thứ hai không". Chi phí g4dn cũng đau đầu, tôi giao Khiem set AWS Instance Scheduler stop 22:00 - start 08:00, giảm ~60%; đây là loại decision Lead phải quyết sớm chứ không để cuối tháng nhìn bill mới hoảng.

### Next Week Plan

Design endpoint `/upscale/standard` (LANCZOS, CPU) — spec cho Thang. Design CloudWatch log format (structured JSON) cho Khiem. Ngồi review kế hoạch property tests với Thang.
