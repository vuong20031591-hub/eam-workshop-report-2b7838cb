---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

### Focus

Shared storage. EFS for model weights the workers all need, ECR for the images we ship.

### What I did

- Split `UPS-8` into EFS provisioning, mount plan, and ECR repo layout.
- Chaired a short session on where model weights live: baked into the image (slow rebuild) vs on EFS (shared, warm). Went with EFS for weights, image only for code.
- Reviewed the EFS access-point config and pushed back on world-writable permissions.
- Reviewed the ECR lifecycle policy PR (keep last 20 tagged, expire untagged after 7 days).
- Hands-on: wrote the mount convention (`/mnt/models` on every worker), the image-tag convention (`<service>:<git-sha>` plus a moving `staging` tag), and updated the runbook.

### Result

Workers can pull weights from a single warm mount, and image storage does not grow forever. Every service now knows exactly where to push and pull from.

### Friction

First EFS mount test hung. Turned out to be a missing SG rule from `UPS-6`. Added a regression note to the SG matrix.

### Next week

Chapter 5.6. Redis for cache, SQS for the job queue.
