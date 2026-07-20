---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

### Focus

Redis and SQS. The two pieces that decide whether the system stays responsive under load.

### What I did

- Split the work into `UPS-9` (Redis) and `UPS-10` (SQS) with clear owners.
- Chaired a design session on the queue shape: one main queue plus a dead-letter queue with a redrive after 3 attempts, visibility timeout matched to the p95 upscale time.
- Reviewed the Redis config PR, pushed back on a single-node setup and asked for multi-AZ.
- Reviewed the worker PR that consumes SQS, flagged a missing message-delete on failure path.
- Hands-on: wrote the job message schema (JSON: job_id, s3_input, s3_output, params, submitted_at), the retry policy, and the cache key convention.

### Result

Queue and cache are in place with a schema everyone codes against. DLQ visible on the CloudWatch board so we notice failures early.

### Friction

Visibility timeout was set too low at first, so long jobs got retried while still running. Bumped to 15 minutes and documented why.

### Next week

Chapter 5.7. Stand up the ECS cluster and get the first task running.
