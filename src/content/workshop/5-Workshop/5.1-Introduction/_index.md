---
title: "5.1 - Introduction"
date: 2026-07-18
weight: 11
chapter: false
pre: "<b>5.1. </b>"
---

## Overview

This section introduces **Upscale AI** — an AI image upscaling platform deployed on AWS. You will understand the system architecture, data flow, and how each component interacts.

---

## What is Upscale AI?

Upscale AI is a web application that uses **Real-ESRGAN** deep learning models to upscale images from low resolution to high resolution. Users upload images through a web interface, and the AI processing happens asynchronously on AWS infrastructure.

### Core Capabilities

- **AI Image Upscaling**: Real-ESRGAN model for 4x image resolution enhancement
- **Async Job Processing**: SQS-based queue handles heavy AI workloads without blocking
- **Real-time Progress**: Server-Sent Events (SSE) streams processing status to the browser
- **User Auth**: Amazon Cognito with Google OAuth 2.0
- **Secure Storage**: S3 for images, EFS for AI model weights and database persistence

---

## System Data Flow

When a user uploads an image, the following happens:

```
Browser → CloudFront → ALB → ECS API (FastAPI)
                                │
                                ├─ 1. Authenticate via Cognito JWT
                                ├─ 2. Upload original image to S3
                                ├─ 3. Enqueue job to SQS
                                ├─ 4. Return job ID to client
                                │
                                └─ SSE connection for progress updates
                                        │
ECS Worker (same API container) ←────── 5. Dequeue job from SQS
        │
        ├─ 6. Download image from S3
        ├─ 7. Load Real-ESRGAN weights from EFS
        ├─ 8. Run AI inference (GPU/CPU)
        ├─ 9. Upload upscaled image to S3
        ├─ 10. Update progress in Redis
        └─ 11. SSE pushes status to browser
```
![Service Architecture](/images/5-Workshop/sodo.jpg)

---

## Component Roles

| Layer | Component | What It Does |
|-------|-----------|-------------|
| **Edge** | CloudFront | CDN, caches static assets, routes `/api/*` to ALB |
| **Edge** | WAF | Filters malicious requests (SQL injection, XSS, rate limiting) |
| **Edge** | ACM | SSL/TLS certificates for HTTPS |
| **Traffic** | ALB | Distributes HTTP/HTTPS traffic, health checks, SSL termination |
| **Compute** | ECS API Task | FastAPI backend, handles requests, enqueues AI jobs |
| **Compute** | ECS Postgres Task | PostgreSQL database, stores metadata and user data |
| **Queue** | SQS | Async job queue, decouples API from AI processing |
| **Cache** | Redis | Tracks job progress, caches frequent queries |
| **Storage** | S3 (Static) | Frontend SPA files (HTML, JS, CSS) |
| **Storage** | S3 (Images) | User uploaded images + upscaled results |
| **Storage** | EFS | AI model weights (~100MB) + PostgreSQL data persistence |
| **Auth** | Cognito | User registration, login, JWT token issuance |
| **Secrets** | Secrets Manager | Database credentials, API keys, Redis URL |
| **Network** | VPC | Isolated network: 2 public + 2 private subnets |
| **Network** | NAT Gateway | Outbound internet for private subnet tasks |
| **Monitoring** | CloudWatch | Logs, metrics, alarms, operational dashboard |

---

## Why ECS on EC2 (Not Fargate)?

| Factor | Fargate | EC2 |
|--------|---------|-----|
| GPU Support | No | Yes (g4dn.xlarge) |
| EFS Mount | Yes | Yes |
| Cost (constant load) | Higher | Lower |
| Model Pre-loading | Cold start each time | Weights stay on disk |
| Instance Control | None | Full (SSM, monitoring) |

Real-ESRGAN inference benefits from GPU acceleration. While this workshop uses `t3.large` (CPU) for testing, production should use `g4dn.xlarge` with NVIDIA T4 GPU.

---

## AWS Services Used (21 total)

| Category | Services |
|----------|----------|
| Networking | VPC, Subnets, IGW, NAT Gateway, Route Tables, Security Groups |
| Compute | ECS, EC2, Auto Scaling Group, Launch Template |
| Storage | S3, EFS, ECR |
| Database | PostgreSQL (on ECS) |
| Queue & Cache | SQS, ElastiCache Redis |
| Auth & Secrets | Cognito, Secrets Manager |
| Traffic & CDN | ALB, CloudFront, WAF, ACM |
| Monitoring | CloudWatch (Logs, Alarms, Dashboard) |
| IAM | IAM Roles, Instance Profiles |
| CI/CD | CodePipeline, CodeBuild |

---

## Workshop Roadmap

This workshop follows a **layer-by-layer** deployment approach:

1. **Foundation** (Step 3): Build the network — VPC, subnets, security groups, IAM roles
2. **Data** (Step 4): Set up storage — S3, EFS, ECR, Secrets Manager
3. **Compute** (Step 5): Deploy applications — Redis, SQS, ECS tasks and services
4. **Traffic** (Step 6): Route traffic — ALB, target groups, health checks
5. **Edge** (Step 7): Deliver globally — CloudFront, WAF, SSL
6. **Visibility** (Step 8): Monitor everything — CloudWatch logs, alarms, dashboard
7. **Go-Live** (Step 9): Deploy frontend and verify end-to-end
