---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

### Week 6 Objectives

Real progress bar + distributed tracing. I wrote the SSE (`/upscale/ai/stream`) spec for both BE and FE, and locked the AWS X-Ray strategy so we can see the bottleneck from S3 → model → output in a single trace.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Wrote the SSE contract spec: `progress`, `done`, `error` events; documented as an OpenAPI extension. | 01/06/2026 | 01/06/2026 | [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| 2 | Reviewed the `/upscale/ai/stream` PR using FastAPI `StreamingResponse` + progress hooks in the pipeline. | 02/06/2026 | 03/06/2026 | - |
| 3 | Reviewed the FE `EventSource` + progress bar + reconnect logic PR. | 04/06/2026 | 04/06/2026 | - |
| 4 | Locked X-Ray strategy: 3 subsegments (`s3.download`, `model.inference`, `s3.upload`), 10% sampling rate. | 05/06/2026 | 05/06/2026 | [AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/) |
| 5 | Reviewed the X-Ray daemon + IAM permission + service-map PR. | 06/06/2026 | 06/06/2026 | - |
| 6 | Read real X-Ray traces: `s3.download` takes 30% of latency on images > 5MB → opened a note to move to presigned direct-upload. | 07/06/2026 | 07/06/2026 | - |
| 7 | Sprint retro: SSE + X-Ray are both live; agreed to switch to presigned direct-upload in Week 7. | 07/06/2026 | 07/06/2026 | - |

### Week 6 Achievements

The progress bar shows real progress, not a fake spinner. X-Ray pinpointed the slow segment — the key insight was that S3 upload is the bottleneck for large images, which drove the direct-upload decision.

### Challenges & Lessons

Reading X-Ray traces is a skill I had to learn — the first time I opened the service map I had no idea what I was looking at and had to dig through AWS docs. Once it clicked, the principle was clear: don't guess at bottlenecks, measure them. Before this week I'd been assuming the model was slow; measurement revealed S3 upload was the real culprit. The Lead has to pull the team toward data-driven decisions, not gut feel.

### Next Week Plan

Lock Docker strategy, ECR setup, and presigned direct-upload flow. Review the production Dockerfile spec.
