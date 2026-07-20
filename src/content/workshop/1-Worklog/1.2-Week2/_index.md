---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

### Focus

Prerequisites and IAM. Getting the account baseline right early so no one has to touch root again.

### What I did

- Ran the sprint kickoff and split `UPS-3` (account baseline) and `UPS-4` (IAM roles) into small tickets sized for a single day.
- Chaired a short design session for the IAM model: admin group, developer group, `upscale-deployer` service user for CI, plus dedicated task roles for ECS.
- Reviewed the account checklist against chapter 5.2 and rejected two proposals that put long-lived keys on developer machines.
- Reviewed the first batch of IAM PRs, sent two back for tighter scoping.
- Hands-on: wrote the IAM ADR (root MFA, no root access keys, least-privilege groups) and the deployer policy template.

### Result

Baseline done: root locked, MFA enforced, groups in place, `upscale-deployer` provisioned with a minimal policy. ADR merged so the reasoning is on record.

### Friction

One member kept reaching for `AdministratorAccess`. Had to explain twice why we do not do that, then wrote it into the ADR so I do not explain a third time.

### Next week

Chapter 5.3 VPC. I will own the network topology decision.
