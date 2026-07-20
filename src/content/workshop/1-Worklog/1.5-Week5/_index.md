---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

Shared storage week. EFS for the model weights every worker needs, ECR for the images we ship.

I split `UPS-8` into EFS provisioning, the mount plan, and the ECR repo layout. The interesting decision was where model weights should live. Baking them into the image is the obvious option but makes rebuilds slow and images huge. EFS keeps them shared and warm across workers. We went with EFS for the weights and left the image for code only. It felt right and so far it is holding up.

PR review this week: the first EFS access point config gave world-writable permissions, which is not what we want on a shared mount, so that went back. The ECR lifecycle policy PR was fine after we agreed to keep the last 20 tagged images and drop untagged ones after 7 days.

On my own I wrote the mount convention (`/mnt/models` on every worker), the image tag convention (`<service>:<git-sha>` plus a moving `staging` tag so we can promote without rebuilding), and updated the runbook accordingly.

The first end-to-end mount test hung, which was fun for about ten minutes until I remembered the SG matrix from `UPS-6` did not have an NFS rule yet. Added a regression note to the SG doc so we do not do that again.

Next week is chapter 5.6. Redis for cache, SQS for the job queue.
