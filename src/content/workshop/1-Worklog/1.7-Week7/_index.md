---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Week 7 Objectives

- Open the Upscale AI project with a kickoff that agrees on goal and scope.
- Lock a first architecture slice: TanStack Start, FastAPI, a separate worker, S3 when we reach the AWS phase.
- Scaffold FE and BE and get them talking over CORS.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Run the kickoff, agree on a one-line pitch and MVP scope. | 01/06/2026 | 01/06/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| Tue | Sketch the end-to-end architecture on a whiteboard, split modules by owner. | 02/06/2026 | 02/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Wed | Init the TanStack + Vite frontend repo with a minimal route and layout. | 03/06/2026 | 03/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Thu | Init the FastAPI backend repo, add /healthz and a router/service folder layout. | 04/06/2026 | 04/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Wire CI skeletons on both sides, have FE call BE across CORS and log by hand to confirm. | 05/06/2026 | 05/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Week 7 Results

- The team agreed on a straw-man architecture and ownership is visible on Linear.
- FE loads, BE returns 200, CORS works, and CI is green on both repos.
- An architecture note lives in the repo for anyone joining later.

### Challenges & Lessons Learned

- **Challenge:**
  - Two people wanted to over-engineer the folder structure in the first week, an easy way to lose days to bikeshedding.
- **Solution:**
  - Set the rule out loud: ship a working upload first, refactor with evidence, and drop that rule into the README.
- **Lesson:**
  - In week one of a project, a green CI beats a beautiful folder tree on paper.

### Plan for Next Week

- Build the real upload flow from FE to BE.
- Lock the multipart field names and a shared response schema.
- Validate on both FE and BE so we never fully trust the client.
