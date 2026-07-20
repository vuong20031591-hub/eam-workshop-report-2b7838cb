---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

### Week 2 Objectives

Two tracks this week: read up on Real-ESRGAN to pick the right weights, and stand up the S3 storage side. The input/output bucket needs versioning, a 7-day lifecycle for the temp prefix, and SSE-S3 encryption. In parallel, bootstrap FastAPI at a minimum (`app/main.py`, `app/core/config.py`) so next week has somewhere to hang the real endpoints.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Read the Real-ESRGAN paper, pick weights `RealESRGAN_x4plus.pth` (~64MB). | 26/04/2026 | 27/04/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| 2 | Create **S3 bucket** `upscaler-io-dev` in `ap-southeast-1`, enable versioning + SSE-S3 (AES-256). | 28/04/2026 | 28/04/2026 | [S3 Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html) |
| 3 | Configure **S3 Lifecycle**: delete `tmp/*` after 7 days, move `output/*` to Standard-IA after 30 days. | 29/04/2026 | 29/04/2026 | [S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) |
| 4 | Upload weights to `s3://upscaler-io-dev/weights/`; write `download_weight()` using boto3. | 30/04/2026 | 30/04/2026 | - |
| 5 | Bootstrap FastAPI: `app/main.py`, `app/core/config.py` load env via `pydantic-settings`. | 01/05/2026 | 02/05/2026 | [Pydantic Settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) |
| 6 | Test S3 upload/download via script, measure latency (~120ms for a 2MB image from same-region EC2). | 03/05/2026 | 03/05/2026 | - |
| 7 | Move Linear issues UPS-3 and UPS-4 to Done. | 04/05/2026 | 04/05/2026 | - |

### Week 2 Achievements

The bucket is ready and the weights live on S3 instead of buried inside a Docker image. FastAPI boots fine, `/health` returns 200. Real-ESRGAN also runs locally on a borrowed RTX 3060 — not for production, but enough to verify the pipeline end to end.

### Challenges & Lessons

The obvious problem is that the weights are over 50MB, and pushing them into Git is wrong from the start. The fix is simple: keep them on S3, let BE pull at cold-start; the Docker image ends up much slimmer down the road. This is really the general rule for any large artifact — separate it from the code repo as early as possible, especially when CI has to build images.

### Next Week Plan

Write `ModelManager` as a Singleton with lazy-loading from S3. Design the `/upscale/ai` endpoint for multipart uploads. Provision an EC2 g5.xlarge as the dev GPU host.
