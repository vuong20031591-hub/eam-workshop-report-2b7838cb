---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

Edge week. CloudFront goes in front of the ALB, WAF sits on top for the noisy stuff, Route 53 finally gives the app a real domain.

I broke the work into `UPS-13` (CloudFront and Route 53) and `UPS-14` (WAF). The design meeting on cache behaviour was the most important part. The static frontend gets cached aggressively, `/api/*` does not get cached at all, and the `Authorization` header is forwarded so authenticated requests still work. Sounds obvious written down, but if you skip that meeting somebody caches the login response for 24 hours and nobody knows why nothing works.

On the WAF PR I cut a rule that was doing the same thing as the managed common rule group. On the Route 53 PR I checked that the apex uses an alias to the CloudFront distribution rather than an A record to an IP that will change.

Hands-on I wrote the cache behaviour spec, picked the managed WAF rules (Common, Known Bad Inputs, and a rate limit of 2000 requests per 5 minutes per IP), and drafted the DNS cut-over plan.

By end of week the domain resolves, HTTPS terminates at CloudFront, the ALB sits behind the edge, and WAF is blocking the obvious junk from day one.

One embarrassing moment: CloudFront cached an early error response from the frontend and served it for a while. Added a short TTL for 4xx and 5xx to the spec so this does not happen in prod.

Next week is still chapter 5.9. Cognito for sign-in, and make the CloudWatch dashboard actually useful instead of a wall of graphs.
