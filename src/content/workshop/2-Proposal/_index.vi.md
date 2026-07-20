---
title: "Bản đề xuất"
date: 2026-07-18
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# Upscale AI — Triển khai nền tảng nâng cấp ảnh AI lên AWS Cloud
## Giải pháp AWS Container-Based cho nâng cấp ảnh bằng AI

---

### 1. Tóm tắt điều hành

**Upscale AI** là ứng dụng web sử dụng mô hình học sâu (Real-ESRGAN) để nâng cấp ảnh từ độ phân giải thấp lên độ phân giải cao. Người dùng tải ảnh lên qua giao diện web, và quá trình xử lý AI diễn ra bất đồng bộ trên hạ tầng AWS với theo dõi tiến trình thời gian thực.

Dự án này triển khai toàn bộ hệ thống lên **AWS Cloud** sử dụng **kiến trúc container-based** trên ECS với EC2 launch type — cung cấp hỗ trợ GPU cho suy luận mô hình AI, lưu trữ liên tục cho trọng số mô hình, và tự động mở rộng quy mô theo nhu cầu.

---

### 2. Tổng quan kỹ thuật

#### Triết lý kiến trúc

Không giống các triển khai serverless điển hình, Upscale AI yêu cầu **tính toán GPU liên tục** cho suy luận mô hình AI. Ràng buộc này dẫn đến toàn bộ kiến trúc hướng về ECS trên EC2 với các nhóm tự động mở rộng.

#### Các quyết định thiết kế chính

| Quyết định | Lựa chọn | Lý do |
|-----------|---------|-------|
| Compute | ECS trên EC2 (không phải Lambda) | Cần GPU cho Real-ESRGAN; tác vụ dài vượt quá Lambda timeout |
| Database | PostgreSQL trên ECS (không phải RDS) | Tối ưu chi phí; EFS cung cấp lưu trữ liên tục |
| Caching | Redis trên ElastiCache | Theo dõi tiến trình thời gian thực qua SSE |
| Job Queue | SQS với DLQ | Xử lý bất đồng bộ; chịu lỗi |
| Storage | EFS cho trọng số mô hình | Chia sẻ giữa các lần khởi động container; liên tục |
| CDN | CloudFront + S3 | File tĩnh frontend; phân phối toàn cầu |
| Security | WAF + Private subnets | Phòng thủ nhiều lớp; quyền tối thiểu |

---

### 3. Kiến trúc dịch vụ

![Sơ đồ kiến trúc](/images/2-Proposal/sodo.jpg)

#### Lớp Frontend
| Dịch vụ | Mục đích |
|---------|---------|
| Amazon S3 | Hosting React app tĩnh |
| Amazon CloudFront | CDN toàn cầu với đệm biên |
| AWS ACM | Chứng chỉ SSL/TLS |
| AWS WAF | Tường lửa ứng dụng web |

#### Lớp Ứng dụng
| Dịch vụ | Mục đích |
|---------|---------|
| AWS ECS trên EC2 | Điều phối container với hỗ trợ GPU |
| Application Load Balancer | Phân phối lưu lượng HTTP/HTTPS |
| Amazon ECR | Registry Docker images |
| Auto Scaling Group | Mở rộng instances động |

#### Lớp Dữ liệu
| Dịch vụ | Mục đích |
|---------|---------|
| Amazon S3 | Ảnh tải lên + ảnh đã xử lý |
| Amazon EFS | Trọng số mô hình + dữ liệu PostgreSQL |
| PostgreSQL (trên ECS) | Lưu trữ metadata |
| Amazon ElastiCache Redis | Theo dõi tiến trình + đệm |
| Amazon SQS | Hàng đợi tác vụ với DLQ |

#### Lớp Bảo mật
| Dịch vụ | Mục đích |
|---------|---------|
| Amazon VPC | Cô lập mạng |
| AWS IAM | Kiểm soát truy cập dựa trên vai trò |
| AWS Secrets Manager | Lưu trữ thông tin xác thực |
| Amazon Cognito | Xác thực người dùng |

#### Lớp Quan sát
| Dịch vụ | Mục đích |
|---------|---------|
| Amazon CloudWatch | Logs, chỉ số, alarms |
| AWS CodePipeline | Tự động hóa CI/CD |

---

### 4. Phân tích chi phí

#### Phân tích chi phí hàng tháng (Môi trường Test)

| Danh mục | Dịch vụ | Chi phí |
|---------|---------|--------|
| Compute | EC2 (t3.large) | $120.00 |
| Mạng | NAT Gateway, ALB | $70.00 |
| Lưu trữ | EFS, S3, ECR | $4.60 |
| Database | ElastiCache Redis | $15.00 |
| Bảo mật | WAF, Secrets Manager | $11.80 |
| Giám sát | CloudWatch | $5.00 |
| CI/CD | CodePipeline, CodeBuild | $1.12 |
| Khác | Cognito, IAM, VPC, ACM | $0.00 |
| **Tổng** | | **~$227.52/tháng** |

---

### 5. Kiến trúc bảo mật

#### Bảo mật mạng
- **Cô lập VPC**: Private subnets cho tất cả tài nguyên compute
- **Security Groups**: Quy tắc inbound quyền tối thiểu
- **NAT Gateway**: Truy cập internet kiểm soát outbound
- **Quy tắc WAF**: Giới hạn tốc độ, SQL injection, lọc danh tiếng IP

#### Bảo mật dữ liệu
- **Mã hóa khi nghỉ**: EFS, S3, RDS (tương lai)
- **Mã hóa khi truyền**: TLS 1.2+ ở mọi nơi
- **Quản lý bí mật**: Không hardcode thông tin xác thực
- **IAM Roles**: Quyền theo task cụ thể

#### Bảo mật ứng dụng
- **Cognito**: Xác thực dựa trên JWT
- **CORS**: Xác thực nguồn chặt chẽ
- **Validate đầu vào**: Validate phía server

---

### 6. Chiến lược triển khai

#### Giai đoạn 1: Nền tảng
VPC, subnets, security groups, IAM roles

#### Giai đoạn 2: Lớp Dữ liệu
S3 buckets, EFS, ECR, Secrets Manager

#### Giai đoạn 3: Ứng dụng
ECS cluster, task definitions, services

#### Giai đoạn 4: Truy cập
ALB, target groups, listeners

#### Giai đoạn 5: Phân phối
CloudFront, WAF, ACM

#### Giai đoạn 6: Quan sát
CloudWatch logs, alarms, dashboard

#### Giai đoạn 7: Triển khai
Build frontend, upload S3, invalidate CloudFront

---

### 7. Video Demo

- **Link video demo:** [Google Drive](https://drive.google.com/file/d/1lNZM2O4d3lM-bIPDWL6f4gZKBLKFYOcY/view?usp=sharing)

