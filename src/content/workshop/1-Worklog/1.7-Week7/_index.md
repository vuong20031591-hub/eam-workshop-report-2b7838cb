---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

### Week 7 Objectives

Chapter 5.5 Application, second half: create the ECS cluster on EC2, register task definitions, and get the API service running behind the cluster. This is the biggest single step of the whole workshop for me.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Created ECS cluster `upscale-cluster` (EC2 launch type). | 31/05/2026 | 31/05/2026 | [ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/) |
| 2 | Created a launch template and Auto Scaling Group `upscale-gpu-asg` with `g4dn.xlarge`. | 01/06/2026 | 01/06/2026 | [ASG](https://docs.aws.amazon.com/autoscaling/ec2/userguide/) |
| 3 | Registered the ASG as a capacity provider on the ECS cluster. | 02/06/2026 | 02/06/2026 | - |
| 4 | Wrote the `upscale-api` task definition (image, env vars, EFS mount). | 03/06/2026 | 03/06/2026 | - |
| 5 | Created the `upscale-api` service and watched the first task move from PROVISIONING to RUNNING. | 04/06/2026 | 04/06/2026 | - |
| 6 | Ran a health check curl from inside the VPC and got the expected JSON back. | 05/06/2026 | 05/06/2026 | - |
| 7 | Closed `UPS-8` and `UPS-9` on Linear. Sprint retro on the Linear board. | 06/06/2026 | 06/06/2026 | - |

### Week 7 Achievements

The API is running on ECS. The GPU instance is picked up by the cluster automatically. When I stop the task, ECS spins up a new one on its own. First time I saw self-healing in action.

### Challenges & Lessons

My first task definition kept failing with `CannotPullContainerError`. It was the execution role missing ECR read permission. Reading the "Events" tab of the service (instead of guessing) is the single most useful ECS debugging habit.

### Next Week Plan

Chapter 5.6 Access: put an ALB in front of the service. Work under `UPS-10`.
