---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

ECS on EC2 week. The compute layer where FastAPI and the CodeFormer worker actually run, so most of what we did in the last six weeks was setup for this.

`UPS-11` broke into the cluster, an ASG with a capacity provider, task definitions for FastAPI and the worker, and service registration. I ran the sizing discussion and we landed on `t3.medium` on-demand for the API and `g4dn.xlarge` spot for the worker. Spot for the worker is a real cost saver as long as we handle interruption properly, and the reasoning went into an ADR so we do not re-debate it every sprint.

Review this week: one task definition came in without the EFS mount at `/mnt/models`, which means the worker would boot fine and then crash on the first inference. Sent back. The capacity provider PR was ok but I wanted the spot drain path spelled out, so we added that before merging.

On my own I picked the scaling policies (target tracking on CPU for the API, queue depth for the worker), wrote the deploy checklist, and paired on the first end-to-end task run so I could see the whole flow with my own eyes.

Cluster is live, both services registered, and the first upscale job ran end to end from SQS to S3. It is slow, but it works. That is enough for this week.

The one real bite: a spot interruption landed in the middle of a job during testing. The worker now catches SIGTERM and re-queues the current message before it goes down. Not glamorous, but the alternative is losing user work.

Next week is chapter 5.8. Put an ALB in front so the API is reachable properly.
