---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## WEEK 1 WORKLOG

### Focus

Kickoff. As team lead I need the project to have a clear shape before anyone writes code, so this week is mostly planning and reading.

### What I did

- Read the full workshop end to end and lifted chapter 5.1 into a one-page architecture summary the team can actually discuss.
- Broke the 12-week roadmap into epics on Linear and opened `UPS-1` (Planning) and `UPS-2` (Architecture doc) as the anchor tickets.
- Set project conventions: region `ap-southeast-1`, resource prefix `upscale-`, naming for envs (`dev`, `prod`), Git flow, PR template.
- Set up the working rhythm: daily 15-minute standup, weekly Monday planning, Friday review.
- Hands-on: drew the target architecture diagram (User → CloudFront → ALB → ECS with FastAPI + CodeFormer, SQS, Redis, S3) and wrote a first cost baseline.

### Result

Team has a shared picture of what we are building, a Linear board that maps to the workshop, and a set of conventions no one has to re-argue later.

### Friction

Scope was fuzzy at first. Half of week 1 went into cutting things out of scope, not adding them.

### Next week

Chapter 5.2 Prerequisites. I will chair the IAM design and get the account baseline standardised.
