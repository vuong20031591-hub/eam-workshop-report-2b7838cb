---
title: "5.6 - Access"
date: 2026-07-18
weight: 16
chapter: false
pre: "<b>5.6. </b>"
---

## Overview

Configure traffic routing: ALB to distribute requests, target groups for health checks, and HTTP→HTTPS redirect.

---

## Step 1: Create ALB

**EC2 Console** → Load Balancers → Create → Application Load Balancer:
- Name: `upscale-alb`
- Scheme: Internet-facing, IP: IPv4
- VPC: `upscale-vpc`
- Mappings: `upscale-pub-1a` + `upscale-pub-1b`
- SG: `upscale-alb-sg`
- Listener: HTTP:80 → (create target group next)
- Create → wait for Active

![5.6.1](/images/5-Workshop/5.6.1.png)![5.6.2](/images/5-Workshop/5.6.2.png)![5.6.3](/images/5-Workshop/5.6.3.png)![5.6.4](/images/5-Workshop/5.6.4.png)

---

## Step 2: Create Target Group

EC2 Console → Target Groups → Create:
- Type: Instance
- Name: `upscale-api-tg`
- Protocol: HTTP, Port: 8000
- VPC: `upscale-vpc`
- Health check: HTTP, path `/health/ready`, interval 30s, timeout 10s, healthy 2, unhealthy 3
- Create

![5.6.5](/images/5-Workshop/5.6.5.png)![5.6.6](/images/5-Workshop/5.6.6.png)![5.6.7](/images/5-Workshop/5.6.7.png)

**Attributes** → Edit:
- Stickiness: Enabled, LB cookie, 86400s
- Deregistration delay: 30s

---

## Step 3: HTTP Listener → HTTPS Redirect

Load Balancers → `upscale-alb` → Listeners tab → Port 80 → Edit rules:
- Default action: **Redirect to URL**
  - Protocol: HTTPS, Port: 443, Status: HTTP_301
- Save

![5.6.8](/images/5-Workshop/5.6.8.png)

---

## Step 4: HTTPS Listener

Add listener:
- Protocol: HTTPS, Port: 443
- Default action: Forward to `upscale-api-tg`
- SSL certificate: your ACM cert (ap-southeast-1)
- Add

![5.6.9](/images/5-Workshop/5.6.9.png)![5.6.10](/images/5-Workshop/5.6.10.png)

> If no ACM cert yet, create HTTP:443 temporarily, update to HTTPS later.

---

## Summary

| Resource | Config |
|----------|--------|
| ALB | Internet-facing, 2 AZs, DNS: upscale-alb-XXX.ap-southeast-1.elb.amazonaws.com |
| Target Group | upscale-api-tg, HTTP:8000, health=/health/ready, stickiness=24h |
| HTTP Listener | Port 80 → redirect HTTPS:443 (301) |
| HTTPS Listener | Port 443 → forward to upscale-api-tg |

> **Save**: ALB DNS name — needed for CloudFront in next step.

> **Next**: [5.7 - Delivery](../5.7-delivery/)
