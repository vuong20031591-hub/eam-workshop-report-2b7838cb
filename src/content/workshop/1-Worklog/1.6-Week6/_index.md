---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

### Week 6 Objectives

Three things this week: write the SSE endpoint `/upscale/ai/stream` that reports percent + step; turn on AWS X-Ray tracing for FastAPI via `aws-xray-sdk`; and on FE, add a progress bar + skeleton loading so users aren't staring at a blank screen while the model runs.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Implement the SSE endpoint with `StreamingResponse`, yielding `{progress, step}` every 200ms. | 01/06/2026 | 01/06/2026 | [FastAPI SSE](https://fastapi.tiangolo.com/advanced/custom-response/) |
| 2 | Integrate `aws-xray-sdk-python`, wrap boto3 + requests; segments for `model.load`, `s3.upload`, `inference`. | 02/06/2026 | 02/06/2026 | [AWS X-Ray Python](https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-python.html) |
| 3 | Install the **X-Ray daemon** on EC2, attach IAM policy `AWSXRayDaemonWriteAccess`. | 03/06/2026 | 04/06/2026 | - |
| 4 | Review the service map in X-Ray console: FastAPI → S3 → GPU inference. | 05/06/2026 | 06/06/2026 | - |
| 5 | Consume SSE on FE with `EventSource`, render shadcn `<Progress>`. | 07/06/2026 | 07/06/2026 | - |
| 6 | Latency breakdown: `s3.get 180ms + load 90ms + infer 4.1s + s3.put 210ms`. | 08/06/2026 | 08/06/2026 | - |
| 7 | Update Linear UPS-10, UPS-11. | 09/06/2026 | 09/06/2026 | - |

### Week 6 Achievements

X-Ray's service map confirmed the earlier guess: inference is the bottleneck, S3 I/O is fine. FE now shows real-time progress, and the app feels different — the "did it hang?" moment during those first few seconds is gone.

### Challenges & Lessons

SSE kept getting cut off with CloudFront in the middle because it buffers streaming responses by default. Fix: add `X-Accel-Buffering: no` on the BE side and create a `CachingDisabled` policy on CloudFront specifically for `/upscale/*`. Every CDN leans toward caching by default, so any streaming endpoint needs its own explicit policy.

### Next Week Plan

Presigned POST so FE uploads straight to S3 without touching BE. Dockerize BE. Prep ECR.
