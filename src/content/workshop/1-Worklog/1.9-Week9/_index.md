---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

### Week 9 Objectives

Week 9 was about scale: real numbers via k6 load tests, and a tile-based inference spec for 8K images so we don't OOM the 16GB GPU.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Wrote the load test plan spec: k6 script simulating 50 VUs over 10 minutes, ramp 5 → 50; upload → poll → download scenario. | 22/06/2026 | 22/06/2026 | [k6](https://k6.io/) |
| 2 | Reviewed the k6 script + Grafana Cloud dashboard PR; ran the single-instance baseline. | 23/06/2026 | 23/06/2026 | - |
| 3 | Read the baseline: p95 = 9.2s at 30 VUs, 0% fail rate; identified GPU 16GB OOM at 4K → need tiling. | 24/06/2026 | 24/06/2026 | - |
| 4 | Wrote the tile-based inference spec: 512×512 tiles, 32px overlap, Gaussian blend; documented in ADR-005. | 25/06/2026 | 25/06/2026 | [Tiled Inference](https://github.com/xinntao/Real-ESRGAN#--tile) |
| 5 | Reviewed the tile-mode implementation + benchmark PR: 4K no longer OOMs, latency +18% (acceptable). | 26/06/2026 | 26/06/2026 | - |
| 6 | Locked Redis cache for job status (instead of DB polling): TTL 1h, key `job:{uuid}`; handed off ElastiCache provisioning. | 27/06/2026 | 27/06/2026 | [ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/) |
| 7 | Sprint retro: real load numbers in hand; agreed on Week 10 security hardening + Week 11 auto-scale. | 28/06/2026 | 28/06/2026 | - |

### Week 9 Achievements

Real numbers to bring to stakeholders: one g4dn.xlarge handles ~30 concurrent VUs with p95 under SLO. Tile mode unlocks 8K images without OOM. ElastiCache Redis replaces DB polling, cutting DB load significantly.

### Challenges & Lessons

Measure first, decide second. Without a real k6 run, the team argues about capacity forever. Once numbers are on the board, everyone converges quickly. For tile mode, the critical choice is enough overlap to hide seams — 16px shows a visible line, 32px is smooth. That only shows up in real image tests.

### Next Week Plan

Security hardening: Secrets Manager rotation, IAM least-privilege audit. Write the ECS on EC2 + ASG architecture spec for auto-scaling.
