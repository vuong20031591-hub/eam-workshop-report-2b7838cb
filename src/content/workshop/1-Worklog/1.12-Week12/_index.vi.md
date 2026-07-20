---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

### Week 12 Objectives

Tuần cuối: launch checklist, game-day failover, hand-off doc. Vai trò tôi: chốt Go/No-go criteria, chạy game-day, viết runbook incident, và go-live tại `upscale.dev`.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết launch checklist Go/No-go: SLO p95 ≤ 12s, error rate < 1%, WAF live, GuardDuty enable, backup DB daily. | 13/07/2026 | 13/07/2026 | - |
| 2 | Chạy game-day: kill 1 GPU task giữa load 50 VU, verify SQS retry + ASG replace trong 5 phút. | 14/07/2026 | 14/07/2026 | - |
| 3 | Viết runbook incident: 5 kịch bản (GPU OOM, SQS backlog, Cognito outage, S3 5xx, Redis down); action step chi tiết. | 15/07/2026 | 15/07/2026 | - |
| 4 | Viết post-mortem template + đăng ký PagerDuty on-call rotation cho 4 tuần đầu sau go-live. | 16/07/2026 | 16/07/2026 | [PagerDuty](https://www.pagerduty.com/) |
| 5 | Review PR CI/CD pipeline final: GitHub Actions build → push ECR → ECS force-deploy trên tag `v1.*`. | 17/07/2026 | 17/07/2026 | - |
| 6 | Go-live: chuyển DNS `upscale.dev` sang CloudFront prod; monitor CloudWatch 4h; smoke test 30 lần. | 18/07/2026 | 18/07/2026 | - |
| 7 | Retro cả project + hand-off doc cho vận hành: kiến trúc, runbook, ADR, contact matrix. | 19/07/2026 | 19/07/2026 | - |

### Week 12 Achievements

Upscale AI live tại `upscale.dev` với SLO p95 = 10.8s (dưới 12s target), error rate 0.3%. Game-day chứng minh hệ thống tự phục hồi trong 5 phút khi GPU chết. Runbook + hand-off doc giúp team vận hành tiếp tục mà không cần tôi kèm.

### Challenges & Lessons

Bài học lớn nhất cả 12 tuần: launch không phải kết thúc, mà là chuyển giao. Nếu doc thiếu, người trực sau không thể xử lý incident lúc 3 giờ sáng. Tôi rút ra: Lead phải dành ít nhất 1 tuần cuối cho hand-off, không cắm đầu vào feature mới. Ngoài ra, game-day trước go-live là bảo hiểm rẻ nhất — 1 buổi chạy giả tiết kiệm cả tuần dập lửa thật.

### Next Week Plan

Post-launch: monitor 4 tuần, viết retrospective toàn project, chuẩn bị đề xuất phase 2 (video upscale, batch API).
