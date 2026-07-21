---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

Project kickoff week. Six weeks of learning behind us, now we actually have to build something. `UPS-7` on Linear.

I ran the kickoff session on Monday. We named the project Upscale AI, agreed on the elevator pitch (upload a photo, get a sharper version back with better faces), and I walked the team through a rough end-to-end architecture. Nothing final, more of a straw man to attack. React + Vite + TanStack Router on the frontend, FastAPI on the backend, a worker for the heavy lifting later. Images stay on S3 once we get there.

The rest of the week I split my time between planning and pair-scaffolding. I broke the project down into modules (upload, job orchestration, model inference, results, auth later) and spread them across `UPS-7`'s sub-tasks so ownership was clear. Then I sat with each pair for a bit while they scaffolded their part. I did not write much code myself this week, but I opened the FE and BE repos, put in the CI skeleton, and wired a tiny `/healthz` route on both sides so we had a green build to protect.

One friction showed up early: two people wanted to over-engineer the folder structure. I asked them to ship a working upload first and refactor later, and left a note in the repo saying so.

End of the week the FE loads, the BE responds, the two talk to each other over CORS, and the CI is green. Small win, but it is a real starting line.

Next week: actual upload flow, front to back.
