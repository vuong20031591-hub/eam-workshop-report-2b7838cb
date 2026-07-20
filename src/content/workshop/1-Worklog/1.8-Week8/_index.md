---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

### Week 8 Objectives

In Week 8 I invested in auth and security baseline. Locked Cognito over self-managed JWT (ADR-004), wrote the FastAPI rate-limit spec, and locked the WAF rule baseline before opening public traffic.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Wrote ADR-004 auth: chose Cognito User Pool + Google Federation over self-managed JWT; documented trade-offs. | 15/06/2026 | 15/06/2026 | [Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/) |
| 2 | Wrote the Cognito setup spec: `upscale-users` User Pool, App Client, Google IdP; hosted UI domain. | 16/06/2026 | 16/06/2026 | - |
| 3 | Reviewed the Cognito provisioning PR + FastAPI JWT verification middleware using JWKS. | 17/06/2026 | 17/06/2026 | [Cognito JWT Verify](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html) |
| 4 | Wrote the rate-limit spec: `slowapi` 30 req/min/user on `/upscale/*`; return 429 with `Retry-After`. | 18/06/2026 | 18/06/2026 | [slowapi](https://slowapi.readthedocs.io/) |
| 5 | Locked WAF baseline: AWS Managed Rules Common + IP reputation + geo-block; full request logging; handed off to provisioning. | 19/06/2026 | 19/06/2026 | [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/) |
| 6 | Reviewed the FE Cognito hosted UI integration + token refresh flow PR. | 20/06/2026 | 20/06/2026 | - |
| 7 | Sprint retro: end-to-end auth working, WAF live; noted the Week 9 load-test prep. | 21/06/2026 | 21/06/2026 | - |

### Week 8 Achievements

Cognito + Google OAuth work end-to-end. WAF blocked test SQLi/XSS payloads on day one. 30 req/min rate limit protects the GPU from abuse. ADR-004 makes it easy to explain to stakeholders why we're not writing JWT from scratch.

### Challenges & Lessons

The biggest lesson picking Cognito: it isn't cheaper than self-managed JWT in dollars — it's cheaper in maintenance time. I'd been leaning self-managed thinking it was simpler, but once I listed the checklist (password reset, MFA, refresh token rotation, revoke, audit log) Cognito wins outright. Lead skill to sharpen: when torn, list the checklist in detail instead of going with gut feel.

### Next Week Plan

Write the k6 load test plan spec. Write the tile-based inference spec for 8K images to avoid GPU OOM.
