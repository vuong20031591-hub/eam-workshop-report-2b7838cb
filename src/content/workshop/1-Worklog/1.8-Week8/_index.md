---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

### Focus

Put an Application Load Balancer in front of the API and make the routing explicit.

### What I did

- Split `UPS-12` into: ALB provisioning, target group for FastAPI, listener rules, TLS certificate via ACM.
- Chaired a short design on path routing: `/api/*` to FastAPI, `/health` for the balancer itself, everything else 404.
- Reviewed the ALB PR, asked for stickiness off (jobs are async) and idle timeout raised to 120s for long polling.
- Reviewed the target group config, tightened the health check to `/health` with a 2/2 threshold.
- Hands-on: chose the health-check spec, requested the ACM certificate, wrote the DNS plan for next week, and updated the deploy checklist.

### Result

FastAPI reachable through the ALB over HTTPS. Health checks stable, no flapping targets.

### Friction

ACM validation stuck for half a day because the DNS record was in the wrong hosted zone. Documented the exact validation flow in the runbook.

### Next week

Chapter 5.9. CloudFront in front of the ALB, WAF on top, and Route 53 pointing at the whole thing.
