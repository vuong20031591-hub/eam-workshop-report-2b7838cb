---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

### Week 2 Objectives

Workshop chapter 5.2 Prerequisites. This week is about turning my account from "root only" into something safe to work in daily: an IAM admin user with MFA, a locked region, and a clean starting point before any real resource gets created.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Read chapter 5.2 twice before touching anything. | 26/04/2026 | 26/04/2026 | - |
| 2 | Created IAM user `upscale-deployer` with `AdministratorAccess` for the build phase. | 27/04/2026 | 27/04/2026 | [IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) |
| 3 | Enabled MFA for `upscale-deployer` and stored the recovery codes offline. | 28/04/2026 | 28/04/2026 | - |
| 4 | Logged out of root and signed back in as `upscale-deployer`. Locked the region to `ap-southeast-1` (Singapore). | 29/04/2026 | 29/04/2026 | - |
| 5 | Installed AWS CLI on my laptop and ran `aws sts get-caller-identity` to confirm the profile works. | 30/04/2026 | 30/04/2026 | [AWS CLI](https://docs.aws.amazon.com/cli/) |
| 6 | Moved `UPS-2` to Done on Linear, opened `UPS-3` (VPC setup) for next week. | 01/05/2026 | 01/05/2026 | - |
| 7 | Read chapter 5.3 Infrastructure to preview what I have to build next week. | 02/05/2026 | 02/05/2026 | - |

### Week 2 Achievements

Root is now locked away. Daily work happens on `upscale-deployer` with MFA. Region is fixed so I do not accidentally create things in `us-east-1` and get confused later. CLI is wired in.

### Challenges & Lessons

I forgot MFA on the first try and got locked out for a few minutes. Lesson: always set MFA in the same session you create the user, and write the recovery code somewhere real (not a sticky note).

### Next Week Plan

Chapter 5.3 Infrastructure: build the VPC, subnets and internet gateway. Track progress on `UPS-3`.
