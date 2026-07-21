---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

### Week 12 Objectives

- Final end-to-end testing on staging with real photos, both common cases and edges.
- Package the demo and run it smoothly in front of the panel.
- Clean up AWS resources, wrap up, and record 12 weeks of lessons.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Final test script: small photos, large photos, faces and no faces, wrong file types. | 06/07/2026 | 06/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Tue | Fix small bugs found along the way: error display, empty states, cancel edge cases. | 07/07/2026 | 07/07/2026 | [TanStack Router](https://tanstack.com/router) |
| Wed | Two dry-run demos with timings, plus a short deck as backup. | 08/07/2026 | 08/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| Thu | Present the demo to the panel and capture feedback on the spot. | 09/07/2026 | 09/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| Fri | Cleanup: remove unused ECS services, empty the staging S3 bucket, stop test RDS/Redis. | 10/07/2026 | 10/07/2026 | [AWS Cost Management](https://000007.awsstudygroup.com/) |

### Week 12 Results

- Demo followed the intended flow and none of the previously fixed edge cases resurfaced.
- Concrete feedback in hand, useful for rewriting the workshop content.
- AWS footprint reduced to what we intended to keep; the post-demo bill returned to baseline.
- A personal wrap-up of the 12 weeks and a shortlist of topics I want to go deeper into.

### Challenges & Lessons Learned

- **Challenge:**
  - On demo day, one request occasionally ran slow in a way I could not reproduce.
- **Solution:**
  - Demoed with a photo that warmed the worker, logged aggressively for later investigation and did not try a last-minute fix.
- **Lesson:**
  - Close to a demo, stability matters more than shipping one more fix; deciding not to fix is also a decision.

### Plan for Next Week

- Write the workshop in detail based on what we actually built.
- Fold lessons and feedback into the self-evaluation section.
- Finalise cleanup status and the end-of-term documentation.
