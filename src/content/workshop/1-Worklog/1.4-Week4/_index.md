---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

### Focus

Security Groups and S3. Two things that look boring but bite hard if the conventions are wrong.

### What I did

- Broke `UPS-6` (SG) and `UPS-7` (S3) into small tickets by service.
- Reviewed the SG matrix (who talks to whom on which port) and rejected the first draft because it opened Redis to the world.
- Reviewed S3 PRs, made sure every bucket has block-public-access on by default.
- Hands-on: chose bucket naming `upscale-<env>-<purpose>` (input, output, artifacts, logs), wrote the lifecycle rule (glacier after 30 days, delete after 90 for logs), and produced a shared bucket-policy template.
- Held a short review with the team to walk through why the SG rules look the way they do.

### Result

SG matrix and S3 conventions merged. New buckets and services now follow the template without me babysitting each PR.

### Friction

Two members were surprised that ALB → ECS still needs an SG rule even inside the VPC. Added a short note in the ADR.

### Next week

Chapter 5.5. EFS for shared model weights and ECR for container images.
