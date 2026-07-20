---
title: "5.7 - Delivery"
date: 2026-07-18
weight: 17
chapter: false
pre: "<b>5.7. </b>"
---

## Overview

Set up CDN, WAF security, and HTTPS certificates to deliver content globally with low latency.

---

## Part A: ACM Certificate

### Step 1: Request Certificate

1. **ACM Console** → **"Request a certificate"**
2. Domain: `vankhiem0504.asia`
3. Validation: DNS (add CNAME record to Route 53)
4. Issue → wait for Issued (~10 min)

![5.7.1](/images/5-Workshop/5.7.1.png)![5.7.2](/images/5-Workshop/5.7.2.png)

---

## Part B: CloudFront Distribution

### Step 2: Create Distribution

**CloudFront Console** → Create:
- Origin: ALB DNS (from step 5.6)
- Protocol: HTTPS only
- Name: `upscale-vankhiem-vn`
- Price class: Use all edge locations
- WAF: `upscale-waf` (create in Part C first)
- Custom domain: `vankhiem0504.asia`, ACM cert
- Default root: `/`
- Default behavior:
  - Viewer protocol: Redirect HTTP to HTTPS
  - Allowed methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
  - Cache policy: `upscale-static-policy` (create below)
  - Origin request: `upscale-origin-request`
- Create → wait for Deployed (~10-15 min)

![5.7.3](/images/5-Workshop/5.7.3.png)![5.7.4](/images/5-Workshop/5.7.4.png)![5.7.5](/images/5-Workshop/5.7.5.png)![5.7.6](/images/5-Workshop/5.7.6.png)![5.7.7](/images/5-Workshop/5.7.7.png)![5.7.8](/images/5-Workshop/5.7.8.png)

### Step 3: Cache Policy

Policies tab → Create:
- Name: `upscale-static-policy`
- Managed: `CachingOptimized`

![5.7.9](/images/5-Workshop/5.7.9.png)![5.7.10](/images/5-Workshop/5.7.10.png)

---

## Part C: S3 Origin (for static assets)

### Step 4: Add S3 Origin

Origins tab → Create:
- Origin: `upscale-static-YOUR_ACCOUNT_ID.s3.amazonaws.com`
- Origin access control: OAC (recommended)
- Name: `upscale-s3-static`
- Create

**Bucket policy** (from CloudFront → bucket policy → apply):
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowCloudFrontServicePrincipal",
    "Effect": "Allow",
    "Principal": {"Service": "cloudfront.amazonaws.com"},
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::upscale-static-YOUR_ACCOUNT_ID/*"
  }]
}
```

### Step 5: Behavior for S3

Behaviors tab → Create:
- Path: `/assets/*`
- Origin: `upscale-s3-static`
- Viewer: Redirect HTTP to HTTPS
- Cache: `upscale-static-policy`

![5.7.11](/images/5-Workshop/5.7.11.png)![5.7.12](/images/5-Workshop/5.7.12.png)![5.7.13](/images/5-Workshop/5.7.13.png)

---

## Part D: AWS WAF

### Step 6: WAF Web ACL

**WAF Console** → Create web ACL:
- Name: `upscale-waf`
- Scope: CloudFront distributions
- Default action: Allow

Add rules:
| Rule | Type |
|------|------|
| `upscale-rate-limit` | Rate-based, 1000 req/5min |
| `upscale-aws-managed` | AWS Managed - Common Rule Set |
| `upscale-ip-reputation` | AWS Managed - IP Reputation List |
| `upscale-sql-injection` | AWS Managed - SQL Database Rule Set |

Associate with `upscale-vankhiem-vn`.

---

## Summary

| Resource | Config |
|----------|--------|
| ACM | vankhiem0504.asia (DNS validated) |
| CloudFront | vankhiem0504.asia, HTTPS only, custom headers |
| WAF | 4 rules: rate limit, common, IP rep, SQL injection |
| Origin 1 | ALB (API traffic) |
| Origin 2 | S3 (static assets) |

> **Next**: [5.8 - Observability](../5.8-observability/)
