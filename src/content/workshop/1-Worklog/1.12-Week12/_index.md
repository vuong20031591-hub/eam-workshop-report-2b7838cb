---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

Last week. Cleanup, final report, handover. The goal is to close the internship with the account tidy and the knowledge in a place the next person can find.

I split `UPS-18` into cleanup, report, and handover. Cleanup ran against chapter 5.10 in reverse order: CloudFront, WAF, ALB, ECS, EFS, Redis, SQS, S3, VPC, IAM. Reverse is important. Delete the VPC first and half the other resources refuse to go until you fix the dependencies you just broke. I kept only the artefacts we want to retain, which is the exported logs, the IaC repo, and the doc site.

After that I read the billing page carefully to confirm nothing is quietly still running. This part is boring and skipping it costs real money.

I chaired the retrospective with the team. What worked, what to keep, what to drop next time. Hands-on I wrote the final internship report, updated the doc site so a new joiner can rebuild the stack from scratch by reading it in order, and put together a short handover deck.

Account is clean, the bill drops to near zero the next day, the report is in, the doc site is up to date, retrospective notes are shared. Internship closed.

If I did this again, manual cleanup would not be the way. It is error-prone and slow. Next time the stack should be Terraform end to end so cleanup is a single command instead of a checklist. That went into the retrospective as the top recommendation for the next cohort.
