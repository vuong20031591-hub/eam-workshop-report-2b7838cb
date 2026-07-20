---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

### Week 8 Objectives

Put API Gateway HTTP API in front of EC2 FastAPI with a custom domain and ACM cert, so BE stops worrying about TLS and CORS. Turn on throttling and a usage plan (10 req/min/IP) at the gateway layer. And expand the test suite to 24 tests (property + integration).

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Create **API Gateway HTTP API** `upscaler-api`, `HTTP_PROXY` integration to the EC2 public DNS (dev). | 19/06/2026 | 19/06/2026 | [API Gateway HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) |
| 2 | Attach custom domain `api.upscaler.vuongtech.dev` + ACM cert in `ap-southeast-1`. | 20/06/2026 | 20/06/2026 | - |
| 3 | Enable stage-level **throttling** 10 rps / burst 20, log 4XX to CloudWatch. | 21/06/2026 | 21/06/2026 | - |
| 4 | Configure CORS on API Gateway (FastAPI no longer handles it). | 22/06/2026 | 22/06/2026 | - |
| 5 | Add 10 integration tests using `httpx.AsyncClient` with S3 mocked via `moto`. | 23/06/2026 | 24/06/2026 | [moto](https://github.com/getmoto/moto) |
| 6 | Write tests for the presigned POST endpoint (validate policy, expiry). | 25/06/2026 | 26/06/2026 | - |
| 7 | Point FE `VITE_API_URL` at `https://api.upscaler.vuongtech.dev`. | 27/06/2026 | 27/06/2026 | - |

### Week 8 Achievements

API Gateway now handles TLS, throttling, and CORS, so FastAPI is back to being just the real logic. CI runs all 24 tests in around 48 seconds.

### Challenges & Lessons

SSE over HTTP API kept dying at exactly 30 seconds because of the default idle timeout — and an AI request routinely takes longer than that. Fix: send a `:heartbeat` comment every 15s with `keep-alive` to hold the connection under the idle threshold. Managed gateways are cheap and convenient, but you have to know the limits (idle timeout, 10MB payload) before you commit to depending on one.

### Next Week Plan

Load test going through API Gateway instead of bypassing it. Tile-based inference to keep large images out of OOM. Build a CloudWatch dashboard.
