---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## WEEK 1 WORKLOG

### Week 1 Objectives

Week one was mostly about clearing the ground: open an AWS account and put guardrails in place before touching anything that costs money. Concretely that meant an IAM user `upscale-deployer` with `AdministratorAccess` and MFA, region locked to `ap-southeast-1` (Singapore), AWS Budgets for spend alerts, and CloudTrail for the audit trail. In parallel, spin up two GitHub repos (`upscale-BE` for FastAPI and `upscale-FE` for TanStack Start + React 19) and push the initial commits. MVP scope was locked in the same week: Real-ESRGAN x4 for AI mode, LANCZOS for Standard, with the S3 bucket for input/output pushed to week 2.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Sign up for AWS Free Tier, enable **AWS Budgets** with a $10/month alert, turn on **CloudTrail** for `ap-southeast-1`. | 17/04/2026 | 17/04/2026 | [AWS Free Tier](https://aws.amazon.com/free/) |
| 2 | Create **IAM** user `upscale-deployer` with `AdministratorAccess`, enable console access + MFA, save the account sign-in URL. | 18/04/2026 | 18/04/2026 | [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) |
| 3 | Create GitHub repos `upscale-BE`, `upscale-FE`, push initial commit. | 19/04/2026 | 19/04/2026 | [upscale-BE](https://github.com/vuong20031591-hub/upscale-BE), [upscale-FE](https://github.com/vuong20031591-hub/upscale-FE) |
| 4 | Lock BE stack: Python 3.11 + FastAPI + PyTorch, GPU CUDA FP16, files pushed to **S3** via **boto3**. | 20/04/2026 | 20/04/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| 5 | Lock FE stack: **TanStack Start** (React 19 + Vite 8) + TS + Tailwind v4 + shadcn/ui (Radix) + react-hook-form + zod + OIDC (Cognito via `react-oidc-context`); hosted on **S3 + CloudFront** (SPA build). | 21/04/2026 | 21/04/2026 | [TanStack Start](https://tanstack.com/start) |
| 6 | Draft API contract: `/health`, `/upscale/ai`, `/upscale/standard`, `/metrics` (Prometheus). | 22/04/2026 | 23/04/2026 | - |
| 7 | Bootstrap Linear project **AI Upscaler**, create epics BE/FE/Infra (AWS)/Docs. | 24/04/2026 | 24/04/2026 | [Linear](https://linear.app/vuongtech/project/ai-upscaler-9cc98aa31b67/overview) |

### Week 1 Achievements

Both GitHub repos got their initial commits on 17/04/2026. The AWS account is ready to use, `upscale-deployer` has MFA, region is pinned to `ap-southeast-1`, and the Budgets alert already fired once (a test transfer) just to confirm it works. BE settled on a layered layout (`core/`, `models/`, `services/`, `routers/`) and FE uses TanStack Start's file-based routing.

### Challenges & Lessons

The deployer user gets `AdministratorAccess` on purpose — during a workshop-style build the friction of chasing missing permissions is worse than the risk on a sandbox account, and it comes back off at week 7 when I split roles per service. The rule I stuck to is never sign in as root after day one, always through the IAM sign-in URL with MFA. What I took away: Budgets and CloudTrail should be on from day one, not later. The cost is essentially zero, and in return you sleep better and have evidence when you need to look something up.

### Next Week Plan

Bootstrap the FastAPI skeleton with a `boto3` S3 client. Create the `upscale-io` bucket with versioning and lifecycle rules. Upload `RealESRGAN_x4plus.pth` to S3 and write `ModelManager` so BE can load weights.
