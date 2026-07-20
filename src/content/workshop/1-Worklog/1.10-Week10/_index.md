---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

### Week 10 Objectives

Security hardening before opening scale. I audited IAM for least privilege, locked Secrets Manager rotation, and started writing the ECS on EC2 + ASG + SQS architecture spec for Week 11.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Audited IAM: switched role `EC2-Upscale-Role` from wildcard `s3:*` to only prefixes `weights/*`, `tmp/*`, `output/*`. | 29/06/2026 | 29/06/2026 | [IAM Least Privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) |
| 2 | Locked Secrets Manager for DB password + Cognito App Client secret; 30-day rotation. | 30/06/2026 | 30/06/2026 | [Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/) |
| 3 | Reviewed the PR migrating secrets from env vars to Secrets Manager (boto3 fetch on startup). | 01/07/2026 | 01/07/2026 | - |
| 4 | Locked VPC Flow Logs + GuardDuty for the account; reviewed the added cost (~$8/month). | 02/07/2026 | 02/07/2026 | [GuardDuty](https://docs.aws.amazon.com/guardduty/latest/ug/) |
| 5 | Wrote the ECS on EC2 architecture spec: ASG Capacity Provider, GPU-aware task definition, SQS `upscale-job-queue`. | 03/07/2026 | 03/07/2026 | [ECS Capacity Providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html) |
| 6 | Wrote ADR-006: chose ECS on EC2 over Fargate GPU (Fargate has no official GPU option at the time). | 04/07/2026 | 04/07/2026 | - |
| 7 | Sprint retro: security posture visibly stronger; Week 11 begins the ECS migration. | 05/07/2026 | 05/07/2026 | - |

### Week 10 Achievements

IAM policies down to ~40% of the old surface, all wildcards gone. Secrets Manager rotation runs automatically. GuardDuty flagged 2 unusual API calls from foreign IPs on day one — decided to keep it permanently on. ECS on EC2 spec is ready for Week 11.

### Challenges & Lessons

IAM audits are the most tedious task and absolutely required before go-live. `s3:*` is a slow-burning bomb — if a key leaks, an attacker wipes the whole bucket. Reminder to self: every new policy starts with the minimum resource and action, no copy-pasted wildcards from tutorials.

### Next Week Plan

Migrate BE to ECS + ASG + SQS. Write the SQS worker spec. Lock the autoscale policy.
