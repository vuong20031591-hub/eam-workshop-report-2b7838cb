---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

### Week 3 Objectives

This week the team started touching real GPUs. My job: write the `/upscale/ai` endpoint spec, lock the `ModelManager` tech decision in ADR-001, review the PR provisioning the GPU EC2 instance, and review the model loader PR. I also wrote the input validator spec (size, extension) to prevent later model crashes.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Wrote the `/upscale/ai` spec: POST multipart, response `{ job_id, output_url, elapsed_ms }`; drafted OpenAPI spec. | 05/05/2026 | 05/05/2026 | [OpenAPI](https://swagger.io/specification/) |
| 2 | Reviewed the EC2 g4dn.xlarge (T4 16GB) + Ubuntu 22.04 DLAMI + EBS gp3 100GB + IAM role `EC2-Upscale-Role` PR. | 06/05/2026 | 06/05/2026 | [EC2 G4](https://aws.amazon.com/ec2/instance-types/g4/) |
| 3 | Wrote ADR-001: `ModelManager` Singleton, lazy-load, cache in `/opt/weights/`; documented the reasoning and rejected alternatives. | 07/05/2026 | 08/05/2026 | [ADR](https://adr.github.io/) |
| 4 | Reviewed the `ModelManager.load()` + FP16 inference PR; round-1 feedback (missing warmup), approved on round 2. | 09/05/2026 | 10/05/2026 | - |
| 5 | Wrote the validator spec: max 10MB, extensions `jpg/png/webp`, Pillow `verify()`; required test cases. | 11/05/2026 | 11/05/2026 | - |
| 6 | Reviewed the `/upscale/ai` endpoint + S3 `tmp/{uuid}.png` upload + 1h presigned URL PR; approved. | 12/05/2026 | 12/05/2026 | [S3 Presigned URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) |
| 7 | Ran an end-to-end demo with the whole group: 1080p → 4K, ~5.8s; logged the metric in Linear as a baseline. | 13/05/2026 | 13/05/2026 | - |

### Week 3 Achievements

`/upscale/ai` runs end-to-end, cold-start ~4.2s, inference ~5.8s for 1080p. Presigned URLs already isolate bucket permissions from the FE — locking this early meant no IAM work in Week 5. Also delivered the project's first ADR, which will make later reviews easier.

### Challenges & Lessons

I rejected the first model loader PR because it missed warmup — a long GPU cold-start would time out the first request. Review takeaway: reading the code isn't enough, always ask 'does the first call behave differently from the second?'. The g4dn cost was also a decision to make early, so I scheduled AWS Instance Scheduler stop 22:00 - start 08:00, cutting the bill by ~60%.

### Next Week Plan

Write the `/upscale/standard` spec (LANCZOS, CPU). Write the JSON log format spec for CloudWatch. Design the property test strategy for the image pipeline.
