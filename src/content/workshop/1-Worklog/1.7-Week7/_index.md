---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

### Week 7 Objectives

Package BE as a multi-stage Docker image on `nvidia/cuda:12.4-runtime`, push to Amazon ECR private repo `upscaler-be`. And swap the upload pattern to presigned POST so FE writes files directly to S3 instead of proxying through BE.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Write a multi-stage `Dockerfile`: builder installs deps → runtime on `nvidia/cuda:12.4-runtime-ubuntu22.04`, image ~2.1GB. | 10/06/2026 | 10/06/2026 | [Docker multi-stage](https://docs.docker.com/build/building/multi-stage/) |
| 2 | Create **ECR** repo `upscaler-be`, enable scan-on-push + immutable tags. | 11/06/2026 | 11/06/2026 | [Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/) |
| 3 | GitHub Actions: `aws ecr get-login-password | 12/06/2026 | 13/06/2026 | 12/06/2026 | - |
| 4 | Endpoint `/upload/presign` returns `{url, fields}` for **S3 Presigned POST**, capped at 10MB + content-type. | 14/06/2026 | 14/06/2026 | [Presigned POST](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html) |
| 5 | FE `UploadZone` uses presigned POST → S3 directly, then only sends `s3_key` to BE. | 15/06/2026 | 16/06/2026 | - |
| 6 | Bandwidth measurement: 40% less traffic through BE (no more 2MB proxying). | 17/06/2026 | 17/06/2026 | - |
| 7 | ECR scan: 0 CRITICAL, 2 HIGH (torch CVE), accepted with a note. | 18/06/2026 | 18/06/2026 | - |

### Week 7 Achievements

BE images now build reproducibly through CI, and ECR runs vulnerability scans automatically before I pull anything. Presigned POST slashes BE I/O, because the files no longer take the scenic route through my server.

### Challenges & Lessons

Even with PyTorch trimmed as much as I could, the `nvidia/cuda-runtime` image lands at about 2.1GB, and cold-start feels it — every scale-out drags a gig-plus down the wire. Accepting that for MVP and flagging week 11 to try the `slim` variant plus stripping CUDA libs I don't touch. The broader takeaway from the week is that presigned POST fits the serverless mindset well — separate compute from transfer, let each go its own way.

### Next Week Plan

Put API Gateway HTTP API in front of EC2 as a proxy. IAM role for ECS/EC2 to pull from ECR. More property tests for the presign endpoint.
