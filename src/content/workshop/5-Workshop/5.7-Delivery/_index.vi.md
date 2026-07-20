---
title: "5.7 - Phân phối"
date: 2026-07-18
weight: 17
chapter: false
pre: "<b>5.7. </b>"
---

## Tổng quan

Thiết lập CDN, WAF bảo mật và chứng chỉ HTTPS để phân phối nội dung toàn cầu với độ trễ thấp.

---

## Phần A: ACM Certificate

### Bước 1: Yêu cầu Certificate

1. **ACM Console** → **"Request a certificate"**
2. Domain: `vankhiem0504.asia`
3. Validation: DNS (thêm bản ghi CNAME vào Route 53)
4. Cấp → đợi Issued (~10 phút)
![5.7.1](/images/5-Workshop/5.7.1.png)![5.7.2](/images/5-Workshop/5.7.2.png)
---

## Phần B: CloudFront Distribution

### Bước 2: Tạo Distribution

**CloudFront Console** → Create:
- Origin: ALB DNS (từ bước 5.6)
- Protocol: HTTPS only
- Tên: `upscale-vankhiem-vn`
- Price class: Use all edge locations
- WAF: `upscale-waf` (tạo ở Phần C trước)
- Custom domain: `vankhiem0504.asia`, ACM cert
- Default root: `/`
- Default behavior:
  - Viewer protocol: Redirect HTTP to HTTPS
  - Allowed methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
  - Cache policy: `upscale-static-policy` (tạo bên dưới)
  - Origin request: `upscale-origin-request`
- Tạo → đợi Deployed (~10-15 phút)
![5.7.3](/images/5-Workshop/5.7.3.png)![5.7.4](/images/5-Workshop/5.7.4.png)![5.7.5](/images/5-Workshop/5.7.5.png)![5.7.6](/images/5-Workshop/5.7.6.png)![5.7.7](/images/5-Workshop/5.7.7.png)![5.7.8](/images/5-Workshop/5.7.8.png)
### Bước 3: Cache Policy

Tab Policies → Create:
- Tên: `upscale-static-policy`
- Managed: `CachingOptimized`
![5.7.9](/images/5-Workshop/5.7.9.png)![5.7.10](/images/5-Workshop/5.7.10.png)
---

## Phần C: S3 Origin (cho static assets)

### Bước 4: Thêm S3 Origin

Tab Origins → Create:
- Origin: `upscale-static-YOUR_ACCOUNT_ID.s3.amazonaws.com`
- Origin access control: OAC (khuyến nghị)
- Tên: `upscale-s3-static`
- Tạo

**Bucket policy** (từ CloudFront → bucket policy → áp dụng):
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

### Bước 5: Behavior cho S3

Tab Behaviors → Create:
- Path: `/assets/*`
- Origin: `upscale-s3-static`
- Viewer: Redirect HTTP to HTTPS
- Cache: `upscale-static-policy`
![5.7.11](/images/5-Workshop/5.7.11.png)![5.7.12](/images/5-Workshop/5.7.12.png)![5.7.13](/images/5-Workshop/5.7.13.png)

---

## Phần D: AWS WAF

### Bước 6: WAF Web ACL

**WAF Console** → Create web ACL:
- Tên: `upscale-waf`
- Scope: CloudFront distributions
- Default action: Allow

Thêm các quy tắc (rules):
| Quy tắc (Rule) | Loại (Type) |
|------|------|
| `upscale-rate-limit` | Rate-based, 1000 req/5min |
| `upscale-aws-managed` | AWS Managed - Common Rule Set |
| `upscale-ip-reputation` | AWS Managed - IP Reputation List |
| `upscale-sql-injection` | AWS Managed - SQL Database Rule Set |

Liên kết với `upscale-vankhiem-vn`.

---

## Tóm tắt

| Tài nguyên | Cấu hình |
|-----------|---------|
| ACM | vankhiem0504.asia (DNS validated) |
| CloudFront | vankhiem0504.asia, HTTPS only, custom headers |
| WAF | 4 rules: rate limit, common, IP rep, SQL injection |
| Origin 1 | ALB (API traffic) |
| Origin 2 | S3 (static assets) |

> **Tiếp theo**: [5.8 - Quan sát](../5.8-observability/)
