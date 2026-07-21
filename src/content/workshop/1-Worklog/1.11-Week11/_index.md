---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

Async and realtime week. The synchronous request-response flow works, but a big upscale takes long enough that the frontend was basically staring at a spinner and hoping. Time to fix that. `UPS-11` on Linear.

I split the work into three pieces: SQS for the job queue, Redis for the per-job progress state, and SSE (server-sent events) so the browser gets progress pushed instead of polling.

On the backend, `/enhance` no longer runs the models directly. It writes a job onto SQS and returns a job id. A worker process pulls from SQS, runs the pipeline, and updates a Redis key with progress (`queued`, `running:XX%`, `done`, `failed`). A second endpoint streams that key over SSE so the frontend sees the bar move.

On the frontend, I replaced the spinner with a real progress bar that reads from the SSE stream, plus a small state label so the user knows whether the job is queued behind others or actively running. Small change, huge difference in how the app feels.

A couple of things bit me. Visibility timeout on SQS was too low at first, so long jobs got redelivered while they were still running. Bumped it and wrote down the reasoning so nobody "optimises" it back down. Redis TTLs also needed thinking through, because leaking a key per job forever adds up.

I also added a dead-letter queue and a simple retry policy of three attempts, because "silent failure into the void" is not a feature.

Next week: final testing, technical documentation, and demo.
