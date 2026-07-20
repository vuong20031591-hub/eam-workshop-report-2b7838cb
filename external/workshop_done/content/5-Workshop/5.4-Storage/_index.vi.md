---
title: "5.4 - Lưu trữ"
date: 2026-07-18
weight: 14
chapter: false
pre: "<b>5.4. </b>"
---

## Tổng quan

Thiết lập tất cả lưu trữ dữ liệu: S3 cho đối tượng, EFS cho hệ thống file chia sẻ, ECR cho Docker images, và Secrets Manager cho thông tin xác thực.

---

## Phần A: S3 Buckets

### Bước 1: Static Assets Bucket

1. **S3 Console** → **"Create bucket"**
2. Tên: `upscale-static-YOUR_ACCOUNT_ID` (duy nhất toàn cầu)
3. Region: ap-southeast-1
4. Block Public Access: tất cả đã tích
5. Bật Versioning
6. Tạo
![5.4.0.1](/images/5-Workshop/5.4.0.1.png)![5.4.0.2](/images/5-Workshop/5.4.0.2.png)![5.4.0.3](/images/5-Workshop/5.4.0.3.png)
### Bước 2: Images Bucket

1. Tạo bucket: `upscale-images-YOUR_ACCOUNT_ID`
2. Block Public Access: tất cả đã tích
![5.4.1](/images/5-Workshop/5.4.1.png)![5.4.2](/images/5-Workshop/5.4.2.png)
**CORS** (tab Permissions → CORS → Edit):
```json
[{
  "AllowedHeaders": ["*"],
  "AllowedMethods": ["GET","PUT","POST","DELETE","HEAD"],
  "AllowedOrigins": ["*"],
  "ExposeHeaders": ["ETag"],
  "MaxAgeSeconds": 3600
}]
```
![5.4.3](/images/5-Workshop/5.4.3.png)![5.4.4](/images/5-Workshop/5.4.4.png)![5.4.5](/images/5-Workshop/5.4.5.png)
**Lifecycle** (tab Management → Create lifecycle rule):
- Rule 1: Prefix `temp/` → Hết hạn sau 7 ngày
- Rule 2: Prefix `processed/` → Chuyển sang Standard-IA sau 30 ngày
![5.4.7](/images/5-Workshop/5.4.7.png)![5.4.8](/images/5-Workshop/5.4.8.png)![5.4.9](/images/5-Workshop/5.4.9.png)![5.4.10](/images/5-Workshop/5.4.10.png)![5.4.11](/images/5-Workshop/5.4.11.png)
---

## Phần B: EFS

### Bước 3: Tạo Filesystem

1. **EFS Console** → **"Create file system"** → **"Customize"**
2. Tên: `upscale-efs`, VPC: `upscale-vpc`
3. Performance: General Purpose, Throughput: Bursting
4. Encryption: bật
5. Mount target: `upscale-priv-1a`, SG: `upscale-efs-sg`
6. Tạo → đợi Available
![5.4.12](/images/5-Workshop/5.4.12.png)![5.4.13](/images/5-Workshop/5.4.13.png)![5.4.14](/images/5-Workshop/5.4.14.png)
### Bước 4: Mount Target thứ hai

Tab Network → Create mount target → `upscale-priv-1b`, SG: `upscale-efs-sg`
![5.4.15](/images/5-Workshop/5.4.15.png)
### Bước 5: Access Points

| Tên | Path | UID/GID | Permissions |
|-----|------|---------|-------------|
| upscale-ap-weights | /weights | 1000/1000 | 755 |
| upscale-ap-pgdata | /pgdata | 999/999 | 700 |
![5.4.16](/images/5-Workshop/5.4.16.png)
---

## Phần C: ECR

### Bước 6: Tạo Repository

1. **ECR Console** → **"Create repository"**
2. Tên: `upscale-be`, Scan on push: có, Encryption: AES-256
3. Tạo
![5.4.17](/images/5-Workshop/5.4.17.png)![5.4.18](/images/5-Workshop/5.4.18.png)![5.4.19](/images/5-Workshop/5.4.19.png)

---

## Phần D: Secrets Manager

### Bước 7: Tạo 7 Secrets

| Tên Secret | Giá trị |
|-----------|---------|
| upscale/database-url | `postgresql+asyncpg://upscale:PASSWORD@postgres.upscale.local:5432/upscale` |
| upscale/postgres-password | Mật khẩu mạnh của bạn |
| upscale/cognito-user-pool-id | ap-southeast-1_XXXXXX |
| upscale/cognito-client-id | your-client-id |
| upscale/redis-url | `redis://ENDPOINT:6379` (cập nhật sau khi tạo Redis) |
| upscale/sqs-queue-url | SQS URL (cập nhật sau khi tạo queue) |
| upscale/s3-images-bucket | upscale-images-YOUR_ACCOUNT_ID |
![5.4.20](/images/5-Workshop/5.4.20.png)
---

## Tóm tắt

| Tài nguyên | Tên |
|-----------|-----|
| S3 Bucket | upscale-static-{ACCOUNT_ID} |
| S3 Bucket | upscale-images-{ACCOUNT_ID} |
| EFS | upscale-efs (2 mount targets, 2 access points) |
| ECR | upscale-be |
| Secrets | 7 secrets trong Secrets Manager |

> **Tiếp theo**: [5.5 - Ứng dụng](../5.5-application/)
