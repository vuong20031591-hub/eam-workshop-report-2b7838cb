---
title: "Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

This worklog covers my 12-week internship on the Upscale AI project. I joined as an intern learning AWS from scratch, and each week maps to one part of the workshop guide in chapter 5. Sprint planning and issue tracking happened on Linear (workspace `UPS`), which I refer to throughout by ticket ID.

## AWS Architecture — AI Upscaler pipeline

![AWS Architecture](/workshop-static/images/1-Worklog/aws-architecture.png)

The diagram above shows the full pipeline I built over the 12 weeks. Traffic flows: **User → Route 53 → CloudFront + WAF → ALB → ECS on EC2 (GPU) → S3 / EFS / ElastiCache / SQS / CloudWatch**.

| Week | Workshop focus | Linear |
| --- | --- | --- |
| [Week 1](1.1-week1/) | Onboarding, AWS account, read chapter 5.1 | `UPS-1`, `UPS-2` |
| [Week 2](1.2-week2/) | Chapter 5.2 Prerequisites: IAM admin, MFA, region | `UPS-2` |
| [Week 3](1.3-week3/) | Chapter 5.3 part A: VPC, subnets, IGW, NAT | `UPS-3` |
| [Week 4](1.4-week4/) | Chapter 5.3 part B + 5.4 start: SGs, IAM roles, S3 buckets | `UPS-4`, `UPS-5` |
| [Week 5](1.5-week5/) | Chapter 5.4 rest: EFS, ECR, Secrets Manager | `UPS-6` |
| [Week 6](1.6-week6/) | Chapter 5.5 part A/B: ElastiCache Redis, SQS | `UPS-7` |
| [Week 7](1.7-week7/) | Chapter 5.5 part C+: ECS cluster, ASG, task definitions | `UPS-8`, `UPS-9` |
| [Week 8](1.8-week8/) | Chapter 5.6 Access: ALB + target groups | `UPS-10` |
| [Week 9](1.9-week9/) | Chapter 5.7 Delivery: ACM, CloudFront, WAF | `UPS-11` |
| [Week 10](1.10-week10/) | Chapter 5.8 Observability: CloudWatch, alarms | `UPS-12` |
| [Week 11](1.11-week11/) | Chapter 5.9 Deployment: build FE, upload to S3, invalidate CloudFront | `UPS-13` |
| [Week 12](1.12-week12/) | Chapter 5.10 Cleanup + internship retro | `UPS-14`–`UPS-18` |
