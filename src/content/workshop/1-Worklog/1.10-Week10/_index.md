---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Week 10 Objectives

- Containerize frontend and backend using Docker.
- Deploy the containers to Amazon ECS/Fargate.
- Configure networking and verify the deployed system.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference Material |
| --- | --- | --- | --- | --- |
| Mon | Create Docker configuration for the frontend service. | 22/06/2026 | 22/06/2026 | [Docker Docs](https://docs.docker.com/) |
| Tue | Containerize the FastAPI backend and verify Docker execution. | 23/06/2026 | 23/06/2026 | [Docker Docs](https://docs.docker.com/) |
| Wed | Deploy frontend and backend containers to Amazon ECS/Fargate. | 24/06/2026 | 24/06/2026 | [Amazon ECS](https://docs.aws.amazon.com/ecs/) |
| Thu | Continue ECS deployment, configure networking and service settings. | 25/06/2026 | 25/06/2026 | [Amazon ECS](https://docs.aws.amazon.com/ecs/) |
| Fri | Verify the deployed system, test end-to-end workflow, and fix deployment issues. | 26/06/2026 | 26/06/2026 | [Amazon ECS](https://docs.aws.amazon.com/ecs/) |

### Week 10 Achievements

- Built Docker images for both frontend and backend successfully.
- Deployed the application on Amazon ECS/Fargate.
- Verified full end-to-end operation on the cloud environment.

### Challenges & Lessons Learned

- **Challenge:**
  - Configuring networking, security groups, and IAM roles for ECS/Fargate services.
- **Solution:**
  - Follow AWS reference architectures and grant least-privilege permissions per service.
- **Lesson:**
  - Container orchestration is powerful but requires careful network and security configuration.

### Plan for Next Week

- Implement Amazon SQS for asynchronous image processing.
- Integrate Redis for caching and SSE for real-time progress.
- Test and optimize the asynchronous workflow.
