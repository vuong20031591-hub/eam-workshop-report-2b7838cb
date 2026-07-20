---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

### Focus

Cleanup, final report, handover. Close the internship with the account tidy and the knowledge transferred.

### What I did

- Turned `UPS-18` into cleanup, report, and handover sub-tickets.
- Ran cleanup against chapter 5.10 in reverse order (CloudFront → WAF → ALB → ECS → EFS → Redis → SQS → S3 → VPC → IAM), keeping only the artefacts we want to retain (logs export, IaC repo, doc site).
- Reviewed the final billing to confirm nothing is left running.
- Chaired the retrospective with the team: what worked, what to keep, what to drop next time.
- Hands-on: wrote the final internship report, updated the doc site so a new joiner can rebuild the stack from scratch, and produced a short handover deck.

### Result

Account clean, bill drops to near zero the next day. Report submitted, doc site up to date, retrospective notes shared. Internship closed.

### Friction

Manual cleanup is error-prone. I noted for the retrospective that next time the stack should be Terraform end to end so cleanup is one command.

### Next

Wrap-up.
