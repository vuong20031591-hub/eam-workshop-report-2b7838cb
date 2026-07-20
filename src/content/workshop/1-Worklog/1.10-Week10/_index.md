---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

### Focus

Cognito for user sign-in and a CloudWatch view that actually tells us when things are wrong.

### What I did

- Split the work into `UPS-15` (Cognito user pool + Google OAuth) and `UPS-16` (observability).
- Chaired a design on the auth flow: Cognito user pool, hosted UI, Google as an identity provider, ID token exchanged for a session cookie on the FastAPI side.
- Reviewed the Cognito PR, tightened the OAuth callback list to prod + local dev only.
- Reviewed the CloudWatch dashboard PR and cut half the widgets because no one would look at them.
- Hands-on: wrote the auth flow doc for the team, and picked the alarms that page us (ALB 5xx > 1% for 5 min, SQS DLQ non-empty, GPU utilisation > 90% sustained, ECS service unhealthy).

### Result

Users can sign in with Google, the API validates tokens, and the dashboard shows the four numbers we actually care about.

### Friction

Cognito hosted UI CORS mismatch cost a few hours. Wrote a short "callback URL rules" note in the runbook.

### Next week

Chapter 5.9 wrap-up. End-to-end deployment rehearsal and demo.
