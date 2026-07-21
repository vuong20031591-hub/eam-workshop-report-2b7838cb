---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

Managed database week. RDS and Lightsail labs. Still learning, still following the FCAJ path. `UPS-4` on Linear.

RDS was the first time I really felt what "managed" means. Pick an engine, click through, and you get a Postgres you did not have to babysit. I ran the lab with a small `db.t3.micro`, connected from an EC2 in the same VPC with a security group rule I had to open on purpose, and ran a couple of queries. Then I broke the connection intentionally by removing the SG rule and re-added it, because I wanted to see the exact error message so I would recognise it later.

Lightsail was the fun surprise of the week. It is basically AWS trying to be a friendly VPS, and for a sample app it takes almost no time. I would not use it for the project, but I get why it exists.

I also spent a bit of time reading how a real app would talk to a managed DB, things like parameter groups, backups, snapshots, and the difference between multi-AZ and read replica. We are not going to use RDS for Upscale, but it is background I want in my head before the project starts.

On the team side, one short sync on Friday to check that everyone had actually done both labs. Two people were behind, so I paired with them for an hour. Better to catch it now than at week 7.

Next week: CloudWatch and AWS CLI.
