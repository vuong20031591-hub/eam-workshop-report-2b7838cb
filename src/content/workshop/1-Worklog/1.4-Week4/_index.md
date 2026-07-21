---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Week 4 Objectives

- Feel what 'managed' really means with RDS by bringing up a small Postgres and connecting from real code.
- Read carefully through automated backups, snapshots, Multi-AZ versus read replicas even without using them yet.
- Play with Lightsail to see the friendlier end of the AWS experience.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Create an RDS Postgres db.t3.micro inside the VPC, using the default subnet and parameter groups. | 11/05/2026 | 11/05/2026 | [Amazon RDS](https://000011.awsstudygroup.com/) |
| Tue | Reach it from an EC2 in the same VPC, tighten the SG to port 5432 only, run a few queries. | 12/05/2026 | 12/05/2026 | [Amazon RDS](https://000011.awsstudygroup.com/) |
| Wed | Enable automated backups, take a manual snapshot and restore it to a second instance. | 13/05/2026 | 13/05/2026 | [Amazon RDS Backup](https://000011.awsstudygroup.com/) |
| Thu | Compare Multi-AZ against read replicas and note when to pick which. | 14/05/2026 | 14/05/2026 | [RDS Multi-AZ](https://000011.awsstudygroup.com/) |
| Fri | Spin up a sample app on Lightsail for a quick contrast with EC2. | 15/05/2026 | 15/05/2026 | [Amazon Lightsail](https://000012.awsstudygroup.com/) |

### Week 4 Results

- Postgres up and reachable, SG tightened to only the source that needs it.
- First manual snapshot taken and restored once, so the flow is not just theory.
- Clear mental table of Multi-AZ versus read replica for later reference.
- Lightsail is delightfully fast for small apps but does not replace EC2 for real work.

### Challenges & Lessons Learned

- **Challenge:**
  - First attempt the SG was too closed, the client dropped, and I blamed RDS before realising it was the network.
- **Solution:**
  - Trace back from the client error toward RDS: telnet the port, check SGs both directions, verify subnet routing.
- **Lesson:**
  - For databases, suspect the network before the engine; it is right more often than not.

### Plan for Next Week

- CloudWatch for basic metrics, logs and alarms.
- Live in the AWS CLI for repetitive work instead of clicking around.
- Warm up the vocabulary before diving into DynamoDB.
