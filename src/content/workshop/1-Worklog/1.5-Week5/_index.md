---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

CloudWatch and AWS CLI week. Two of those "you will use this every single day forever" services. `UPS-5` on Linear.

CloudWatch first. I created a Log Group, sent some logs from an EC2 instance, set up a metric filter that counted the word `ERROR` in the log stream, and wired an alarm on top of it. Then I made the alarm fire on purpose by looping a script that printed errors, watched the notification land, and quietly felt smug. The dashboard piece I found less intuitive at first. Building a useful dashboard is harder than the docs make it look.

AWS CLI I liked more than I expected. After a week of clicking through the console, dropping into `aws s3 ls`, `aws ec2 describe-instances`, and a couple of piped `jq` queries felt like coming home. I set up a named profile with MFA and moved to only using the CLI for the second half of the week, on purpose, to build the habit.

On the team side I asked everyone to redo one earlier lab entirely through the CLI. Two people grumbled, both admitted afterwards that it was the exercise that actually made things stick. Also opened a small doc where we collect one-liner CLI snippets we end up using more than once. It is going to be useful later.

Next week: DynamoDB and ElastiCache.
