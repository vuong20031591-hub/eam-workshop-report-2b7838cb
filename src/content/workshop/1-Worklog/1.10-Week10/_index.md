---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Week 10 Objectives

- Package FE, BE and the worker into clean Docker images that don't rely on the dev machine.
- Bring staging up on ECS Fargate and move images off the filesystem into S3.
- Give the team a staging domain so reviewing does not require running things locally.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Write multi-stage Dockerfiles for FE (Vite build) and BE (FastAPI + uvicorn). | 22/06/2026 | 22/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| Tue | Split the inference worker into its own image with a tight entrypoint. | 23/06/2026 | 23/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| Wed | Push images to ECR, define tasks and services on ECS Fargate. | 24/06/2026 | 24/06/2026 | [Amazon ECR](https://000017.awsstudygroup.com/) |
| Thu | Move the backend from temp storage to S3 and issue presigned URLs so FE uploads directly. | 25/06/2026 | 25/06/2026 | [Amazon S3](https://000010.awsstudygroup.com/) |
| Fri | Put an ALB in front of the service, attach a staging domain, enable HTTPS via ACM. | 26/06/2026 | 26/06/2026 | [Application Load Balancer](https://000017.awsstudygroup.com/) |

### Week 10 Results

- Three images build in CI and behave the same on the dev machine and on Fargate.
- Images no longer live inside the container; S3 is now the single storage layer.
- Staging has a stable HTTPS URL and reviews stop requiring local setup.

### Challenges & Lessons Learned

- **Challenge:**
  - First presigned URL came back 403 because bucket CORS did not allow PUT from the FE origin.
- **Solution:**
  - Read the S3 AccessControl and CORS pages carefully and set AllowedMethods and AllowedOrigins correctly.
- **Lesson:**
  - S3 stacks several policy layers; a 403 rarely lives where you first look.

### Plan for Next Week

- SQS as the job queue between BE and worker.
- Redis for transient job state and progress.
- SSE to push progress to the FE instead of polling.
