---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Week 4 Objectives

- Understand Amazon RDS concepts and deploy a managed relational database.
- Explore Amazon Lightsail and compare it with Amazon EC2.
- Consolidate best practices for choosing between RDS and Lightsail.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference Material |
| --- | --- | --- | --- | --- |
| Mon | Study Amazon Relational Database Service (RDS), understand database concepts and deployment options. | 08/05/2026 | 08/05/2026 | [Amazon RDS](https://000005.awsstudygroup.com/) |
| Tue | Create an Amazon RDS instance and configure database connectivity. | 11/05/2026 | 11/05/2026 | [Amazon RDS](https://000005.awsstudygroup.com/) |
| Wed | Explore Amazon Lightsail services and compare them with Amazon EC2. | 12/05/2026 | 12/05/2026 | [Amazon Lightsail](https://000045.awsstudygroup.com/) |
| Thu | Deploy a simple application using Amazon Lightsail. | 13/05/2026 | 13/05/2026 | [Amazon Lightsail](https://000045.awsstudygroup.com/) |
| Fri | Review RDS and Lightsail architecture, summarize key differences and best practices. | 14/05/2026 | 14/05/2026 | [Amazon Lightsail](https://000045.awsstudygroup.com/) |

### Week 4 Achievements

- Successfully deployed an Amazon RDS instance and connected to it from a client.
- Deployed a simple application on Amazon Lightsail with public accessibility.
- Understood the trade-offs between managed RDS databases and self-managed EC2/Lightsail deployments.

### Challenges & Lessons Learned

- **Challenge:**
  - Configuring RDS Security Groups and network access so that the database is reachable only from the intended source.
- **Solution:**
  - Follow the awsstudygroup lab, only open the required port (e.g., 3306) to a specific Security Group or IP.
- **Lesson:**
  - Managed services like RDS and Lightsail speed up deployment, but network and access configuration still matters.

### Plan for Next Week

- Learn Amazon CloudWatch for monitoring and alerting.
- Install and use AWS CLI to manage AWS resources from the terminal.
- Automate basic operational tasks with AWS CLI.
