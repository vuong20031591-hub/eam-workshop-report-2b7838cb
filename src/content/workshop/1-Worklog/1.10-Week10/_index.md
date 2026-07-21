---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

Deployment week. Docker for everything, ECS/Fargate for the runtime, S3 for the images. This is where the app finally leaves my laptop. `UPS-10` on Linear.

I wrote the Dockerfiles for both services. The frontend one is small and boring (`node` build, `nginx` runtime). The backend one is where I spent real time, because the models bring a stack of Python and CUDA-ish dependencies with them and I did not want the image to end up eight gigabytes for no reason. Multi-stage build, only the runtime layer in the final image, and it landed in a size I can live with.

On the AWS side I did the ECS/Fargate setup pretty much straight from the FCAJ material. Task definition for each service, a service in front of each task, one target group per service behind the ALB from the earlier chapter. First deploy went out, tasks came up, then died a few minutes later because the CPU-only container was OOM-killed during a large image inference. Bumped the memory and moved on.

S3 came in for input and output images. The backend now uploads to `upscale-<env>-input`, the worker reads from there, writes to `upscale-<env>-output`, and the frontend fetches the result by URL. Set Block Public Access on both buckets and only signed URLs go out.

On the team side, one big call: we agreed that GPU workers wait until next week. This week is proving the deployment shape works, not squeezing performance.

Next week: SQS, Redis, and SSE for realtime progress.
