---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

IAM week, plus a first taste of VPC and EC2. Still learning, still labs. As lead I mostly set the pace, held a short design chat, and reviewed what people had done. `UPS-2` on Linear.

The IAM labs I did myself. Creating Users, Groups, Roles, Policies, turning MFA on for the root account, then playing with Least Privilege by intentionally denying myself things and watching the error messages. That last part sounds silly but it is the fastest way to actually understand a policy. I also went through the "no long-lived access keys on laptops" lesson the hard way when I nearly committed one, then rotated it and moved on.

VPC and EC2 was the other half. I did the guided lab, drew the default VPC on paper, then did it again from scratch so I knew what every piece was for. Launching an EC2 instance, SSH-ing in, terminating it. Nothing fancy, but it clears up a lot of assumptions.

On the team side I wrote a short note on how we will use IAM (admin group, dev group, one service user for CI later, no root access keys ever) and pinned it in the repo. It is not an ADR yet, more of a working agreement. And I nudged people who kept reaching for `AdministratorAccess` in labs. Fine for a sandbox, not a habit I want travelling with us.

Next week: IAM Roles for EC2, Cloud9, and hosting a static site on S3.
