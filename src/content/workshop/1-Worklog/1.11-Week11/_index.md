---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Week 11 Objectives

- Implement Amazon SQS for asynchronous image processing.
- Integrate Redis caching and Server-Sent Events (SSE) for real-time progress.
- Test and optimize the asynchronous workflow.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference Material |
| --- | --- | --- | --- | --- |
| Mon | Implement Amazon SQS to process image enhancement requests asynchronously. | 29/06/2026 | 29/06/2026 | [Amazon SQS](https://docs.aws.amazon.com/sqs/) |
| Tue | Complete SQS integration and verify message processing workflow. | 30/06/2026 | 30/06/2026 | [Amazon SQS](https://docs.aws.amazon.com/sqs/) |
| Wed | Integrate Redis for caching frequently accessed processing results. | 01/07/2026 | 01/07/2026 | [Redis Docs](https://redis.io/docs/) |
| Thu | Implement Server-Sent Events (SSE) to provide real-time processing progress. | 02/07/2026 | 02/07/2026 | [MDN - Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| Fri | Test the asynchronous workflow and optimize overall system performance. | 03/07/2026 | 03/07/2026 | [Amazon SQS](https://docs.aws.amazon.com/sqs/); [Redis Docs](https://redis.io/docs/) |

### Week 11 Achievements

- Integrated Amazon SQS to handle image processing requests asynchronously.
- Added Redis caching to reduce redundant processing and improve response time.
- Implemented SSE so users can track processing progress in real time.

### Challenges & Lessons Learned

- **Challenge:**
  - Coordinating SQS, worker, Redis, and SSE stream while keeping state consistent.
- **Solution:**
  - Define clear job states, use Redis as the shared state store, and stream progress via SSE.
- **Lesson:**
  - Asynchronous architectures scale better but need careful state and error handling.

### Plan for Next Week

- Perform functional testing and fix remaining bugs.
- Optimize backend performance and frontend UX.
- Finalize documentation and prepare the demo.
