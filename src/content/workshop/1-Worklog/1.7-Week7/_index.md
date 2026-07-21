---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Week 7 Objectives

- As team lead, run the project opening session so everyone agrees on Upscale AI's goal and MVP scope.
- Lock a first architecture slice (TanStack Start, FastAPI, a separate worker, S3 for the AWS phase) and capture it as a short ADR in the repo.
- Assign scaffolding work per person with a clear definition of done so we don't relitigate it next week.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Facilitate the opening session, lock the one-line pitch and MVP scope with the team. | 01/06/2026 | 01/06/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| Tue | Whiteboard the end-to-end architecture, split modules by owner and open the tickets on Linear. | 02/06/2026 | 02/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Wed | Review the TanStack + Vite frontend scaffold from the FE owner, feedback on routes and layout. | 03/06/2026 | 03/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Thu | Agree with the BE owner on the FastAPI router/service layout and set /healthz as the sanity check. | 04/06/2026 | 04/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Approve the CI skeleton PRs and pair with the team to debug CORS until FE calls BE successfully. | 05/06/2026 | 05/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Week 7 Results

- The team settled on a straw-man architecture and each person owns a slice on Linear without needing reminders.
- FE loads, BE returns 200, CORS is open, and CI is green on both repos by the end of the opening week.
- The first ADR sits in the repo, short enough for a new joiner to grasp why we picked this stack.

### Challenges & Lessons Learned

- **Challenge:**
  - A couple of teammates wanted to over-engineer the folder structure day one, and I had to balance listening with keeping pace.
- **Solution:**
  - I set the rule "ship a working upload first, refactor with evidence", wrote it into the README and closed the discussion.
- **Lesson:**
  - A lead's job in week one is to protect momentum; sometimes that means locking a "good enough" call instead of chasing perfect.

### Plan for Next Week

- Coordinate the team to ship the real upload flow from FE to BE.
- Lock multipart field names and the shared response schema together.
- Require both FE and BE validation before I approve any PR.
