---
title: "Workshop: Deploy Upscale AI on AWS"
date: 2026-07-18
weight: 5
chapter: false
pre: "<b>5. </b>"
---

# Workshop: Deploy Upscale AI on AWS

A hands-on guide to deploying **Upscale AI** — an AI-powered image upscaling platform — on AWS using the **AWS Management Console**.

### What You Will Build

A production-grade application that uses Real-ESRGAN deep learning models to upscale images, deployed on AWS with container orchestration, GPU-accelerated compute, and a multi-layered security architecture.

### Architecture Layers

![Service Architecture](/images/5-Workshop/sodo.jpg)

### Workshop Steps

| Step | Phase | What Happens |
|------|-------|-------------|
| [5.1 - Introduction](5.1-introduction/) | Overview | System design, data flow, component roles |
| [5.2 - Prerequisites](5.2-prerequisites/) | Setup | AWS account, IAM user, region selection |
| [5.3 - Infrastructure](5.3-infrastructure/) | Foundation | VPC, subnets, IGW, NAT, route tables, security groups, IAM roles — all networking and permissions |
| [5.4 - Storage](5.4-storage/) | Data Layer | S3 buckets, EFS filesystem + access points, ECR repository, Secrets Manager |
| [5.5 - Application](5.5-application/) | Compute Layer | Redis, SQS queues, ECS task definitions, ECS services, auto scaling |
| [5.6 - Access](5.6-access/) | Traffic Layer | ALB, target groups, health checks, HTTP→HTTPS redirect, listeners |
| [5.7 - Delivery](5.7-delivery/) | Edge Layer | CloudFront distribution, WAF rules, ACM SSL certificates |
| [5.8 - Observability](5.8-observability/) | Monitoring | CloudWatch log groups, alarms, dashboard |
| [5.9 - Deployment](5.9-deployment/) | Go-Live | Build frontend, upload to S3, invalidate CloudFront, verify end-to-end |
| [5.10 - Cleanup](5.10-cleanup/) | Teardown | Delete all resources in correct order |

### Cost Summary

| Resource | Monthly Cost |
|----------|-------------|
| EC2 (t3.large, 24/7) | ~$120 |
| NAT Gateway | ~$45 |
| ALB + Target Groups | ~$25 |
| ElastiCache Redis | ~$15 |
| CloudFront + WAF | ~$14 |
| EFS + S3 + ECR | ~$5 |
| SQS + Secrets Manager | ~$3 |
| CloudWatch + CodePipeline | ~$6 |
| **Total** | **~$233/month** |

> Use **Spot Instances** to reduce EC2 cost by 60-70% (~$90/month savings).

### Region

All resources → **ap-southeast-1 (Singapore)** unless noted.
