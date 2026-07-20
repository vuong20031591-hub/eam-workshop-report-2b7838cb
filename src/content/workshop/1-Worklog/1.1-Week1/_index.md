---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## WEEK 1 WORKLOG

### Week 1 Objectives

In Week 1 I focused on locking the Upscale AI MVP scope, setting up the work-management stack on Linear and GitHub, and putting AWS guardrails in place before any code was written. My role in the project is Project Lead, so this week was about planning and setup — no implementation yet.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Locked the MVP: Real-ESRGAN x4 for the AI lane, LANCZOS for Standard, CodeFormer for faces; wrote a 2-page product brief. | 17/04/2026 | 17/04/2026 | - |
| 2 | Created the Linear workspace, `UPS` team, **AI Upscaler** project; defined labels `BE / FE / Bug / Feature / Task`. | 17/04/2026 | 17/04/2026 | [Linear](https://linear.app/) |
| 3 | Built the UPS-* backlog and split work by module (BE core, BE + AWS infra, FE); opened the AWS prerequisite checklist. | 18/04/2026 | 18/04/2026 | - |
| 4 | Bootstrapped two GitHub repos `upscale-BE` (FastAPI) and `upscale-FE` (TanStack Start), enabled branch protection on main and required PR review. | 18/04/2026 | 19/04/2026 | [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches) |
| 5 | Drafted **API contract v0** (`/upscale/ai`, `/upscale/standard`, `/face/enhance`) — request/response schemas and error codes. | 20/04/2026 | 21/04/2026 | - |
| 6 | Reviewed the AWS baseline checklist: IAM user `upscale-deployer` with AdministratorAccess + MFA, region `ap-southeast-1`, $10/month Budgets alert. | 22/04/2026 | 22/04/2026 | [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) |
| 7 | Sprint planning for Week 2: prioritised issues, put S3 + FastAPI skeleton first, locked the Definition of Done. | 23/04/2026 | 23/04/2026 | - |

### Week 1 Achievements

The Linear backlog now has clear labels and priorities, no more ambiguous issues. Both GitHub repos are live with branch protection and PR templates in place. The product brief and API contract v0 act as the source of truth for detailed specs starting next week.

### Challenges & Lessons

The hardest part of Week 1 wasn't technical — it was forcing myself to finish the brief before creating any issue. The common temptation is to jump into code for the feeling of momentum, but if the API contract isn't clear early, by Week 3 FE and BE will disagree on the response shape. Takeaway: a brief is the cheapest alignment tool — 2 hours of writing saves a whole week of arguing.

### Next Week Plan

Write the S3 bucket spec (weights / tmp / output prefixes, lifecycle, encryption) and the FastAPI folder layout spec. Start drafting the high-level architecture diagram for UPS-17.
