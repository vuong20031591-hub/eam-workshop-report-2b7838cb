---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

### Week 5 Objectives

FE week. I locked the stack (TanStack Start + React 19), wrote the page structure and UX flow spec, and wrote the FE-side API contract spec. In parallel I reviewed the S3 static hosting + CloudFront + ACM setup to get a real HTTPS domain.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Locked the FE stack in ADR-002: TanStack Start (SSR/SSG + file-based routing), React 19, Tailwind v4. | 24/05/2026 | 24/05/2026 | [TanStack Start](https://tanstack.com/start) |
| 2 | Wrote the page structure spec: `/` (upload), `/result/:id`, `/history`; Figma wireframes. | 25/05/2026 | 26/05/2026 | - |
| 3 | Wrote the FE-side API contract spec: fetch presigned URL, poll status, display progress. | 26/05/2026 | 26/05/2026 | - |
| 4 | Reviewed the TanStack Start bootstrap + Tailwind + upload component PR; round-1 feedback (missing error state). | 27/05/2026 | 28/05/2026 | - |
| 5 | Reviewed the round-2 PR after error/loading states were added; approved. | 29/05/2026 | 29/05/2026 | - |
| 6 | Reviewed the S3 `upscale-fe` bucket + CloudFront distribution + ACM `upscale.dev` cert + alias record PR. | 30/05/2026 | 30/05/2026 | [CloudFront + ACM](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-procedures.html) |
| 7 | Ran an end-to-end FE → BE demo on staging; noted UX gaps for next week. | 31/05/2026 | 31/05/2026 | - |

### Week 5 Achievements

FE staging is live at `staging.upscale.dev` — real upload, real BE calls, real output. CloudFront caches HTML with `s-maxage=60` and assets with `max-age=31536000`, so no manual cache purges each deploy.

### Challenges & Lessons

First-time FE review lesson: don't just check that the code runs, ask what the user sees when the network drops or the BE returns 500. A blank UI is worse than the 500 itself. From this week I added a rule: every FE PR must include a screenshot of the error state before review.

### Next Week Plan

Write the SSE progress contract spec to show real progress bars. Review the plan to enable AWS X-Ray tracing across S3 → model → output.
