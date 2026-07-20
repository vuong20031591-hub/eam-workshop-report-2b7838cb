---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

Cognito and CloudWatch week. Sign-in that we do not have to build ourselves, and a monitoring view that tells us when something is actually wrong instead of "everything is a graph".

`UPS-15` (Cognito user pool + Google OAuth) and `UPS-16` (observability) went out. The auth design was straightforward once we agreed on the shape: Cognito user pool with the hosted UI, Google as an identity provider, ID token exchanged for a session cookie on the FastAPI side. Nobody has to touch password handling, which is exactly what I want.

On the Cognito PR I tightened the OAuth callback list down to prod and local dev only. Wildcard callbacks are the kind of thing you regret when someone points out you can log in from anywhere.

The CloudWatch dashboard PR came in with about twelve widgets. I cut half of them, because a dashboard nobody looks at is worse than no dashboard. What is left is the small set we actually check every morning.

Hands-on I wrote the auth flow doc for the team so everyone codes against the same contract, and picked the alarms that page us: ALB 5xx over 1% for five minutes, SQS DLQ non-empty, GPU utilisation over 90% sustained, ECS service unhealthy. Anything below that is a graph, not a page.

Users can sign in with Google now, the API validates tokens, and the dashboard shows the four numbers we actually care about.

Cognito hosted UI CORS ate a few hours. I wrote a short "callback URL rules" note in the runbook so I stop losing that time each time.

Next week is chapter 5.9 wrap-up. End-to-end deployment rehearsal and the first proper demo.
