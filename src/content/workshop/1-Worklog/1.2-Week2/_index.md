---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

### Week 2 Objectives

This week I focused on writing design specs for the two foundations: the S3 layout (bucket / prefix / lifecycle) and the FastAPI folder layout. In parallel I read the Real-ESRGAN paper to prepare for reviewing model code later, and started drafting the high-level architecture for UPS-17.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Read the Real-ESRGAN paper and Pillow LANCZOS docs; locked weights on `RealESRGAN_x4plus.pth` (~64MB). | 26/04/2026 | 27/04/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| 2 | Wrote the S3 bucket spec: `upscale-io` in `ap-southeast-1`, prefixes `weights/ tmp/ output/`, versioning + SSE-S3. | 28/04/2026 | 28/04/2026 | [S3 Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html) |
| 3 | Wrote the lifecycle policy: delete `tmp/*` after 7 days, transition `output/*` to Standard-IA after 30 days. | 29/04/2026 | 29/04/2026 | [S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) |
| 4 | Reviewed the PR provisioning the bucket + weights upload + IAM policy `EC2-Upscale-Role`. | 30/04/2026 | 30/04/2026 | - |
| 5 | Wrote the FastAPI layout spec: `app/{core, models, services, routers}`, config via `pydantic-settings`. | 01/05/2026 | 02/05/2026 | [Pydantic Settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) |
| 6 | Reviewed the FastAPI skeleton PR + `/health` endpoint + dev Dockerfile; approved. | 03/05/2026 | 03/05/2026 | - |
| 7 | Moved Linear UPS-3, UPS-4 to Done; wrote architecture notes for Week 3. | 04/05/2026 | 04/05/2026 | - |

### Week 2 Achievements

The S3 and FastAPI layout specs are locked in writing. Weights live on S3, not in the Docker image — the artifact-versus-code repo separation is clean. The high-level architecture also has its first draft.

### Challenges & Lessons

Writing a design spec before handing off an issue is how I force myself to think deeply enough. If I only explain verbally, the next day I get asked again about lifecycle, encryption, prefixes. A one-page design doc takes 2 hours but saves 5-6 hours of Slack back-and-forth.

### Next Week Plan

Write the `/upscale/ai` endpoint spec (multipart upload, response schema). Lock the `ModelManager` strategy (Singleton, lazy-load) in ADR-001. Pick a diagram tool (draw.io) for UPS-18.
