---
title: "Workshop: Triển khai Upscale AI trên AWS"
date: 2026-07-18
weight: 5
chapter: false
pre: "<b>5. </b>"
---

# Workshop: Triển khai Upscale AI trên AWS

Hướng dẫn thực hành triển khai **Upscale AI** — nền tảng nâng cấp ảnh bằng AI — trên AWS sử dụng **AWS Management Console**.

### Bạn sẽ xây dựng gì

Ứng dụng production-grade sử dụng mô hình học sâu Real-ESRGAN để nâng cấp ảnh, triển khai trên AWS với điều phối container, compute tăng tốc GPU, và kiến trúc bảo mật nhiều lớp.

### Các lớp kiến trúc

![Sơ đồ kiến trúc](/images/5-Workshop/sodo.jpg)

### Các bước Workshop

| Bước | Giai đoạn | Nội dung |
|------|-----------|---------|
| [5.1 - Giới thiệu](5.1-introduction/) | Tổng quan | Thiết kế hệ thống, luồng dữ liệu, vai trò từng thành phần |
| [5.2 - Yêu cầu](5.2-prerequisites/) | Thiết lập | Tài khoản AWS, IAM user, chọn vùng |
| [5.3 - Hạ tầng](5.3-infrastructure/) | Nền tảng | VPC, subnets, IGW, NAT, route tables, security groups, IAM roles — toàn bộ mạng và quyền hạn |
| [5.4 - Lưu trữ](5.4-storage/) | Lớp dữ liệu | S3 buckets, EFS filesystem + access points, ECR repository, Secrets Manager |
| [5.5 - Ứng dụng](5.5-application/) | Lớp compute | Redis, hàng đợi SQS, ECS task definitions, ECS services, auto scaling |
| [5.6 - Truy cập](5.6-access/) | Lớp lưu lượng | ALB, target groups, health checks, chuyển hướng HTTP→HTTPS, listeners |
| [5.7 - Phân phối](5.7-delivery/) | Lớp biên | CloudFront distribution, quy tắc WAF, chứng chỉ SSL ACM |
| [5.8 - Giám sát](5.8-observability/) | Theo dõi | CloudWatch log groups, alarms, dashboard |
| [5.9 - Triển khai](5.9-deployment/) | Go-Live | Build frontend, upload lên S3, invalidation CloudFront, xác minh toàn bộ |
| [5.10 - Dọn dẹp](5.10-cleanup/) | Tháo dỡ | Xóa tất cả tài nguyên theo đúng thứ tự |

### Tổng chi phí

| Tài nguyên | Chi phí hàng tháng |
|-----------|-------------------|
| EC2 (t3.large, 24/7) | ~$120 |
| NAT Gateway | ~$45 |
| ALB + Target Groups | ~$25 |
| ElastiCache Redis | ~$15 |
| CloudFront + WAF | ~$14 |
| EFS + S3 + ECR | ~$5 |
| SQS + Secrets Manager | ~$3 |
| CloudWatch + CodePipeline | ~$6 |
| **Tổng cộng** | **~$233/tháng** |

> Sử dụng **Spot Instances** để giảm chi phí EC2 60-70% (~$90/tháng tiết kiệm).

### Vùng triển khai

Tất cả tài nguyên → **ap-southeast-1 (Singapore)** trừ khi có yêu cầu khác.
