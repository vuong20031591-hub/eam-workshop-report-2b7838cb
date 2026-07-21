---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 Objectives

- As lead, drive the split of BE and worker across SQS so inference no longer blocks a request.
- Decide on Redis for job state and progress, and review the change that lets BE return immediately.
- Align FE and BE on SSE for progress so users see a real progress bar instead of polling.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Design the upscale-jobs SQS queue with DLQ and sensible visibility timeout, sign off the IaC PR. | 29/06/2026 | 29/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| Tue | Review the BE change that enqueues jobs and returns job id immediately instead of waiting on the worker. | 30/06/2026 | 30/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| Wed | Pair with the worker owner on consuming messages, running enhance(), uploading to S3 and writing status to Redis. | 01/07/2026 | 01/07/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| Thu | Spec the SSE endpoint /jobs/{id}/events with FE and BE and review the PR that reads Redis and streams progress. | 02/07/2026 | 02/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Own the retry/timeout/DLQ playbook and make sure the FE surfaces a friendly error message. | 03/07/2026 | 03/07/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |

### Week 11 Results

- The upload request returns under 200 ms, no longer tied to inference time.
- FE progress is smooth over SSE, fully replacing the polling loop the team was using.
- Broken jobs land in the DLQ with a replay path I documented so nothing gets lost.

### Challenges & Lessons Learned

- **Challenge:**
  - SSE through the ALB dropped periodically because of the default idle timeout, and users saw progress stall.
- **Solution:**
  - I agreed with infra to raise the ALB idle timeout and asked BE to send an SSE comment heartbeat every 15 seconds.
- **Lesson:**
  - As lead I need to notice when a bug crosses team boundaries, and get both sides in the same thread quickly.

### Plan for Next Week

- Final end-to-end testing with real photos from a few test users.
- Prepare the demo: script, running order, and a fallback.
- Clean up resources next week so the demo does not keep burning money.
