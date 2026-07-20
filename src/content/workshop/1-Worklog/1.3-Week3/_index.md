---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

### Week 3 Objectives

First week actually touching a real GPU: launch an EC2 g4dn.xlarge, attach an IAM role instead of an access key, install NVIDIA drivers and PyTorch CUDA. Once the box is up, write `ModelManager` (Singleton, lazy-load from S3, cache on the EBS volume) and the `/upscale/ai` endpoint that handles multipart uploads and puts the input on S3 under `tmp/`.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Launch **EC2 g4dn.xlarge** (NVIDIA T4 16GB, Ubuntu 22.04 Deep Learning AMI), attach EBS gp3 100GB. | 05/05/2026 | 05/05/2026 | [EC2 G4](https://aws.amazon.com/ec2/instance-types/g4/) |
| 2 | Attach **IAM Role** `EC2-Upscale-Role` to the instance (S3 read/write on `upscale-io`) to avoid access keys. | 06/05/2026 | 06/05/2026 | [IAM Roles for EC2](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html) |
| 3 | Install `nvidia-smi`, PyTorch 2.4 + CUDA 12.4, verify FP16 inference. | 07/05/2026 | 08/05/2026 | - |
| 4 | Write `ModelManager` Singleton: `load()` downloads from S3 → `/opt/weights/`, keeps model in memory. | 09/05/2026 | 10/05/2026 | - |
| 5 | Write the validator: max 10MB, extensions `jpg/png/webp`, verified with Pillow. | 11/05/2026 | 11/05/2026 | - |
| 6 | Endpoint `/upscale/ai` (POST multipart) → upload input `tmp/{uuid}.png` to S3. | 12/05/2026 | 12/05/2026 | - |
| 7 | End-to-end test: one 1080p image → x4 → return `output/{uuid}.png` as a presigned URL good for 1h. | 13/05/2026 | 13/05/2026 | [S3 Presigned URL](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html) |

### Week 3 Achievements

The GPU box stayed stable overnight. Model cold-start is around 4.2s including the weight download from S3. `/upscale/ai` runs end to end: a 1080p image goes to 4K in roughly 5.8s. Presigned URLs work, so FE never needs to know the bucket layout.

### Challenges & Lessons

The most wallet-painful bit is cost: g4dn.xlarge runs about $0.526/hour, and 24/7 would be a bill worth explaining. I use AWS Instance Scheduler to stop the box at 22:00 and start it at 08:00, which cuts roughly 60%. Beyond money, the week confirmed two other things: an IAM Role on EC2 is always safer than a hard-coded access key, and presigned URLs keep bucket permissions out of FE entirely.

### Next Week Plan

Write `/upscale/standard` running LANCZOS on CPU — no GPU needed. Add an SSE progress stream at `/upscale/ai/stream`. Start the FE bootstrap.
