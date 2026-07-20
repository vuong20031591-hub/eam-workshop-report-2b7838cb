---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

### Week 10 Objectives

Chapter 5.8 Observability. Send logs from ECS to CloudWatch, build a small dashboard, and add one alarm so I know when the API is having a bad day.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Created CloudWatch log groups `/ecs/upscale-api` and `/ecs/upscale-postgres`. | 21/06/2026 | 21/06/2026 | [CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/) |
| 2 | Confirmed the ECS task is streaming stdout into the log group. | 22/06/2026 | 22/06/2026 | - |
| 3 | Built a CloudWatch dashboard with 4 widgets: request count, 5xx rate, CPU, GPU util. | 23/06/2026 | 23/06/2026 | - |
| 4 | Created one alarm on 5xx rate > 5% for 5 minutes. | 24/06/2026 | 24/06/2026 | - |
| 5 | Wired the alarm to my email through SNS. | 25/06/2026 | 25/06/2026 | [SNS](https://docs.aws.amazon.com/sns/latest/dg/) |
| 6 | Broke the app on purpose (killed a task) to see the alarm actually fire. | 26/06/2026 | 26/06/2026 | - |
| 7 | Closed `UPS-12` on Linear, pulled `UPS-13` (deploy the frontend). | 27/06/2026 | 27/06/2026 | - |

### Week 10 Achievements

I can watch the API from a single tab. The alarm works end to end: kill a task, get an email. This is the first week the project felt like something I could operate, not just build.

### Challenges & Lessons

Logs did not show up at first because the task role did not have `logs:CreateLogStream`. The error hides in the "Stopped reason" of the task. Lesson: check the task events before opening the code.

### Next Week Plan

Chapter 5.9 Deployment: build the frontend, upload to S3, invalidate CloudFront. Track on `UPS-13`.
