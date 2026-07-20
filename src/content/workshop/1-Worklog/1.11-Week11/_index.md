---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

### Focus

Deployment rehearsal and end-to-end testing. This week is about proving the whole thing works, not adding features.

### What I did

- Turned `UPS-17` into a rehearsal ticket with a checklist the whole team could tick off together.
- Ran a full deploy from scratch into a fresh account against the runbook, and rewrote the parts that were wrong or missing.
- Chaired a bug triage session after the first end-to-end run and prioritised the fixes that had to land before demo.
- Reviewed every PR that touched the deploy path this week and blocked anything unrelated to the rehearsal.
- Hands-on: wrote the smoke-test script (upload → job → poll → download), the demo script, and a rollback note.

### Result

Full stack deployed from an empty account in one sitting, smoke test passes, demo script rehearsed twice. The board is green.

### Friction

Order of operations. EFS mount targets need to exist before the ECS service starts, otherwise tasks crash-loop. Runbook now spells that out.

### Next week

Chapter 5.10. Cleanup, final report, and handover.
