---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

### Week 11 Objectives

Chapter 5.9 Deployment. Build the frontend, upload it to the S3 static bucket, and invalidate CloudFront so users actually see the new version.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Ran `npm run build` locally, checked the `dist/` folder. | 28/06/2026 | 28/06/2026 | - |
| 2 | Uploaded `dist/` to `upscale-static-*` through the S3 console. | 29/06/2026 | 29/06/2026 | - |
| 3 | Created a CloudFront invalidation for `/*` and waited it out. | 30/06/2026 | 30/06/2026 | - |
| 4 | Opened the site, uploaded a real image, watched an upscaled version come back. | 01/07/2026 | 01/07/2026 | - |
| 5 | Shared the URL in Slack for the team to try. Collected first-day feedback. | 02/07/2026 | 02/07/2026 | - |
| 6 | Wrote a short "how to deploy" note on the Linear ticket so I do not forget the steps. | 03/07/2026 | 03/07/2026 | - |
| 7 | Closed `UPS-13` on Linear, opened `UPS-14` (cleanup + retro). | 04/07/2026 | 04/07/2026 | - |

### Week 11 Achievements

The frontend is live. When people upload a photo it comes back sharper a few seconds later. Nothing about that felt possible ten weeks ago, so this was the payoff week.

### Challenges & Lessons

I forgot to invalidate CloudFront the first time and spent 20 minutes convinced the deploy was broken. Lesson: for CloudFront, "the file is in S3" is not the same as "the world can see it".

### Next Week Plan

Final week: chapter 5.10 Cleanup, write the retro, close out remaining Linear tickets.
