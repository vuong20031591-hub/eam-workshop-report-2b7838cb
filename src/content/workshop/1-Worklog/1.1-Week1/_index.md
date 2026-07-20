---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## WEEK 1 WORKLOG

Kickoff week. I did not write any AWS resource this week, and that was on purpose. As team lead I wanted the project to have a shape before anyone opened the console.

Most of the week was reading. I went through the workshop start to finish twice, then wrote a one-page summary of chapter 5.1 so the team had something concrete to argue with instead of vibes. Once we had that, I put the 12-week roadmap onto Linear as epics and opened `UPS-1` (Planning) and `UPS-2` (Architecture doc) as the tickets everything else would hang off.

The rest was small decisions I did not want to have every week: region `ap-southeast-1`, prefix `upscale-`, env names `dev` and `prod`, a Git flow, a PR template. Standup is fifteen minutes each morning, planning Monday, review Friday. Boring, but I would rather set it once.

I also drew the target diagram (User, CloudFront, ALB, ECS running FastAPI and the CodeFormer worker, SQS, Redis, S3) and put together a rough cost baseline so we would not be surprised later.

Honestly, half the week went to cutting things out of scope. The workshop covers a lot and it is tempting to try all of it. We are not going to.

Next week is chapter 5.2. I will chair the IAM design and get the account baseline nailed down.
