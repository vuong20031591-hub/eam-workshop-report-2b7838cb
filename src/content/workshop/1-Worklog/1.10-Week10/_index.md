---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Week 10 Objectives

- As lead, plan the container cutover for FE, BE and worker so nothing depends on any dev machine.
- Own the ECS Fargate migration decision, review the IaC PRs and move image storage to S3.
- Deliver a shared staging domain so review no longer requires running the app locally.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Review the multi-stage Dockerfiles for FE (Vite build) and BE (FastAPI + uvicorn), pair on trims. | 22/06/2026 | 22/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| Tue | Sign off on splitting the inference worker into its own image with a tight entrypoint. | 23/06/2026 | 23/06/2026 | [Amazon ECS](https://000017.awsstudygroup.com/) |
| Wed | Coordinate the ECR push and review the ECS Fargate task definitions and services PR. | 24/06/2026 | 24/06/2026 | [Amazon ECR](https://000017.awsstudygroup.com/) |
| Thu | Design the presigned-URL upload flow with BE, review the S3 migration PR end to end. | 25/06/2026 | 25/06/2026 | [Amazon S3](https://000010.awsstudygroup.com/) |
| Fri | Own the ALB + ACM setup, attach the staging domain and verify HTTPS with the team. | 26/06/2026 | 26/06/2026 | [Application Load Balancer](https://000017.awsstudygroup.com/) |

### Week 10 Results

- The three images build on CI and behave the same on dev machines and on Fargate.
- Images no longer live on the container filesystem, and S3 is the single source of truth.
- Staging has a stable HTTPS URL I shared with reviewers, cutting review friction visibly.

### Challenges & Lessons Learned

- **Challenge:**
  - The first presigned URL came back 403 because bucket CORS did not allow PUT from the FE origin, and the team was stuck.
- **Solution:**
  - I unblocked the pair by reading the S3 AccessControl and CORS pages with them and fixing AllowedMethods and AllowedOrigins together.
- **Lesson:**
  - As lead, jumping in to unblock a policy bug is often faster than waiting for a full-context handoff.

### Plan for Next Week

- SQS as the job queue between BE and worker.
- Redis for transient job state and progress.
- SSE to push progress to the FE instead of polling.
