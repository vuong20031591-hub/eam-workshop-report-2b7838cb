---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

### Week 1 Objectives

- Get a fresh AWS account running and stop feeling lost inside the Management Console.
- Understand why ap-southeast-1 makes sense as a base Region and what Free Tier actually covers.
- Configure AWS Budgets with email alerts on day one so learning does not leave surprise charges.
- Walk through the Billing Dashboard and the Support tiers so I know where to look later.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Register the AWS account, verify identity, take the first steps in the Console. | 20/04/2026 | 20/04/2026 | [AWS Account Setup](https://000001.awsstudygroup.com/) |
| Tue | Read up on Regions, Availability Zones and Free Tier; pick a working Region. | 21/04/2026 | 21/04/2026 | [AWS Basics](https://000001.awsstudygroup.com/) |
| Wed | Create a small monthly Budget with threshold email alerts. | 22/04/2026 | 22/04/2026 | [AWS Budgets](https://000007.awsstudygroup.com/) |
| Thu | Explore the Billing Dashboard and read pricing pages for services I plan to use. | 23/04/2026 | 23/04/2026 | [AWS Billing](https://000007.awsstudygroup.com/) |
| Fri | Compare Support tiers and open a practice support case. | 24/04/2026 | 24/04/2026 | [AWS Support](https://000009.awsstudygroup.com/) |

### Week 1 Results

- Account is up, MFA on the root user, root credentials tucked away out of daily reach.
- Comfortable choosing a Region by latency and price rather than clicking whichever loads first.
- Budget and email alert live, and a simulated overrun actually delivered mail.
- Rough mental map of Billing and Support so I know where to go when something breaks.

### Challenges & Lessons Learned

- **Challenge:**
  - The first day drops too many new names at once and everything sounds familiar without actually sticking.
- **Solution:**
  - Follow the awsstudygroup series in order and note two lines per service: what it is, when I would use it.
- **Lesson:**
  - The first thing to do in a new account is set a Budget, not poke at services.

### Plan for Next Week

- IAM in detail: Users, Groups, Policies, Roles and least-privilege habits.
- Rebuild a VPC by hand to actually understand subnets, route tables and the IGW.
- Spin up a small EC2, SSH in, terminate it myself.
