---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG (11/05/2026 – 17/05/2026)

Full week back on the calendar. Managed database week: RDS and Lightsail.

RDS was the first time I really felt what "managed" means. Pick an engine, click through, and you get a Postgres you do not have to babysit. I ran the lab with a small `db.t3.micro`, connected from an EC2 in the same VPC with a security group rule I had to open on purpose, and ran a couple of queries. Then I broke the connection on purpose by removing the SG rule and adding it back, because I wanted to see the exact error message so I would recognise it later. Little tricks like that are starting to stick.

I also read up on parameter groups, automated backups, snapshots, and the difference between Multi-AZ and read replicas. I do not need any of that today, but I would rather have the vocabulary in my head before I need it.

Lightsail was the fun surprise of the week. It is basically AWS trying to be a friendly VPS, and standing up the sample app took almost no time. Not something I would reach for on a real project, but it is nice to see that end of the spectrum exists.

Between labs I did the FCAJ reading and took slow notes, which sounds boring and probably is, but it is the part that stops all of this becoming a blur.

Next week: CloudWatch and AWS CLI.
