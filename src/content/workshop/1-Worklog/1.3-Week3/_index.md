---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

### Focus

Network. Lock the VPC layout so everything downstream (ALB, ECS, EFS, Redis) has a stable place to land.

### What I did

- Broke `UPS-5` (VPC) into sub-tickets: CIDR plan, subnets, routing, NAT, endpoints.
- Ran a whiteboard session on the topology, then wrote it up so the team is not arguing from memory.
- Reviewed the network diagram the team produced, pushed back on a single-AZ shortcut.
- Reviewed PRs for subnet and route table changes.
- Hands-on: chose CIDR (`10.20.0.0/16`), split public/private subnets across two AZs, decided on one NAT to keep cost sane, listed the VPC endpoints we actually need (S3, ECR, CloudWatch Logs). Wrote the network ADR.

### Result

VPC design merged as an ADR. Team knows which subnet each future service belongs in without asking me.

### Friction

Cost vs redundancy on NAT. Went with one NAT for now, noted a follow-up ticket to add a second before production traffic.

### Next week

Chapter 5.4. Security Groups and S3. I will own the bucket and policy conventions.
