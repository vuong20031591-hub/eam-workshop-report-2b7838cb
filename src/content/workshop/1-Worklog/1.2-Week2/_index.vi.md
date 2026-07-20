---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

### Week 2 Objectives

Tuần 2 tôi tập trung viết design spec cho hai mảng nền: S3 layout (bucket / prefix / lifecycle) và FastAPI folder layout. Song song đọc paper Real-ESRGAN để có nền tảng review model code sau này, và bắt đầu vẽ high-level architecture cho UPS-17.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Đọc paper Real-ESRGAN + document Pillow LANCZOS; chốt weights `RealESRGAN_x4plus.pth` (~64MB). | 26/04/2026 | 27/04/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| 2 | Viết spec S3 bucket: `upscale-io` region `ap-southeast-1`, prefix `weights/ tmp/ output/`, versioning + SSE-S3. | 28/04/2026 | 28/04/2026 | [S3 Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html) |
| 3 | Viết lifecycle policy: xoá `tmp/*` sau 7 ngày, chuyển `output/*` sang Standard-IA sau 30 ngày. | 29/04/2026 | 29/04/2026 | [S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) |
| 4 | Review pull request setup bucket + weights upload + IAM policy `EC2-Upscale-Role`. | 30/04/2026 | 30/04/2026 | - |
| 5 | Viết spec FastAPI layout: `app/{core, models, services, routers}`, config qua `pydantic-settings`. | 01/05/2026 | 02/05/2026 | [Pydantic Settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) |
| 6 | Review PR FastAPI skeleton + `/health` endpoint + Dockerfile dev; approve merge. | 03/05/2026 | 03/05/2026 | - |
| 7 | Cập nhật Linear UPS-3, UPS-4 sang Done; viết note kiến trúc cho tuần 3. | 04/05/2026 | 04/05/2026 | - |

### Week 2 Achievements

Spec S3 và spec FastAPI layout đã chốt bằng document. Weights nằm trên S3, không dính vào Docker image — đúng nguyên tắc tách artifact khỏi code repo. High-level architecture cũng đã xong bản draft đầu.

### Challenges & Lessons

Viết design spec trước khi giao issue là cách tôi ép mình suy nghĩ đủ sâu. Nếu chỉ nói miệng thì hôm sau sẽ bị hỏi lại về lifecycle, encryption, prefix. Một trang design doc mất tôi 2 tiếng, nhưng tiết kiệm ít nhất 5-6 giờ tương tác Slack sau đó.

### Next Week Plan

Viết spec `/upscale/ai` endpoint (multipart upload, response schema). Chốt strategy cho `ModelManager` (Singleton, lazy-load) trong ADR-001. Chọn diagram tool (draw.io) cho UPS-18.
