---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

### Week 12 Objectives

Final week: launch checklist, game-day failover, hand-off doc. My role: lock Go/No-go criteria, run game-day, write the incident runbook, and go live at `upscale.dev`.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Wrote the Go/No-go launch checklist: p95 ≤ 12s SLO, error rate < 1%, WAF live, GuardDuty on, daily DB backup. | 13/07/2026 | 13/07/2026 | - |
| 2 | Ran game-day: killed 1 GPU task mid-50-VU-load, verified SQS retry + ASG replacement within 5 minutes. | 14/07/2026 | 14/07/2026 | - |
| 3 | Wrote the incident runbook: 5 scenarios (GPU OOM, SQS backlog, Cognito outage, S3 5xx, Redis down) with detailed action steps. | 15/07/2026 | 15/07/2026 | - |
| 4 | Wrote the post-mortem template + registered a PagerDuty on-call rotation for the first 4 weeks after go-live. | 16/07/2026 | 16/07/2026 | [PagerDuty](https://www.pagerduty.com/) |
| 5 | Reviewed the final CI/CD pipeline PR: GitHub Actions build → push ECR → ECS force-deploy on tag `v1.*`. | 17/07/2026 | 17/07/2026 | - |
| 6 | Go-live: switched DNS `upscale.dev` to prod CloudFront; monitored CloudWatch for 4h; ran 30 smoke tests. | 18/07/2026 | 18/07/2026 | - |
| 7 | Whole-project retro + ops hand-off doc: architecture, runbook, ADRs, contact matrix. | 19/07/2026 | 19/07/2026 | - |

### Week 12 Achievements

Upscale AI is live at `upscale.dev` with p95 = 10.8s (under the 12s SLO) and error rate 0.3%. Game-day proved the system recovers itself within 5 minutes when a GPU dies. Runbook + hand-off doc let the ops team continue without me shadowing them.

### Challenges & Lessons

The biggest lesson of all 12 weeks: launch isn't the end, it's a handover. Missing docs mean the next on-call can't fix a 3am incident. Takeaway: the Lead has to reserve at least the final week for hand-off, not push new features. Also, game-day before go-live is the cheapest insurance — one rehearsal saves a week of real firefighting.

### Next Week Plan

Post-launch: monitor for 4 weeks, write the whole-project retrospective, prepare a Phase 2 proposal (video upscale, batch API).
