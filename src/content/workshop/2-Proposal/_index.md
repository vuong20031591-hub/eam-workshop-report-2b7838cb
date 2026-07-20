---
title: "Proposal"
date: 2026-07-18
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# Upscale AI: Deploying an AI Image Upscaling Platform to AWS Cloud
## A Container-Based AWS Solution for AI-Powered Image Enhancement

---

### 1. Executive Summary

Upscale AI is a web application that uses Real-ESRGAN to increase image resolution. Users upload an image through the web interface, and inference runs asynchronously on AWS with progress reported back in real time.

The whole system is deployed to AWS using a container-based architecture on ECS with the EC2 launch type. EC2 gives us GPU-capable instances for inference, and EFS keeps the model weights around across container restarts. Auto-scaling handles bursts in demand.

---

### 2. Technical Overview

#### Architecture Philosophy

Real-ESRGAN inference needs persistent GPU compute, which rules out Lambda and most serverless options. That single constraint is why the compute layer is ECS on EC2 with an auto-scaling group.

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
| Amazon Route 53 | DNS resolution + ACM validation |
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
| Amazon Cognito | User authentication (planned, not yet in workshop) |

#### Observability Layer
| Service | Purpose |
|---------|---------|
| Amazon CloudWatch | Logs, metrics, alarms |
| AWS CodePipeline | CI/CD automation (planned, not yet in workshop) |

---

### 4. Cost Analysis

#### Monthly Cost Breakdown (Test Environment)

| Category | Services | Cost |
|----------|----------|------|
| Compute | EC2 (t3.large, 24/7) | $120.00 |
| Networking | NAT Gateway, ALB | $70.00 |
| Storage | EFS, S3, ECR | $4.60 |
| Database | ElastiCache Redis | $15.00 |
| Security | WAF, Secrets Manager | $11.80 |
| Monitoring | CloudWatch | $5.00 |
| CI/CD | CodePipeline, CodeBuild | $1.12 |
| Other | Cognito, IAM, VPC, ACM | $0.00 |
| **Total** | | **~$227.52/month** |

> Note: the workshop baseline uses `t3.large` (CPU) for testing. For production GPU inference, switch to `g4dn.xlarge` (NVIDIA T4, about $379/mo on-demand) and enable Spot Instances to cut EC2 cost by roughly 60% to 70%.

---

### 5. Security Architecture

#### Network Security
All compute resources sit in private subnets inside a dedicated VPC. Security groups only allow the inbound rules each service actually needs, and a NAT Gateway handles the small amount of outbound traffic those services require. WAF rules on CloudFront cover rate limiting, SQL-injection signatures, and IP reputation filtering.

#### Data Security
Data is encrypted at rest on EFS, S3, and the PostgreSQL-on-ECS volume, and TLS 1.2+ is required for traffic between services. Credentials live in Secrets Manager rather than in code or task definitions. IAM roles are scoped per ECS task so a compromised container cannot reach resources it does not use.

#### Application Security
Cognito issues JWTs that the API validates on every request. CORS is restricted to the CloudFront origin, and request payloads are validated server-side before they reach the queue.

---

### 6. Deployment Strategy

#### Phase 1: Prerequisites
AWS account setup, CLI, IAM admin user, budgets, cost alerts

#### Phase 2: Foundation (Infrastructure)
VPC, subnets, security groups, IAM roles

#### Phase 3: Data Layer (Storage)
S3 buckets, EFS, ECR, Secrets Manager

#### Phase 4: Application
ECS cluster, task definitions, services

#### Phase 5: Access
ALB, target groups, listeners

#### Phase 6: Delivery
CloudFront, WAF, ACM

#### Phase 7: Observability
CloudWatch logs, alarms, dashboard

#### Phase 8: Deployment
Frontend build, S3 upload, CloudFront invalidation

#### Phase 9: Cleanup
Delete stacks in reverse order to avoid orphaned resources and cost leaks

---

### 7. Video Demo

- **Demo video link:** [Google Drive](https://drive.google.com/file/d/1lNZM2O4d3lM-bIPDWL6f4gZKBLKFYOcY/view?usp=sharing)

