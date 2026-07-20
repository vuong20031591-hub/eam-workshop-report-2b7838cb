---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

Rehearsal week. No new features. The job is to prove the whole thing actually works from an empty account, not to add anything on top.

I turned `UPS-17` into a rehearsal ticket with a checklist the team could tick together, and then I ran a full deploy from scratch into a fresh account, following the runbook line by line. Every place I had to guess or improvise was a place the runbook was wrong. I rewrote those parts as I went.

After the first end-to-end run I ran a bug triage session and split the findings into "must fix before demo" and "later". Then I reviewed every PR that touched the deploy path this week and blocked anything unrelated. Rehearsal week is not the week to sneak in new work.

Hands-on I wrote the smoke test script (upload, job, poll, download), the demo script, and a short rollback note in case something goes badly wrong on demo day.

End of the week the full stack deploys from an empty account in one sitting, smoke tests pass, and we rehearsed the demo twice. The board is green.

The one thing that keeps catching people out is order of operations. EFS mount targets have to exist before the ECS service starts, or tasks crash-loop. The runbook now spells this out in the exact order.

Next week is chapter 5.10. Cleanup, final report, handover.
