---
title: "5.4 - Storage"
date: 2026-07-18
weight: 14
chapter: false
pre: "<b>5.4. </b>"
---

## Overview

Set up all data persistence: S3 for objects, EFS for shared filesystem, ECR for container images, and Secrets Manager for credentials.

---

## Part A: S3 Buckets

### Step 1: Static Assets Bucket

1. **S3 Console** → **"Create bucket"**
2. Name: `upscale-static-YOUR_ACCOUNT_ID` (globally unique)
3. Region: ap-southeast-1
4. Block Public Access: all checked
5. Enable Versioning
6. Create

![5.4.0.1](/images/5-Workshop/5.4.0.1.png)![5.4.0.2](/images/5-Workshop/5.4.0.2.png)![5.4.0.3](/images/5-Workshop/5.4.0.3.png)

### Step 2: Images Bucket

1. Create bucket: `upscale-images-YOUR_ACCOUNT_ID`
2. Block Public Access: all checked

![5.4.1](/images/5-Workshop/5.4.1.png)![5.4.2](/images/5-Workshop/5.4.2.png)

**CORS** (Permissions tab → CORS → Edit):
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

**Lifecycle** (Management tab → Create lifecycle rule):
- Rule 1: Prefix `temp/` → Expire after 7 days
- Rule 2: Prefix `processed/` → Transition to Standard-IA after 30 days

![5.4.7](/images/5-Workshop/5.4.7.png)![5.4.8](/images/5-Workshop/5.4.8.png)![5.4.9](/images/5-Workshop/5.4.9.png)![5.4.10](/images/5-Workshop/5.4.10.png)![5.4.11](/images/5-Workshop/5.4.11.png)

---

## Part B: EFS

### Step 3: Create Filesystem

1. **EFS Console** → **"Create file system"** → **"Customize"**
2. Name: `upscale-efs`, VPC: `upscale-vpc`
3. Performance: General Purpose, Throughput: Bursting
4. Encryption: enabled
5. Mount target: `upscale-priv-1a`, SG: `upscale-efs-sg`
6. Create → wait for Available

![5.4.12](/images/5-Workshop/5.4.12.png)![5.4.13](/images/5-Workshop/5.4.13.png)![5.4.14](/images/5-Workshop/5.4.14.png)

### Step 4: Second Mount Target

Network tab → Create mount target → `upscale-priv-1b`, SG: `upscale-efs-sg`

![5.4.15](/images/5-Workshop/5.4.15.png)

### Step 5: Access Points

| Name | Path | UID/GID | Permissions |
|------|------|---------|-------------|
| upscale-ap-weights | /weights | 1000/1000 | 755 |
| upscale-ap-pgdata | /pgdata | 999/999 | 700 |

![5.4.16](/images/5-Workshop/5.4.16.png)

---

## Part C: ECR

### Step 6: Create Repository

1. **ECR Console** → **"Create repository"**
2. Name: `upscale-be`, Scan on push: yes, Encryption: AES-256
3. Create

![5.4.17](/images/5-Workshop/5.4.17.png)![5.4.18](/images/5-Workshop/5.4.18.png)![5.4.19](/images/5-Workshop/5.4.19.png)

**Lifecycle policy**: Keep last 10 untagged, last 20 tagged images.

---

## Part D: Secrets Manager

### Step 7: Create 7 Secrets

| Secret Name | Value |
|-------------|-------|
| upscale/database-url | `postgresql+asyncpg://upscale:PASSWORD@postgres.upscale.local:5432/upscale` |
| upscale/postgres-password | Your strong password |
| upscale/cognito-user-pool-id | ap-southeast-1_XXXXXX |
| upscale/cognito-client-id | your-client-id |
| upscale/redis-url | `redis://ENDPOINT:6379` (update after creating Redis) |
| upscale/sqs-queue-url | SQS URL (update after creating queue) |
| upscale/s3-images-bucket | upscale-images-YOUR_ACCOUNT_ID |

![5.4.20](/images/5-Workshop/5.4.20.png)

---

## Summary

| Resource | Name |
|----------|------|
| S3 Bucket | upscale-static-{ACCOUNT_ID} |
| S3 Bucket | upscale-images-{ACCOUNT_ID} |
| EFS | upscale-efs (2 mount targets, 2 access points) |
| ECR | upscale-be |
| Secrets | 7 secrets in Secrets Manager |

> **Next**: [5.5 - Application](../5.5-application/)
