---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 Objectives

- Move jobs from BE to worker through SQS so inference no longer runs inside a request.
- Use Redis to hold job state and progress so the BE returns quickly without waiting.
- Push progress to the FE with SSE so the user sees a real progress bar.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Create the upscale-jobs SQS queue with a dead-letter queue and a sensible visibility timeout. | 29/06/2026 | 29/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| Tue | Change the BE to enqueue the job and return the job id immediately instead of waiting on the worker. | 30/06/2026 | 30/06/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |
| Wed | The worker consumes messages, runs enhance(), uploads outputs to S3 and writes status to Redis. | 01/07/2026 | 01/07/2026 | [Amazon ElastiCache](https://000016.awsstudygroup.com/) |
| Thu | Add an SSE endpoint /jobs/{id}/events that reads Redis and streams progress to the FE. | 02/07/2026 | 02/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Handle retries, timeouts and dead jobs: DLQ, clear logs, and a friendly FE error message. | 03/07/2026 | 03/07/2026 | [Amazon SQS](https://000018.awsstudygroup.com/) |

### Week 11 Results

- The upload request returns under 200 ms, no longer tied to inference time.
- FE progress is smooth over SSE, fully replacing the polling loop.
- Broken jobs land in the DLQ, can be replayed by hand, and no work goes missing.

### Challenges & Lessons Learned

- **Challenge:**
  - SSE through the ALB dropped periodically because of the default idle timeout, so the user saw progress stall.
- **Solution:**
  - Raise the ALB idle timeout and send an SSE comment heartbeat every 15 seconds to keep the connection alive.
- **Lesson:**
  - Long-lived connections through a load balancer need both sides to agree, not just app code.

### Plan for Next Week

- Final end-to-end testing with real photos from a few test users.
- Prepare the demo: script, running order, and a fallback.
- Clean up resources next week so the demo does not keep burning money.
