---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

Network week. The VPC has to be right, because ALB, ECS, EFS and Redis all land inside it and moving any of them later is painful.

I broke `UPS-5` into sub-tickets for the CIDR plan, subnets, routing, NAT, and endpoints, then ran a whiteboard session on the topology and wrote it up straight after so nobody was arguing from memory the next day. Someone proposed a single-AZ shortcut to save money. I pushed back. Two AZs, non-negotiable.

Hands-on I picked the CIDR (`10.20.0.0/16`), split public and private subnets across two AZs, and settled on one NAT for now to keep the bill sane. The VPC endpoints we actually need are S3, ECR, and CloudWatch Logs, everything else can wait. All of this went into the network ADR.

Result: VPC design is merged. When a new service lands, the team knows which subnet it belongs in without asking me.

The one thing I am not fully happy with is the single NAT. It is a real single point of failure. I opened a follow-up to add a second one before production traffic, and moved on.

Next week is chapter 5.4. Security Groups and S3. I will own the bucket and policy conventions.
