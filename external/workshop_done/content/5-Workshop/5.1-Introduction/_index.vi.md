---
title: "5.1 - Giới thiệu"
date: 2026-07-18
weight: 11
chapter: false
pre: "<b>5.1. </b>"
---

## Tổng quan

Phần này giới thiệu **Upscale AI** — nền tảng nâng cấp ảnh AI được triển khai trên AWS. Bạn sẽ hiểu kiến trúc hệ thống, luồng dữ liệu và cách mỗi thành phần tương tác.

---

## Upscale AI là gì?

Upscale AI là ứng dụng web sử dụng mô hình học sâu **Real-ESRGAN** để nâng cấp ảnh từ độ phân giải thấp lên cao. Người dùng tải ảnh lên qua giao diện web, xử lý AI diễn ra bất đồng bộ trên hạ tầng AWS.

### Khả năng cốt lõi

- **Nâng cấp ảnh AI**: Mô hình Real-ESRGAN tăng độ phân giải ảnh 4x
- **Xử lý tác vụ bất đồng bộ**: Hàng đợi SQS xử lý khối lượng công việc AI nặng mà không chặn
- **Tiến trình thời gian thực**: SSE (Server-Sent Events) truyền trạng thái xử lý đến trình duyệt
- **Xác thực người dùng**: Amazon Cognito với Google OAuth 2.0
- **Lưu trữ an toàn**: S3 cho ảnh, EFS cho trọng số mô hình AI và dữ liệu database

---

## Luồng dữ liệu hệ thống

Khi người dùng tải ảnh lên, các bước sau xảy ra:

```
Browser → CloudFront → ALB → ECS API (FastAPI)
                                │
                                ├─ 1. Xác thực qua Cognito JWT
                                ├─ 2. Tải ảnh gốc lên S3
                                ├─ 3. Đưa job vào hàng đợi SQS
                                ├─ 4. Trả job ID về client
                                │
                                └─ SSE connection cho cập nhật tiến trình
                                        │
ECS Worker (cùng container API) ←────── 5. Lấy job từ SQS
        │
        ├─ 6. Tải ảnh từ S3
        ├─ 7. Tải trọng số Real-ESRGAN từ EFS
        ├─ 8. Chạy suy luận AI (GPU/CPU)
        ├─ 9. Tải ảnh đã nâng cấp lên S3
        ├─ 10. Cập nhật tiến trình trong Redis
        └─ 11. SSE đẩy trạng thái đến trình duyệt
```
![Sơ đồ kiến trúc](/images/5-Workshop/sodo.jpg)
---

## Vai trò thành phần

| Lớp | Thành phần | Chức năng |
|-----|-----------|----------|
| **Biên** | CloudFront | CDN, đệm file tĩnh, định tuyến `/api/*` đến ALB |
| **Biên** | WAF | Lọc yêu cầu độc hại (SQL injection, XSS, rate limiting) |
| **Biên** | ACM | Chứng chỉ SSL/TLS cho HTTPS |
| **Lưu lượng** | ALB | Phân phối lưu lượng HTTP/HTTPS, health checks, SSL termination |
| **Compute** | ECS API Task | Backend FastAPI, xử lý request, đưa tác vụ AI vào hàng đợi |
| **Compute** | ECS Postgres Task | PostgreSQL database, lưu metadata và dữ liệu người dùng |
| **Hàng đợi** | SQS | Hàng đợi tác vụ bất đồng bộ, tách API khỏi xử lý AI |
| **Đệm** | Redis | Theo dõi tiến trình tác vụ, đệm truy vấn thường xuyên |
| **Lưu trữ** | S3 (Static) | File SPA frontend (HTML, JS, CSS) |
| **Lưu trữ** | S3 (Images) | Ảnh tải lên + kết quả đã nâng cấp |
| **Lưu trữ** | EFS | Trọng số mô hình AI (~100MB) + dữ liệu PostgreSQL |
| **Xác thực** | Cognito | Đăng ký, đăng nhập, cấp JWT token |
| **Bí mật** | Secrets Manager | Thông tin database, API keys, Redis URL |
| **Mạng** | VPC | Mạng cô lập: 2 public + 2 private subnets |
| **Mạng** | NAT Gateway | Truy cập internet cho tasks trong private subnet |
| **Giám sát** | CloudWatch | Logs, chỉ số, alarms, dashboard vận hành |

---

## Tại sao dùng ECS on EC2 (không phải Fargate)?

| Yếu tố | Fargate | EC2 |
|--------|---------|-----|
| Hỗ trợ GPU | Không | Có (g4dn.xlarge) |
| Mount EFS | Có | Có |
| Chi phí (tải thường xuyên) | Cao hơn | Thấp hơn |
| Tải trước mô hình | Cold start mỗi lần | Trọng số lưu trên đĩa |
| Kiểm soát instance | Không | Đầy đủ (SSM, giám sát) |

Suy luận Real-ESRGAN được lợi từ tăng tốc GPU. Workshop này dùng `t3.large` (CPU) cho testing, production nên dùng `g4dn.xlarge` với NVIDIA T4 GPU.

---

## Các dịch vụ AWS sử dụng (21 dịch vụ)

| Danh mục | Dịch vụ |
|----------|--------|
| Mạng | VPC, Subnets, IGW, NAT Gateway, Route Tables, Security Groups |
| Compute | ECS, EC2, Auto Scaling Group, Launch Template |
| Lưu trữ | S3, EFS, ECR |
| Database | PostgreSQL (trên ECS) |
| Hàng đợi & Đệm | SQS, ElastiCache Redis |
| Xác thực & Bí mật | Cognito, Secrets Manager |
| Lưu lượng & CDN | ALB, CloudFront, WAF, ACM |
| Giám sát | CloudWatch (Logs, Alarms, Dashboard) |
| IAM | IAM Roles, Instance Profiles |
| CI/CD | CodePipeline, CodeBuild |

---

## Lộ trình Workshop

Workshop theo phương pháp triển khai **từ dưới lên, theo lớp**:

1. **Nền tảng** (Bước 3): Xây dựng mạng — VPC, subnets, security groups, IAM roles
2. **Dữ liệu** (Bước 4): Thiết lập lưu trữ — S3, EFS, ECR, Secrets Manager
3. **Compute** (Bước 5): Triển khai ứng dụng — Redis, SQS, ECS tasks và services
4. **Lưu lượng** (Bước 6): Định tuyến lưu lượng — ALB, target groups, health checks
5. **Biên** (Bước 7): Phân phối toàn cầu — CloudFront, WAF, SSL
6. **Trực quan** (Bước 8): Giám sát toàn bộ — CloudWatch logs, alarms, dashboard
7. **Go-Live** (Bước 9): Deploy frontend và xác minh toàn bộ
