---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

Account baseline week. The goal was simple: nobody should have a reason to log in as root ever again.

I ran the sprint kickoff and split the work into day-sized tickets under `UPS-3` (baseline) and `UPS-4` (IAM roles). Then a short design session for the IAM model. Nothing fancy: an admin group, a developer group, a service user called `upscale-deployer` for CI, and separate task roles for ECS so each service only gets what it actually needs.

PR review is where most of my time went. Two proposals wanted to stick long-lived access keys on developer laptops, both got closed. Two IAM PRs came back for tighter scoping. I also wrote the ADR (root MFA on, no root access keys, least privilege on the groups) and a template for the deployer policy so future services can copy it instead of reinventing one.

End of the week the baseline is done. Root is locked, MFA is enforced, groups exist, `upscale-deployer` has a minimal policy, and the ADR is merged so the reasoning is on record.

The one recurring friction: a teammate kept reaching for `AdministratorAccess`. I explained the reasoning twice. After the second time I put it in the ADR so I do not explain it a third time.

Next week is chapter 5.3 and the VPC. I own the topology decision.
