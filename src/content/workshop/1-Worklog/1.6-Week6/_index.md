---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives

- Learn to think from queries back to schema with DynamoDB rather than carry SQL habits over.
- Run ElastiCache Redis for real and measure the gap between a slow computation and its cached version.
- Read the AI Face Enhancement project intro so next week starts less cold.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Create a DynamoDB table with a partition key and sort key that fit three mock access patterns. | 25/05/2026 | 25/05/2026 | [Amazon DynamoDB](https://000015.awsstudygroup.com/) |
| Tue | Try a GSI for a secondary query and check consumed capacity to feel the cost. | 26/05/2026 | 26/05/2026 | [DynamoDB GSI](https://000015.awsstudygroup.com/) |
| Wed | Bring up ElastiCache Redis inside the VPC, connect from an EC2 in the same subnet. | 27/05/2026 | 27/05/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| Thu | Write a script that caches a slow function; measure miss versus hit timings. | 28/05/2026 | 28/05/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| Fri | Read the FCAJ project intro and note questions for the mentor. | 29/05/2026 | 29/05/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |

### Week 6 Results

- A DynamoDB table that serves a handful of real queries and shows me why I would redesign after seeing the first draft.
- Redis cut read time from hundreds of milliseconds to essentially instant on hot data.
- A concrete list of questions ready for day one of the project.

### Challenges & Lessons Learned

- **Challenge:**
  - The first DynamoDB table followed SQL instincts, and half the important queries needed a scan.
- **Solution:**
  - Wrote the access patterns down first, then chose PK/SK so those specific patterns worked.
- **Lesson:**
  - In DynamoDB the question 'what will I ask?' comes before 'what will I store?' — the opposite of SQL.

### Plan for Next Week

- Kick off the Upscale AI project with the team.
- Lock a draft architecture and split modules across the group.
- Get CI green early so it can protect us in the busy weeks ahead.
