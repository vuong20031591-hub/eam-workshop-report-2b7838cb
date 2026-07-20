---
title: "5.10 - Cleanup"
date: 2026-07-18
weight: 20
chapter: false
pre: "<b>5.10. </b>"
---

## Overview

Delete all resources in reverse order to avoid orphaned resources and unexpected charges.

---

## Step 1: Delete ECS Services & Cluster

1. **ECS Console** → `upscale-cluster` → Services:
   - Delete `upscale-api` (deregister targets first)
   - Delete `upscale-postgres`
2. Delete `upscale-cluster`
3. Delete capacity providers → deregister ASG

![5.10.1](/images/5-Workshop/5.10.1.png)![5.10.2](/images/5-Workshop/5.10.2.png)![5.10.3](/images/5-Workshop/5.10.3.png)![5.10.4](/images/5-Workshop/5.10.4.png)![5.10.5](/images/5-Workshop/5.10.5.png)![5.10.6](/images/5-Workshop/5.10.6.png)![5.10.7](/images/5-Workshop/5.10.7.png)

---

## Step 2: Delete Auto Scaling Group & Launch Template

1. **EC2 Console** → Auto Scaling Groups:
   - Delete `upscale-gpu-asg` (set desired=0 first)
2. Delete `upscale-gpu-lt`

![5.10.8](/images/5-Workshop/5.10.8.png)![5.10.9](/images/5-Workshop/5.10.9.png)

---

## Step 3: Delete ElastiCache & SQS

1. **ElastiCache Console** → Delete `upscale-redis`
2. **SQS Console** → Delete `upscale-job-queue` + `upscale-job-dlq`

![5.10.10](/images/5-Workshop/5.10.10.png)![5.10.11](/images/5-Workshop/5.10.11.png)![5.10.12](/images/5-Workshop/5.10.12.png)![5.10.13](/images/5-Workshop/5.10.13.png)![5.10.14](/images/5-Workshop/5.10.14.png)

---

## Step 4: Delete ALB & Target Groups

1. **EC2 Console** → Load Balancers:
   - Delete `upscale-alb`
2. Target Groups → Delete `upscale-api-tg`

![5.10.15](/images/5-Workshop/5.10.15.png)![5.10.16](/images/5-Workshop/5.10.16.png)![5.10.17](/images/5-Workshop/5.10.17.png)![5.10.18](/images/5-Workshop/5.10.18.png)

---

## Step 5: Delete CloudFront & WAF

1. **CloudFront Console** → Disable distribution → wait → Delete

![5.10.19](/images/5-Workshop/5.10.19.png)![5.10.20](/images/5-Workshop/5.10.20.png)![5.10.21](/images/5-Workshop/5.10.21.png)![5.10.22](/images/5-Workshop/5.10.22.png)
2. **WAF Console** → Web ACLs → Delete `upscale-waf`

---

## Step 6: Delete Storage

1. **S3 Console** → Empty `upscale-static-{ACCOUNT_ID}` → Delete
2. Empty `upscale-images-{ACCOUNT_ID}` → Delete
3. **EFS Console** → Delete `upscale-efs`
4. **ECR Console** → Delete `upscale-be`

![5.10.23](/images/5-Workshop/5.10.23.png)![5.10.24](/images/5-Workshop/5.10.24.png)![5.10.25](/images/5-Workshop/5.10.25.png)![5.10.26](/images/5-Workshop/5.10.26.png)![5.10.27](/images/5-Workshop/5.10.27.png)![5.10.28](/images/5-Workshop/5.10.28.png)![5.10.29](/images/5-Workshop/5.10.29.png)![5.10.30](/images/5-Workshop/5.10.30.png)![5.10.31](/images/5-Workshop/5.10.31.png)![5.10.32](/images/5-Workshop/5.10.32.png)![5.10.33](/images/5-Workshop/5.10.33.png)

---

## Step 7: Delete Secrets

**Secrets Manager Console** → Delete all 7 secrets (upscale/*)

![5.10.34](/images/5-Workshop/5.10.34.png)![5.10.35](/images/5-Workshop/5.10.35.png)![5.10.36](/images/5-Workshop/5.10.36.png)![5.10.37](/images/5-Workshop/5.10.37.png)![5.10.38](/images/5-Workshop/5.10.38.png)![5.10.39](/images/5-Workshop/5.10.39.png)![5.10.40](/images/5-Workshop/5.10.40.png)![5.10.41](/images/5-Workshop/5.10.41.png)![5.10.42](/images/5-Workshop/5.10.42.png)![5.10.43](/images/5-Workshop/5.10.43.png)![5.10.44](/images/5-Workshop/5.10.44.png)![5.10.45](/images/5-Workshop/5.10.45.png)![5.10.46](/images/5-Workshop/5.10.46.png)![5.10.47](/images/5-Workshop/5.10.47.png)![5.10.48](/images/5-Workshop/5.10.48.png)

---

## Step 8: Delete IAM

**IAM Console** → Roles → Delete:
- `upscale-ecs-execution-role`
- `upscale-ecs-task-role`
- `upscale-ec2-ecs-role`
- Instance profile: `upscale-ec2-ecs-profile`

![5.10.49](/images/5-Workshop/5.10.49.png)![5.10.50](/images/5-Workshop/5.10.50.png)![5.10.51](/images/5-Workshop/5.10.51.png)![5.10.52](/images/5-Workshop/5.10.52.png)![5.10.53](/images/5-Workshop/5.10.53.png)![5.10.54](/images/5-Workshop/5.10.54.png)![5.10.55](/images/5-Workshop/5.10.55.png)![5.10.56](/images/5-Workshop/5.10.56.png)

---

## Step 9: Delete Networking

1. **VPC Console** → NAT Gateways → Delete `upscale-nat` → Release EIP
2. Internet Gateway → Detach → Delete `upscale-igw`
3. VPC → Delete `upscale-vpc`

![5.10.57](/images/5-Workshop/5.10.57.png)![5.10.58](/images/5-Workshop/5.10.58.png)![5.10.59](/images/5-Workshop/5.10.59.png)![5.10.60](/images/5-Workshop/5.10.60.png)![5.10.61](/images/5-Workshop/5.10.61.png)![5.10.62](/images/5-Workshop/5.10.62.png)![5.10.63](/images/5-Workshop/5.10.63.png)![5.10.64](/images/5-Workshop/5.10.64.png)

---

## Step 10: Delete CloudWatch

1. **CloudWatch Console** → Dashboards → Delete `upscale-dashboard`
2. Alarms → Delete all upscale alarms
3. Log groups → Delete `/ecs/upscale-api`, `/ecs/upscale-postgres`

![5.10.65](/images/5-Workshop/5.10.65.png)![5.10.66](/images/5-Workshop/5.10.66.png)![5.10.67](/images/5-Workshop/5.10.67.png)![5.10.68](/images/5-Workshop/5.10.68.png)![5.10.69](/images/5-Workshop/5.10.69.png)![5.10.70](/images/5-Workshop/5.10.70.png)

---

## Summary

| Order | Resource | Estimated Savings |
|-------|----------|------------------|
| 1 | ECS Cluster + ASG | ~$73/mo |
| 2 | ElastiCache | ~$12/mo |
| 3 | ALB | ~$22/mo |
| 4 | CloudFront + WAF | ~$10/mo |
| 5 | S3, EFS, ECR | ~$10/mo |
| 6 | Secrets Manager | ~$4/mo |
| 7 | VPC, NAT | ~$32/mo |
| 8 | CloudWatch | ~$36/mo |

> **Tip**: Always clean up to avoid unexpected charges!

> **Back**: [5.1 - Introduction](../5.1-introduction/)
