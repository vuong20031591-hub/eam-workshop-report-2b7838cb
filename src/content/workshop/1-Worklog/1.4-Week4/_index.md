---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

### Week 4 Objectives

Week 4 focus: open the Standard lane (LANCZOS on CPU) so not every request burns GPU, and start observability. I wrote the endpoint spec, locked the log format, and designed the property test plan so coverage doesn't stay thin around image processing.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Wrote the `/upscale/standard` spec: LANCZOS Pillow, CPU-only, preserve EXIF metadata. | 14/05/2026 | 14/05/2026 | [Pillow LANCZOS](https://pillow.readthedocs.io/en/stable/handbook/concepts.html#filters) |
| 2 | Locked the log format: JSON `{ts, level, request_id, path, latency_ms, gpu_util}`; specced the CloudWatch Log Group. | 15/05/2026 | 15/05/2026 | [CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/) |
| 3 | Reviewed the `/upscale/standard` PR + S3 `output/` save + presigned URL; approved. | 16/05/2026 | 17/05/2026 | - |
| 4 | Designed the property test plan: `hypothesis` generates random images 100-4000px, verifies output shape and no-crash. | 18/05/2026 | 19/05/2026 | [Hypothesis](https://hypothesis.readthedocs.io/) |
| 5 | Reviewed the 20 property tests + coverage report PR; approved when coverage hit ≥ 80%. | 20/05/2026 | 20/05/2026 | - |
| 6 | Reviewed the CloudWatch Log Group `/upscale/be` + p90 `latency_ms` Metric Filter PR; approved. | 21/05/2026 | 21/05/2026 | - |
| 7 | Sprint retro: baseline p90 = 6.1s (AI), 1.4s (Standard); locked SLO at 8s for next week. | 22/05/2026 | 22/05/2026 | - |

### Week 4 Achievements

Both endpoints run in parallel. CloudWatch has JSON logs, p90 latency is filterable. Property tests caught 2 edge-case bugs (1×1 images and images with alpha channel) before production. The 8s SLO got team-wide buy-in with real measurement behind it.

### Challenges & Lessons

The hard part isn't writing tests, it's enforcing the process: no tests, auto-reject the PR. Initial pushback fades when a property test catches an alpha-channel bug before production. This is a culture the Lead has to hold firm on from Week 1 — leaving it later only gets harder.

### Next Week Plan

FE week: lock TanStack Start as the stack, write the page structure spec. Review the S3 static hosting + CloudFront + ACM setup for the FE.
