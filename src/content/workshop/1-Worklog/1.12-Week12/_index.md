---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

### Week 12 Objectives

Last week. Chapter 5.10 Cleanup: tear down every resource I created so the bill goes back to zero. Then write the internship retro and close the last Linear tickets.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Read chapter 5.10 in full and wrote the deletion order down before touching anything. | 05/07/2026 | 05/07/2026 | - |
| 2 | Deleted ECS services and the ECS cluster, then the ASG and launch template. | 06/07/2026 | 06/07/2026 | - |
| 3 | Deleted ALB, target group, CloudFront distribution and WAF web ACL. | 07/07/2026 | 07/07/2026 | - |
| 4 | Deleted Redis, SQS queues and dead-letter queue. | 08/07/2026 | 08/07/2026 | - |
| 5 | Deleted EFS, ECR repos, S3 buckets and Secrets Manager secrets. | 09/07/2026 | 09/07/2026 | - |
| 6 | Deleted NAT Gateway, subnets and finally the VPC. Opened Cost Explorer to confirm the bill is dropping. | 10/07/2026 | 10/07/2026 | - |
| 7 | Wrote the internship retro, closed the remaining Linear tickets (`UPS-14` to `UPS-18`). | 11/07/2026 | 11/07/2026 | - |

### Week 12 Achievements

The account is back to a clean state. Cost Explorer shows a sharp drop-off after the NAT Gateway went. I built and tore down a full AWS stack from nothing in 12 weeks, and I understand each piece well enough to explain it in interview.

### Challenges & Lessons

Cleanup taught me more about dependencies than build did. I could not delete the VPC while a NAT Gateway was still there, could not delete the NAT while an ENI existed, could not delete the ENI while a task was running. AWS resources are a graph, and cleanup is the graph in reverse. That is a mental model I will keep past this internship.

### Next Week Plan

Internship ends here. Personal follow-ups: write a blog post about what I learned, redo chapters 5.5 and 5.6 from memory to see what actually stuck.
