---
title: "5.3 - Infrastructure"
date: 2026-07-18
weight: 13
chapter: false
pre: "<b>5.3. </b>"
---

## Overview

Build the entire network foundation and security layer in one step: VPC, subnets, gateways, route tables, security groups, and IAM roles.

---

## Part A: VPC & Networking

### Step 1: Create VPC

1. **VPC Console** → **"Create VPC"** → **"VPC settings"** → **"Create VPC"**

![5.3.1](/images/5-Workshop/5.3.1.png)![5.3.2](/images/5-Workshop/5.3.2.png)![5.3.3](/images/5-Workshop/5.3.3.png)![5.3.4](/images/5-Workshop/5.3.4.png)
2. Name: `upscale-vpc`, CIDR: `10.0.0.0/16`

![5.3.5](/images/5-Workshop/5.3.5.png)
3. Enable **DNS hostnames** + **DNS resolution**
4. Create

![5.3.6](/images/5-Workshop/5.3.6.png)

### Step 2: Create 4 Subnets

| Name | CIDR | AZ | Public? |
|------|------|----|---------|
| upscale-pub-1a | 10.0.1.0/24 | ap-southeast-1a | Yes |
| upscale-pub-1b | 10.0.2.0/24 | ap-southeast-1b | Yes |
| upscale-priv-1a | 10.0.10.0/24 | ap-southeast-1a | No |
| upscale-priv-1b | 10.0.11.0/24 | ap-southeast-1b | No |

![5.3.7](/images/5-Workshop/5.3.7.png)

Enable **Auto-assign public IPv4** on both public subnets.

### Step 3: Internet Gateway

Create `upscale-igw` → attach to `upscale-vpc`.

![5.3.8](/images/5-Workshop/5.3.8.png)

### Step 4: NAT Gateway

1. **EC2 Console** → **Elastic IPs** → Allocate EIP → tag `upscale-nat-eip`

![5.3.9](/images/5-Workshop/5.3.9.png)
2. **VPC Console** → **NAT Gateways** → Create:
   - Name: `upscale-nat`
   - Subnet: `upscale-pub-1a`
   - Elastic IP: the one you just allocated
3. Wait for **Available** (~2-3 min)

![5.3.10](/images/5-Workshop/5.3.10.png)

### Step 5: Route Tables

**Public RT** (`upscale-pub-rt`):
- Route: `0.0.0.0/0` → Internet Gateway
- Associate: `upscale-pub-1a`, `upscale-pub-1b`

![5.3.11](/images/5-Workshop/5.3.11.png)

**Private RT** (`upscale-priv-rt`):
- Route: `0.0.0.0/0` → NAT Gateway
- Associate: `upscale-priv-1a`, `upscale-priv-1b`

![5.3.12](/images/5-Workshop/5.3.12.png)

---

## Part B: Security Groups

Create 5 security groups in **EC2 Console** → **Security Groups**:

| Name | Inbound | Source |
|------|---------|--------|
| upscale-alb-sg | HTTP (80), HTTPS (443) | 0.0.0.0/0 |
| upscale-ecs-sg | TCP 8000 | ALB SG only |
| upscale-ecs-sg | All traffic | Self (ECS→ECS) |
| upscale-redis-sg | TCP 6379 | ECS SG only |
| upscale-pg-sg | TCP 5432 | ECS SG only |
| upscale-efs-sg | TCP 2049 (NFS) | ECS SG only |

![5.3.13](/images/5-Workshop/5.3.13.png)

---

## Part C: IAM Roles

Create in **IAM Console** → **Roles**:

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
- **Inline policy** (`upscale-task-permissions`): S3, SQS, CloudWatch, Secrets Manager (see Section 5.5 for full JSON)

![5.3.19](/images/5-Workshop/5.3.19.png)

### upscale-ec2-ecs-role

![5.3.20](/images/5-Workshop/5.3.20.png)![5.3.21](/images/5-Workshop/5.3.21.png)

- **Trusted entity**: EC2
- **Managed policies**: `AmazonEC2ContainerServiceforEC2Role`, `AmazonSSMManagedInstanceCore`
- **Instance Profile**: `upscale-ec2-ecs-profile` (add this role to it)

![5.3.22](/images/5-Workshop/5.3.22.png)

---

## Verification

| Resource | Key Detail |
|----------|-----------|
| VPC | upscale-vpc, 10.0.0.0/16 |
| Subnets | 2 public + 2 private across 2 AZs |
| NAT GW | In upscale-pub-1a, Available |
| Security Groups | 5 created, least-privilege rules |
| IAM Roles | 3 roles + 1 instance profile |

> **Next**: [5.4 - Storage](../5.4-storage/)
