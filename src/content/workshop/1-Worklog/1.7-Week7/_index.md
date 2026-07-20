---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

### Focus

ECS on EC2. The compute layer where FastAPI and the CodeFormer worker actually run.

### What I did

- Broke `UPS-11` into: cluster, ASG with capacity provider, task definition for FastAPI, task definition for the worker, service registration.
- Chaired a sizing discussion: `t3.medium` on-demand for FastAPI, `g4dn.xlarge` spot for the worker. Wrote the reasoning into an ADR so no one revisits it every sprint.
- Reviewed both task definitions, sent one back because it did not mount EFS at `/mnt/models`.
- Reviewed the capacity provider PR, made sure spot interruption drains correctly.
- Hands-on: chose the scaling policy (target tracking on CPU for API, queue depth for worker), wrote the deploy checklist, and paired on the first end-to-end task run.

### Result

Cluster live, both services registered, first upscale job ran end to end from SQS to S3. Slow, but working.

### Friction

Spot interruption in the middle of a job. The worker now catches SIGTERM and re-queues the current job before shutdown.

### Next week

Chapter 5.8. Put ALB in front so the API is reachable properly.
