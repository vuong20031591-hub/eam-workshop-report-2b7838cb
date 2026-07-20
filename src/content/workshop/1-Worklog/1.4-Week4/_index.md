---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

Security Groups and S3 week. Both look dull on the surface. Both hurt if you get the conventions wrong.

I cut `UPS-6` and `UPS-7` into small tickets per service, then reviewed the SG matrix (who is allowed to talk to whom, on which port). The first draft opened Redis to the internet, so it went back. The S3 PRs were mostly fine, I just made sure block-public-access was on for every bucket by default and did not depend on someone remembering.

On my own I picked the bucket naming (`upscale-<env>-<purpose>` for input, output, artifacts, logs), wrote a lifecycle rule that pushes objects to Glacier after 30 days and deletes log buckets after 90, and produced a shared bucket policy template. Then a short walkthrough with the team so the SG matrix was not just a diagram nobody read.

By Friday the SG matrix and the S3 conventions were merged, and new buckets started following the template without me babysitting each PR.

One small surprise: two people did not realise ALB to ECS still needs an SG rule even inside the VPC. Fair. I added a note about it in the ADR.

Next week is chapter 5.5. EFS for shared model weights, ECR for container images.
