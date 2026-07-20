---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

### Focus

Edge layer. CloudFront in front of the ALB, WAF for basic protection, Route 53 for a real domain.

### What I did

- Broke the work into `UPS-13` (CloudFront + Route 53) and `UPS-14` (WAF).
- Chaired a design on cache behaviour: cache the static frontend aggressively, do not cache `/api/*`, forward the `Authorization` header.
- Reviewed the WAF ruleset PR and cut a redundant rule that overlapped with the managed common rule group.
- Reviewed the Route 53 PR, made sure the apex uses an alias to the CloudFront distribution.
- Hands-on: wrote the cache-behaviour spec, chose the WAF managed rule set (Common + Known Bad Inputs + rate-limit 2000 req/5min per IP), and drafted the DNS cut-over plan.

### Result

Domain resolves, HTTPS terminates at CloudFront, WAF blocks the obvious noise on day one, ALB now sits behind the edge.

### Friction

CloudFront cached an early error response for the frontend. Added a short TTL for 4xx/5xx to the spec so this does not happen in prod.

### Next week

Chapter 5.9 continued. Cognito for sign-in, and get the CloudWatch dashboard useful.
