---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

### Week 4 Objectives

Finish `/upscale/standard` running LANCZOS via Pillow — the point is to keep this mode off the GPU and off the bill. Add CloudWatch Logs for FastAPI through the CloudWatch Agent on EC2. Write property tests with Hypothesis for the validator, and a PSNR sanity check so I can compare AI and Standard output on the same images.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Implement `/upscale/standard` using `Pillow.Image.resize(LANCZOS)` for scales 2/3/4. | 14/05/2026 | 14/05/2026 | [Pillow](https://pillow.readthedocs.io/) |
| 2 | Install **CloudWatch Agent** on EC2, ship `/var/log/upscaler/*.log` to log group `/upscaler/be/dev`. | 15/05/2026 | 15/05/2026 | [CloudWatch Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html) |
| 3 | Configure structured (JSON) logging via `structlog`, each request carries `request_id`. | 16/05/2026 | 17/05/2026 | - |
| 4 | Write 14 property tests with Hypothesis: sizes, channels, EXIF orientation. | 18/05/2026 | 19/05/2026 | [Hypothesis](https://hypothesis.readthedocs.io/) |
| 5 | PSNR test: LANCZOS x4 vs Real-ESRGAN x4 across 20 sample images — Real-ESRGAN ahead by ~2.4 dB. | 20/05/2026 | 20/05/2026 | - |
| 6 | Add `x_ray_trace_id` header to prep AWS X-Ray next week. | 21/05/2026 | 21/05/2026 | - |
| 7 | Update Linear UPS-7, UPS-8. | 22/05/2026 | 22/05/2026 | - |

### Week 4 Achievements

Both AI and Standard modes now run stably on EC2. CloudWatch Logs Insights can query by `request_id`, so I no longer SSH in to grep. All 14 property tests pass; the ~2.4 dB PSNR delta confirms the AI mode is worth the extra GPU spend.

### Challenges & Lessons

Default FastAPI logs are plain text, which makes CloudWatch filtering miserable — regex on free-form text is easy to get wrong. Switching to structured JSON with `structlog` plus a `%message` pattern in the CloudWatch Agent config solved it. Debug time dropped noticeably, and it's cheap enough that I now treat structured logging as the default for every project.

### Next Week Plan

Bootstrap FE with TanStack Start (React 19 + Vite 8) and build the upload UI. SSE progress endpoint. Turn on AWS X-Ray tracing for FastAPI.
