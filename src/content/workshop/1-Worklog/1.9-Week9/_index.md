---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

### Week 9 Objectives

Run a 20-concurrent upload load test through the ALB to find the GPU bottleneck. Enable tile-based inference (`TILE_SIZE=512`) for inputs bigger than 2K. Build a CloudWatch dashboard that combines ALB metrics with the custom Prometheus ones, and wire an alarm to SNS email when p90 crosses the threshold.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Run `hey -n 100 -c 5 -m POST` against the ALB endpoint with a 1080p image. | 28/06/2026 | 28/06/2026 | [hey](https://github.com/rakyll/hey) |
| 2 | Measure p50=6.2s, p90=9.8s, GPU util ~95% (via CloudWatch custom metric). | 29/06/2026 | 29/06/2026 | - |
| 3 | Enable `TILE_SIZE=512` for inputs >2K, remeasure — p90 down to 8.1s, no more OOM. | 30/06/2026 | 01/07/2026 | - |
| 4 | Serialize AI requests through an `asyncio.Lock`, keep Standard mode parallel. | 02/07/2026 | 03/07/2026 | - |
| 5 | Publish custom metric `Upscale/GPU/Utilization` via CloudWatch Agent + `nvidia-smi`. | 04/07/2026 | 04/07/2026 | - |
| 6 | Create **CloudWatch Dashboard** `upscale-dev`: ALB (HTTPCode_Target_5XX, TargetResponseTime) + GPU util + p90. | 05/07/2026 | 05/07/2026 | [CloudWatch Dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html) |
| 7 | Set a **CloudWatch Alarm**: p90 > 12s for 5 minutes → SNS email. | 06/07/2026 | 06/07/2026 | [CloudWatch Alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html) |

### Week 9 Achievements

p90 dropped from 9.8s to 8.1s after enabling tiling. 3840×2160 images no longer OOM. The dashboard and alarm are ready for production.

### Challenges & Lessons

Under high concurrency a single GPU thrashes: multiple requests loading the model into VRAM at once is the bottleneck. I serialize AI through a lock so requests don't step on each other, and save real scale-out for week 11 (ASG + SQS). The condensed takeaway: 1 GPU equals 1 effective AI worker; more throughput means scaling horizontally, not squeezing harder vertically.

### Next Week Plan

Generate API docs (OpenAPI + Redoc). Move analytics tokens to AWS Secrets Manager instead of `.env`. Put AWS WAF in front of CloudFront and the ALB.
