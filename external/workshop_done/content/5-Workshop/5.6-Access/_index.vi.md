---
title: "5.6 - Truy cập"
date: 2026-07-18
weight: 16
chapter: false
pre: "<b>5.6. </b>"
---

## Tổng quan

Cấu hình định tuyến lưu lượng: ALB để phân phối request, target groups cho health checks, và chuyển hướng HTTP→HTTPS.

---

## Bước 1: Tạo ALB

**EC2 Console** → Load Balancers → Create → Application Load Balancer:
- Tên: `upscale-alb`
- Scheme: Internet-facing, IP: IPv4
- VPC: `upscale-vpc`
- Mappings: `upscale-pub-1a` + `upscale-pub-1b`
- SG: `upscale-alb-sg`
- Listener: HTTP:80 → (tạo target group tiếp theo)
- Tạo → đợi Active
![5.6.1](/images/5-Workshop/5.6.1.png)![5.6.2](/images/5-Workshop/5.6.2.png)![5.6.3](/images/5-Workshop/5.6.3.png)![5.6.4](/images/5-Workshop/5.6.4.png)
---

## Bước 2: Tạo Target Group

EC2 Console → Target Groups → Create:
- Type: Instance
- Tên: `upscale-api-tg`
- Protocol: HTTP, Port: 8000
- VPC: `upscale-vpc`
- Health check: HTTP, path `/health/ready`, interval 30s, timeout 10s, healthy 2, unhealthy 3
- Tạo
![5.6.5](/images/5-Workshop/5.6.5.png)![5.6.6](/images/5-Workshop/5.6.6.png)![5.6.7](/images/5-Workshop/5.6.7.png)
**Attributes** → Edit:
- Stickiness: Enabled, LB cookie, 86400s
- Deregistration delay: 30s
---

## Bước 3: HTTP Listener → chuyển hướng HTTPS

Load Balancers → `upscale-alb` → tab Listeners → Port 80 → Edit rules:
- Default action: **Redirect to URL**
  - Protocol: HTTPS, Port: 443, Status: HTTP_301
- Lưu
![5.6.8](/images/5-Workshop/5.6.8.png)
---

## Bước 4: HTTPS Listener

Thêm listener:
- Protocol: HTTPS, Port: 443
- Default action: Forward to `upscale-api-tg`
- SSL certificate: ACM cert (ap-southeast-1)
- Thêm
![5.6.9](/images/5-Workshop/5.6.9.png)![5.6.10](/images/5-Workshop/5.6.10.png)
> Nếu chưa có ACM cert, tạo HTTP:443 tạm thời, cập nhật sang HTTPS sau.

---

## Tóm tắt

| Tài nguyên | Cấu hình |
|-----------|---------|
| ALB | Internet-facing, 2 AZs, DNS: upscale-alb-XXX.ap-southeast-1.elb.amazonaws.com |
| Target Group | upscale-api-tg, HTTP:8000, health=/health/ready, stickiness=24h |
| HTTP Listener | Port 80 → redirect HTTPS:443 (301) |
| HTTPS Listener | Port 443 → forward upscale-api-tg |

> **Lưu ý**: ALB DNS name — cần cho CloudFront ở bước tiếp theo.

> **Tiếp theo**: [5.7 - Phân phối](../5.7-delivery/)
