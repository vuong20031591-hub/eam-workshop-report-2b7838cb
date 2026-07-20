---
title: "Proposal"
date: 2026-07-18
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# Upscale AI — Deploying an AI Image Upscaling Platform to AWS Cloud
## A Container-Based AWS Solution for AI-Powered Image Enhancement

---

### 1. Executive Summary

**Upscale AI** is a web application that uses deep learning models (Real-ESRGAN) to upscale images from low resolution to high resolution. Users upload images through a web interface, and the AI processing happens asynchronously on AWS infrastructure with real-time progress tracking.

This project deploys the entire system to **AWS Cloud** using a **container-based architecture** on ECS with EC2 launch type — providing GPU support for AI model inference, persistent storage for model weights, and automatic scaling based on demand.

---

### 2. Technical Overview

#### Architecture Philosophy

Unlike typical serverless deployments, Upscale AI requires **persistent GPU compute** for AI model inference. This constraint drives the entire architecture toward ECS on EC2 with auto-scaling groups.

#### Core Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Compute | ECS on EC2 (not Lambda) | GPU required for Real-ESRGAN; long-running tasks exceed Lambda timeout |
| Database | PostgreSQL on ECS (not RDS) | Cost optimization; EFS provides persistence |
| Caching | Redis on ElastiCache | Real-time progress tracking via SSE |
| Job Queue | SQS with DLQ | Async processing; fault tolerance |
| Storage | EFS for model weights | Shared across container restarts; persistent |
| CDN | CloudFront + S3 | Static frontend assets; global delivery |
| Security | WAF + Private subnets | Defense in depth; least-privilege access |

---

### 3. Service Architecture

![Service Architecture](/images/2-Proposal/sodo.jpg)

#### Frontend Layer
| Service | Purpose |
|---------|---------|
| Amazon S3 | Static React app hosting |
| Amazon CloudFront | Global CDN with edge caching |
| AWS ACM | SSL/TLS certificates |
| AWS WAF | Web application firewall |

#### Application Layer
| Service | Purpose |
|---------|---------|
| AWS ECS on EC2 | Container orchestration with GPU support |
| Application Load Balancer | HTTP/HTTPS traffic distribution |
| Amazon ECR | Docker image registry |
| Auto Scaling Group | Dynamic instance scaling |

#### Data Layer
| Service | Purpose |
|---------|---------|
| Amazon S3 | User uploads + processed images |
| Amazon EFS | Model weights + PostgreSQL data |
| PostgreSQL (on ECS) | Metadata storage |
| Amazon ElastiCache Redis | Progress tracking + caching |
| Amazon SQS | Async job queue with DLQ |

#### Security Layer
| Service | Purpose |
|---------|---------|
| Amazon VPC | Network isolation |
| AWS IAM | Role-based access control |
| AWS Secrets Manager | Credential storage |
| Amazon Cognito | User authentication |

#### Observability Layer
| Service | Purpose |
|---------|---------|
| Amazon CloudWatch | Logs, metrics, alarms |
| AWS CodePipeline | CI/CD automation |

---

### 4. Cost Analysis

#### Monthly Cost Breakdown (Test Environment)

| Category | Services | Cost |
|----------|----------|------|
| Compute | EC2 (t3.large) | $120.00 |
| Networking | NAT Gateway, ALB | $70.00 |
| Storage | EFS, S3, ECR | $4.60 |
| Database | ElastiCache Redis | $15.00 |
| Security | WAF, Secrets Manager | $11.80 |
| Monitoring | CloudWatch | $5.00 |
| CI/CD | CodePipeline, CodeBuild | $1.12 |
| Other | Cognito, IAM, VPC, ACM | $0.00 |
| **Total** | | **~$227.52/month** |

---

### 5. Security Architecture

#### Network Security
- **VPC Isolation**: Private subnets for all compute resources
- **Security Groups**: Least-privilege inbound rules
- **NAT Gateway**: Controlled outbound internet access
- **WAF Rules**: Rate limiting, SQL injection, IP reputation filtering

#### Data Security
- **Encryption at Rest**: EFS, S3, RDS (future)
- **Encryption in Transit**: TLS 1.2+ everywhere
- **Secrets Management**: No hardcoded credentials
- **IAM Roles**: Task-specific permissions

#### Application Security
- **Cognito**: JWT-based authentication
- **CORS**: Strict origin validation
- **Input Validation**: Server-side request validation

---

### 6. Deployment Strategy

#### Phase 1: Foundation
VPC, subnets, security groups, IAM roles

#### Phase 2: Data Layer
S3 buckets, EFS, ECR, Secrets Manager

#### Phase 3: Application
ECS cluster, task definitions, services

#### Phase 4: Access
ALB, target groups, listeners

#### Phase 5: Delivery
CloudFront, WAF, ACM

#### Phase 6: Observability
CloudWatch logs, alarms, dashboard

#### Phase 7: Deployment
Frontend build, S3 upload, CloudFront invalidation

---

### 7. Video Demo

- **Demo video link:** [Google Drive](https://drive.google.com/file/d/1lNZM2O4d3lM-bIPDWL6f4gZKBLKFYOcY/view?usp=sharing)

