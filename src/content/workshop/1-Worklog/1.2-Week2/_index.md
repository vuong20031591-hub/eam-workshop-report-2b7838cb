---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG (27/04/2026 – 29/04/2026)

Short week (only three working days) but a dense one. IAM in the first half, VPC and EC2 in the second.

I spent the first day and a half on IAM. Created Users, Groups, Roles, and Policies by hand, turned on MFA for the root account and then locked the root credentials in a place I would not accidentally touch again. The Least Privilege lab was the one that stuck with me. I wrote a policy, denied myself something on purpose, then read the error message until I understood exactly which line caused it. Sounds slow, but I learned more from that than from any diagram.

I nearly committed a long-lived access key to a personal repo while playing around. Caught it, rotated the key, and now I understand why the guides keep hammering that point.

VPC and EC2 was the other half. I did the guided lab, drew the default VPC on paper, then rebuilt one from scratch to see if I actually knew what each piece was for (I did not, entirely). Launched a small EC2 instance, SSH-ed in, ran a couple of commands, terminated it. Nothing exciting on its own, but a lot of my assumptions about "the cloud" quietly got corrected in that hour.

Next week: IAM Roles for EC2, Cloud9, and my first go at hosting a static site on S3.
