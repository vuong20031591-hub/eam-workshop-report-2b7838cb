---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

Redis and SQS week. These are the pieces that decide whether the system feels responsive when the queue gets long.

`UPS-9` (Redis) and `UPS-10` (SQS) went out with clear owners. Then a design session for the queue shape. We agreed on one main queue plus a dead-letter queue with a redrive after three attempts, and a visibility timeout that tracks the p95 upscale time rather than an arbitrary number. If a worker crashes the message reappears, but a long-running job does not get duplicated behind its own back.

The Redis PR came in as a single-node setup. I pushed back and asked for multi-AZ. It costs more, but a single node is not something I want to explain to anyone at 2am. The worker PR that consumes SQS was fine except for a missing message delete on the failure path, which would have quietly retried forever. Flagged, fixed, merged.

On my own I wrote the job message schema (job_id, s3_input, s3_output, params, submitted_at), the retry policy, and the cache key convention so nobody invents their own.

The one thing that bit us: I set the visibility timeout too low at first, so long jobs got retried while they were still running. Bumped to 15 minutes and wrote down the reasoning so the next person does not "optimise" it back down.

Next week is chapter 5.7. Stand up the ECS cluster and run the first real task.
