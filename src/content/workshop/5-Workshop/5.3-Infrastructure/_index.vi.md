---
title: "5.3 - Hạ tầng"
date: 2026-07-18
weight: 13
chapter: false
pre: "<b>5.3. </b>"
---

## Tổng quan

Xây dựng toàn bộ nền tảng mạng và lớp bảo mật trong 1 bước: VPC, subnets, cổng, route tables, security groups và IAM roles.

---

## Phần A: VPC & Mạng

### Bước 1: Tạo VPC

1. **VPC Console** → **"Create VPC"** → **"VPC settings"** → **"Create VPC"**
![5.3.1](/images/5-Workshop/5.3.1.png)![5.3.2](/images/5-Workshop/5.3.2.png)![5.3.3](/images/5-Workshop/5.3.3.png)![5.3.4](/images/5-Workshop/5.3.4.png)
2. Tên: `upscale-vpc`, CIDR: `10.0.0.0/16`
![5.3.5](/images/5-Workshop/5.3.5.png)
3. Bật **DNS hostnames** + **DNS resolution**
4. Tạo
![5.3.6](/images/5-Workshop/5.3.6.png)

### Bước 2: Tạo 4 Subnets

| Tên | CIDR | AZ | Công khai? |
|-----|------|----|-----------|
| upscale-pub-1a | 10.0.1.0/24 | ap-southeast-1a | Có |
| upscale-pub-1b | 10.0.2.0/24 | ap-southeast-1b | Có |
| upscale-priv-1a | 10.0.10.0/24 | ap-southeast-1a | Không |
| upscale-priv-1b | 10.0.11.0/24 | ap-southeast-1b | Không |
![5.3.7](/images/5-Workshop/5.3.7.png)

Bật **Auto-assign public IPv4** trên cả hai public subnets.

### Bước 3: Internet Gateway

Tạo `upscale-igw` → gắn vào `upscale-vpc`.
![5.3.8](/images/5-Workshop/5.3.8.png)
### Bước 4: NAT Gateway

1. **EC2 Console** → **Elastic IPs** → Phân bổ EIP → gắn tag `upscale-nat-eip`
![5.3.9](/images/5-Workshop/5.3.9.png)
2. **VPC Console** → **NAT Gateways** → Tạo:
   - Tên: `upscale-nat`
   - Subnet: `upscale-pub-1a`
   - Elastic IP: EIP vừa phân bổ
3. Đợi **Available** (~2-3 phút)
![5.3.10](/images/5-Workshop/5.3.10.png)

### Bước 5: Route Tables

**Public RT** (`upscale-pub-rt`):
- Route: `0.0.0.0/0` → Internet Gateway
- Liên kết: `upscale-pub-1a`, `upscale-pub-1b`
![5.3.11](/images/5-Workshop/5.3.11.png)

**Private RT** (`upscale-priv-rt`):
- Route: `0.0.0.0/0` → NAT Gateway
- Liên kết: `upscale-priv-1a`, `upscale-priv-1b`
![5.3.12](/images/5-Workshop/5.3.12.png)
---

## Phần B: Security Groups

Tạo 5 security groups trong **EC2 Console** → **Security Groups**:

| Tên | Inbound | Nguồn |
|-----|---------|--------|
| upscale-alb-sg | HTTP (80), HTTPS (443) | 0.0.0.0/0 |
| upscale-ecs-sg | TCP 8000 | Chỉ ALB SG |
| upscale-ecs-sg | All traffic | Self (ECS→ECS) |
| upscale-redis-sg | TCP 6379 | Chỉ ECS SG |
| upscale-pg-sg | TCP 5432 | Chỉ ECS SG |
| upscale-efs-sg | TCP 2049 (NFS) | Chỉ ECS SG |
![5.3.13](/images/5-Workshop/5.3.13.png)
---

## Phần C: IAM Roles

Tạo trong **IAM Console** → **Roles**:

### upscale-ecs-execution-role
![5.3.14](/images/5-Workshop/5.3.14.png)![5.3.15](/images/5-Workshop/5.3.15.png)
- **Trusted entity**: ECS Tasks
- **Managed policy**: `AmazonECSTaskExecutionRolePolicy`
- **Inline policy** (`upscale-secrets-access`):
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["secretsmanager:GetSecretValue", "ssm:GetParameters", "kms:Decrypt"],
    "Resource": "*"
  }]
}
```
![5.3.16](/images/5-Workshop/5.3.16.png)
### upscale-ecs-task-role
![5.3.17](/images/5-Workshop/5.3.17.png)![5.3.18](/images/5-Workshop/5.3.18.png)
- **Trusted entity**: ECS Tasks
- **Inline policy** (`upscale-task-permissions`): S3, SQS, CloudWatch, Secrets Manager (xem Phần 5.5 cho JSON đầy đủ)
![5.3.19](/images/5-Workshop/5.3.19.png)
### upscale-ec2-ecs-role
![5.3.20](/images/5-Workshop/5.3.20.png)![5.3.21](/images/5-Workshop/5.3.21.png)
- **Trusted entity**: EC2
- **Managed policies**: `AmazonEC2ContainerServiceforEC2Role`, `AmazonSSMManagedInstanceCore`
- **Instance Profile**: `upscale-ec2-ecs-profile` (thêm role này vào)
![5.3.22](/images/5-Workshop/5.3.22.png)
---

## Xác minh

| Tài nguyên | Chi tiết chính |
|-----------|---------------|
| VPC | upscale-vpc, 10.0.0.0/16 |
| Subnets | 2 public + 2 private qua 2 AZs |
| NAT GW | Trong upscale-pub-1a, Available |
| Security Groups | 5 đã tạo, quy tắc quyền tối thiểu |
| IAM Roles | 3 roles + 1 instance profile |

> **Tiếp theo**: [5.4 - Lưu trữ](../5.4-storage/)
