---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

### Week 12 Objectives

- As lead, coordinate final end-to-end testing on staging with real photos, covering common and edge cases.
- Own the demo: script, dry runs, and the presentation in front of the panel.
- Plan and drive AWS cleanup, and capture 12 weeks of team lessons in a wrap-up note.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Write the final test script and assign cases to the team: small/large photos, faces or none, wrong types. | 06/07/2026 | 06/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Tue | Triage and prioritise small bugs found during testing, review fixes for error display, empty states, cancel cases. | 07/07/2026 | 07/07/2026 | [TanStack Router](https://tanstack.com/router) |
| Wed | Run two dry-run demos with the team, time them and prep a short deck as a backup. | 08/07/2026 | 08/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| Thu | Present the demo to the panel and capture feedback on the spot for the team. | 09/07/2026 | 09/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| Fri | Own the cleanup plan: remove unused ECS services, empty the staging S3 bucket, stop test RDS/Redis. | 10/07/2026 | 10/07/2026 | [AWS Cost Management](https://000007.awsstudygroup.com/) |

### Week 12 Results

- The demo I ran followed the intended flow and none of the previously fixed edge cases resurfaced.
- I walked away with concrete feedback that will feed straight into the workshop rewrite.
- The AWS footprint I approved to keep is minimal, and the post-demo bill returned to baseline.
- I have a 12-week wrap-up plus a shortlist of things I want the team (and me) to go deeper into.

### Challenges & Lessons Learned

- **Challenge:**
  - On demo day, one request occasionally ran slow in a way I could not reproduce under pressure.
- **Solution:**
  - I demoed with a photo that warmed the worker, added aggressive logging for later investigation, and blocked any last-minute fixes from the team.
- **Lesson:**
  - Close to a demo the lead's job is to protect stability; deciding not to fix is also a decision I have to own.

### Plan for Next Week

- Write the workshop in detail based on what we actually built.
- Fold lessons and feedback into the self-evaluation section.
- Finalise cleanup status and the end-of-term documentation.
