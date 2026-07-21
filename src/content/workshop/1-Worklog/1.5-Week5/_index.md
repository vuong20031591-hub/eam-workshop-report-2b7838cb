---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Week 5 Objectives

- Read real EC2 metrics and logs in CloudWatch, not just from slides.
- Have at least one working alarm that actually delivers email on violation.
- Move repetitive Console work into the AWS CLI to build the muscle memory.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Install the CloudWatch Agent on EC2 and push memory and disk metrics up. | 18/05/2026 | 18/05/2026 | [Amazon CloudWatch](https://000013.awsstudygroup.com/) |
| Tue | Create an alarm at CPU > 70% for 5 minutes wired to SNS email. | 19/05/2026 | 19/05/2026 | [CloudWatch Alarms](https://000013.awsstudygroup.com/) |
| Wed | Ship application logs into CloudWatch Logs and write a simple filter. | 20/05/2026 | 20/05/2026 | [CloudWatch Logs](https://000013.awsstudygroup.com/) |
| Thu | Configure the AWS CLI with a named profile and default region. | 21/05/2026 | 21/05/2026 | [AWS CLI](https://000014.awsstudygroup.com/) |
| Fri | Write short CLI scripts: list buckets, copy files, describe instances. | 22/05/2026 | 22/05/2026 | [AWS CLI](https://000014.awsstudygroup.com/) |

### Week 5 Results

- A CloudWatch dashboard exists for one EC2 and the trend lines are readable at a glance.
- The alarm actually emailed me when I intentionally loaded the CPU, not just on paper.
- App logs land in CloudWatch and I can grep them with filter patterns.
- CLI is now the reflex for small tasks, saving me a browser tab.

### Challenges & Lessons Learned

- **Challenge:**
  - First install of the CloudWatch Agent hit an IAM permission gap; the agent stayed silent instead of erroring loudly.
- **Solution:**
  - Turned on the agent's debug log, read the first AccessDenied line, added the minimum policy and moved on.
- **Lesson:**
  - When an agent is silent, don't guess, open its own logs first.

### Plan for Next Week

- DynamoDB: design around access patterns instead of SQL tables.
- ElastiCache Redis: measure read latency before and after caching.
- Get ready mentally for the project phase.
