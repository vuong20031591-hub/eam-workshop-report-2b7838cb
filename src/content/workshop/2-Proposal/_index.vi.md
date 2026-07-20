---
title: "Bản đề xuất"
date: 2026-07-18
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# Upscale AI: Triển khai nền tảng nâng cấp ảnh AI lên AWS Cloud
## Giải pháp AWS Container-Based cho nâng cấp ảnh bằng AI

---

### 1. Tóm tắt điều hành

Upscale AI là ứng dụng web dùng Real-ESRGAN để tăng độ phân giải ảnh. Người dùng upload ảnh qua giao diện web, quá trình inference chạy bất đồng bộ trên AWS và tiến trình được báo về theo thời gian thực.

Toàn bộ hệ thống được deploy lên AWS theo kiến trúc container-based, chạy trên ECS với EC2 launch type. EC2 cho phép dùng instance có GPU cho inference, còn EFS giữ lại trọng số mô hình qua các lần restart container. Auto-scaling xử lý phần lưu lượng tăng đột biến.

---

### 2. Tổng quan kỹ thuật

#### Triết lý kiến trúc

Inference Real-ESRGAN cần GPU chạy liên tục, nên Lambda và phần lớn lựa chọn serverless bị loại. Chính ràng buộc đó là lý do lớp compute là ECS trên EC2 kèm auto-scaling group.

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
| Amazon Route 53 | Phân giải DNS + xác thực ACM |
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
| Amazon Cognito | Xác thực người dùng (dự kiến, chưa có trong workshop) |

#### Lớp Quan sát
| Dịch vụ | Mục đích |
|---------|---------|
| Amazon CloudWatch | Logs, chỉ số, alarms |
| AWS CodePipeline | Tự động hóa CI/CD (dự kiến, chưa có trong workshop) |

---

### 4. Phân tích chi phí

#### Phân tích chi phí hàng tháng (Môi trường Test)

| Danh mục | Dịch vụ | Chi phí |
|---------|---------|--------|
| Compute | EC2 (t3.large, 24/7) | $120.00 |
| Mạng | NAT Gateway, ALB | $70.00 |
| Lưu trữ | EFS, S3, ECR | $4.60 |
| Database | ElastiCache Redis | $15.00 |
| Bảo mật | WAF, Secrets Manager | $11.80 |
| Giám sát | CloudWatch | $5.00 |
| CI/CD | CodePipeline, CodeBuild | $1.12 |
| Khác | Cognito, IAM, VPC, ACM | $0.00 |
| **Tổng** | | **~$227.52/tháng** |

> Lưu ý: workshop dùng `t3.large` (CPU) làm baseline cho test. Production nếu cần GPU inference, chuyển sang `g4dn.xlarge` (NVIDIA T4, khoảng $379/tháng on-demand) và bật Spot Instances để giảm khoảng 60% đến 70% chi phí EC2.

---

### 5. Kiến trúc bảo mật

#### Bảo mật mạng
Toàn bộ tài nguyên compute nằm trong private subnets thuộc một VPC riêng. Security group chỉ mở đúng inbound mà mỗi service cần, còn NAT Gateway phụ trách phần outbound nhỏ ra ngoài. WAF gắn trên CloudFront xử lý rate limit, chữ ký SQL injection và lọc IP theo reputation.

#### Bảo mật dữ liệu
Dữ liệu được mã hóa at-rest trên EFS, S3 và volume PostgreSQL-on-ECS; traffic giữa các service bắt buộc TLS 1.2+. Credential được lưu trong Secrets Manager thay vì hardcode trong code hay task definition. IAM role gán theo từng ECS task để một container bị chiếm không với tới được tài nguyên nó không dùng.

#### Bảo mật ứng dụng
Cognito phát hành JWT và API validate token này ở mọi request. CORS chỉ cho phép origin của CloudFront, và payload request được validate ở server-side trước khi đẩy vào queue.

---

### 6. Chiến lược triển khai

#### Giai đoạn 1: Chuẩn bị
Thiết lập tài khoản AWS, CLI, IAM admin user, budgets, cảnh báo chi phí

#### Giai đoạn 2: Nền tảng (Hạ tầng)
VPC, subnets, security groups, IAM roles

#### Giai đoạn 3: Lớp Dữ liệu (Lưu trữ)
S3 buckets, EFS, ECR, Secrets Manager

#### Giai đoạn 4: Ứng dụng
ECS cluster, task definitions, services

#### Giai đoạn 5: Truy cập
ALB, target groups, listeners

#### Giai đoạn 6: Phân phối
CloudFront, WAF, ACM

#### Giai đoạn 7: Quan sát
CloudWatch logs, alarms, dashboard

#### Giai đoạn 8: Triển khai
Build frontend, upload S3, invalidate CloudFront

#### Giai đoạn 9: Dọn dẹp
Xóa stack theo thứ tự ngược để tránh tài nguyên bỏ rơi và rò rỉ chi phí

---

### 7. Video Demo

- **Link video demo:** [Google Drive](https://drive.google.com/file/d/1lNZM2O4d3lM-bIPDWL6f4gZKBLKFYOcY/view?usp=sharing)

