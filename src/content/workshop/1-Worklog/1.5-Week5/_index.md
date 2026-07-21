---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG (18/05/2026 – 20/05/2026)

Short week again. CloudWatch and AWS CLI, two services I am told I will use every day forever.

CloudWatch first. I created a Log Group, shipped some logs from an EC2 instance, set up a metric filter that counted the word `ERROR` in the stream, and wired an alarm on top of it. Then I made the alarm fire on purpose by looping a script that printed errors, watched the notification land in my email, and felt quietly smug for about ten seconds. Building a useful dashboard turned out to be harder than the docs make it look, and I ended up scrapping my first one because it was a wall of graphs nobody would ever read.

AWS CLI I liked more than I expected. After a week of clicking through the console, dropping into `aws s3 ls`, `aws ec2 describe-instances`, and piping into `jq` felt like coming home. Set up a named profile with MFA and forced myself to use only the CLI for the second half of the week, on purpose, to build the habit before the console became muscle memory.

I redid the S3 static hosting lab from Week 3 entirely through the CLI. Grumbled at myself a bit, but that was the exercise that actually made things stick. Started a small personal doc with one-liners I keep re-typing, so I stop re-typing them.

Next week: DynamoDB and ElastiCache.
