---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

ALB week. The goal was to put an Application Load Balancer in front of the API and make the routing rules explicit rather than "whatever the default is".

`UPS-12` split into ALB provisioning, the target group for FastAPI, listener rules, and the TLS cert via ACM. A short design meeting on path routing: `/api/*` goes to FastAPI, `/health` is for the balancer itself, and everything else returns 404 so we do not accidentally expose a route we did not think about.

On the ALB PR I asked for two changes. Stickiness off, because our jobs are async and there is nothing to stick to. Idle timeout raised to 120 seconds so long-polling clients do not get cut mid-wait. The target group config was mostly fine, I just tightened the health check to `/health` with a 2/2 threshold so a single blip does not flap a target out.

Hands-on I chose the health check spec, requested the ACM cert, wrote the DNS plan for next week, and updated the deploy checklist.

FastAPI is now reachable through the ALB over HTTPS. Health checks stable, no flapping.

The half-day I did not plan for was ACM validation. The DNS record went into the wrong hosted zone and the cert sat pending until I noticed. I wrote the exact validation flow into the runbook so the next person catches it in five minutes instead of five hours.

Next week is chapter 5.9. CloudFront in front of the ALB, WAF on top, Route 53 pointing at the whole thing.
