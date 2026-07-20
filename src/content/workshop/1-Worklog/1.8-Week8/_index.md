---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

### Week 8 Objectives

Put an internet-facing **Application Load Balancer** in front of FastAPI on EC2 with a custom domain and ACM cert, so BE stops worrying about TLS and CORS. Attach **AWS WAF** at the ALB with rate-based rules (10 req/min/IP) instead of a managed gateway. Wire **Cognito** OIDC (Google IdP) so the ALB listener authenticates before forwarding to the target group. And expand the test suite to 24 tests (property + integration).

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Create **ALB** `upscale-alb` (internet-facing, 2 public subnets), target group `upscale-api-tg` pointing at the EC2 dev host on port 8000. | 19/06/2026 | 19/06/2026 | [ALB](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/) |
| 2 | Request ACM cert for `api.upscaler.vuongtech.dev` in `ap-southeast-1`, attach to ALB HTTPS listener; HTTP:80 redirects to HTTPS:443. | 20/06/2026 | 20/06/2026 | [ACM](https://docs.aws.amazon.com/acm/latest/userguide/) |
| 3 | Create **Cognito** user pool + Google IdP; add ALB listener rule `authenticate-cognito` for `/upscale/*` so unauthenticated requests are bounced to the hosted UI. | 21/06/2026 | 21/06/2026 | [ALB + Cognito](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html) |
| 4 | Configure CORS response headers on FastAPI for the FE origin (ALB does not rewrite CORS); remove per-endpoint CORS logic elsewhere. | 22/06/2026 | 22/06/2026 | - |
| 5 | Add 10 integration tests using `httpx.AsyncClient` with S3 mocked via `moto`. | 23/06/2026 | 24/06/2026 | [moto](https://github.com/getmoto/moto) |
| 6 | Write tests for the presigned POST endpoint (validate policy, expiry). | 25/06/2026 | 26/06/2026 | - |
| 7 | Point FE `VITE_API_URL` at `https://api.upscaler.vuongtech.dev`. | 27/06/2026 | 27/06/2026 | - |

### Week 8 Achievements

ALB now handles TLS and Cognito authentication before traffic hits FastAPI, so BE is back to being just the real logic. CI runs all 24 tests in around 48 seconds.

### Challenges & Lessons

SSE over the ALB kept dying at exactly 60 seconds because the default target-group idle timeout is that low — and an AI request routinely takes longer. Fix: raise the ALB idle timeout to 300s AND send a `:heartbeat` comment every 15s with `keep-alive` so proxies don't reap the connection. ALB is a lot more flexible than a managed gateway (no 10MB cap, no forced 30s idle), but you own the tuning knobs.

### Next Week Plan

Load test going through the ALB. Tile-based inference to keep large images out of OOM. Build a CloudWatch dashboard combining ALB metrics with GPU custom metrics.
