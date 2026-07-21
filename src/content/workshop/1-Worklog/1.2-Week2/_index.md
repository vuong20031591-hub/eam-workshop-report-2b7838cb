---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Week 2 Objectives

- Create IAM users and groups by hand instead of reading about them, and tighten least privilege on my own account.
- Build a minimal VPC from scratch: public and private subnets, route tables, IGW.
- Launch a small EC2, SSH in with my own key, then terminate it cleanly.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Create a personal IAM user for daily work, enable MFA, stop reaching for the root user. | 27/04/2026 | 27/04/2026 | [AWS IAM](https://000002.awsstudygroup.com/) |
| Tue | Group users by role, attach AWS managed policies, write one small inline policy. | 28/04/2026 | 28/04/2026 | [IAM Policies](https://000002.awsstudygroup.com/) |
| Wed | Sketch the default VPC on paper, then build a 2-AZ VPC in the Console. | 29/04/2026 | 29/04/2026 | [Amazon VPC](https://000003.awsstudygroup.com/) |
| Thu | Configure public and private subnets, attach the IGW, write route tables for each. | 30/04/2026 | 30/04/2026 | [VPC Networking](https://000003.awsstudygroup.com/) |
| Fri | Launch a t3.micro EC2 in the public subnet, SSH with a fresh key, then terminate. | 01/05/2026 | 01/05/2026 | [Amazon EC2](https://000004.awsstudygroup.com/) |

### Week 2 Results

- Daily work runs on a personal IAM user with MFA; root stays locked away.
- I can read a JSON policy and point to the line denying me.
- The public–private slice of a VPC is clear enough that I can redraw it without a reference.
- SSH into my own EC2 and terminate it without worrying I left something behind.

### Challenges & Lessons Learned

- **Challenge:**
  - Route tables and the IGW tripped me up first, the kind of no-internet symptom that is small but slippery.
- **Solution:**
  - Check Security Group, NACL, a 0.0.0.0/0 route and a public IP in that order and stop at the first thing that fails.
- **Lesson:**
  - Reading the error message closely usually beats reopening the docs from the top.

### Plan for Next Week

- IAM Roles on EC2 so access keys leave the instance for good.
- Look at Cloud9 briefly and see if it fits my workflow.
- Host a first static site on S3.
