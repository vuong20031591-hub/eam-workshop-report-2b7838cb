---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

### Week 3 Objectives

Chapter 5.3 Infrastructure, part one. This is the first week I actually build something on AWS: a VPC with public and private subnets and the gateways that let traffic in and out. I followed the workshop steps closely and drew every subnet on paper as I created it.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Read chapter 5.3 part A end to end, wrote down what each subnet is for. | 03/05/2026 | 03/05/2026 | - |
| 2 | Created `upscale-vpc` with CIDR `10.0.0.0/16`. | 04/05/2026 | 04/05/2026 | [VPC](https://docs.aws.amazon.com/vpc/latest/userguide/) |
| 3 | Created two public subnets and two private subnets across `1a` and `1b`. | 05/05/2026 | 05/05/2026 | - |
| 4 | Attached an Internet Gateway to the VPC. | 06/05/2026 | 06/05/2026 | - |
| 5 | Created a NAT Gateway in the public subnet so private tasks can reach the internet. | 07/05/2026 | 07/05/2026 | - |
| 6 | Set up route tables: public → IGW, private → NAT. | 08/05/2026 | 08/05/2026 | - |
| 7 | Closed `UPS-3` on Linear, updated the sprint board, took `UPS-4` (SGs + IAM roles). | 09/05/2026 | 09/05/2026 | - |

### Week 3 Achievements

The network is up. I can see the VPC and all four subnets in the console. A test EC2 in a public subnet reaches the internet; a test EC2 in a private subnet reaches it only through NAT. That is exactly what the workshop said should happen.

### Challenges & Lessons

I mixed up the route tables the first time and my "private" subnet had a direct route to the IGW, which defeats the point. Lesson: after every route table change, click into it and read the routes back before moving on.

### Next Week Plan

Finish chapter 5.3 (security groups, IAM roles) on `UPS-4`, then start chapter 5.4 Storage.
