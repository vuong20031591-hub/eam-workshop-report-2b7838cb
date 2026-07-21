---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives

- Learn Amazon DynamoDB architecture and core operations.
- Understand Amazon ElastiCache and deploy a cache cluster.
- Compare NoSQL and in-memory caching in real scenarios.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference Material |
| --- | --- | --- | --- | --- |
| Mon | Study Amazon DynamoDB architecture, tables, items, partitions, and indexes. | 22/05/2026 | 22/05/2026 | [Amazon DynamoDB](https://000060.awsstudygroup.com/) |
| Tue | Create DynamoDB tables and perform CRUD operations. | 25/05/2026 | 25/05/2026 | [DynamoDB CRUD](https://000060.awsstudygroup.com/) |
| Wed | Learn Amazon ElastiCache fundamentals and supported engines. | 26/05/2026 | 26/05/2026 | [Amazon ElastiCache](https://000061.awsstudygroup.com/) |
| Thu | Deploy an ElastiCache cluster and connect it to an application. | 27/05/2026 | 27/05/2026 | [ElastiCache Cluster](https://000061.awsstudygroup.com/) |
| Fri | Review DynamoDB and ElastiCache, summarize when to use NoSQL vs in-memory cache. | 28/05/2026 | 28/05/2026 | [ElastiCache](https://000061.awsstudygroup.com/) |

### Week 6 Achievements

- Created DynamoDB tables and performed CRUD operations successfully.
- Deployed an ElastiCache cluster and connected it from a sample application.
- Understood the differences between NoSQL storage (DynamoDB) and in-memory caching (ElastiCache).

### Challenges & Lessons Learned

- **Challenge:**
  - Designing DynamoDB partition keys / indexes to avoid hot partitions and poor query performance.
- **Solution:**
  - Follow the awsstudygroup lab, model access patterns first, then choose the partition/sort key accordingly.
- **Lesson:**
  - NoSQL and cache are powerful when the data model matches the real access patterns of the application.

### Plan for Next Week

- Continue exploring serverless services (Lambda, API Gateway).
- Start integrating DynamoDB with a simple Lambda-based backend.
- Combine monitoring (CloudWatch) with the serverless demo.
