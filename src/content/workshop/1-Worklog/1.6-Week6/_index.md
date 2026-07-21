---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

DynamoDB and ElastiCache week. Last of the pure-learning weeks before the project kicks off. `UPS-6` on Linear.

DynamoDB was the one that reset a few of my assumptions. Coming from a SQL habit, I had to sit with the idea that access patterns come first and the schema falls out of them, not the other way around. I did the lab, then designed a toy table for a made-up "internship reports" app just to force myself to think in partition key + sort key. Half of what I wrote the first pass was wrong. That was the point.

ElastiCache with Redis was more comfortable, partly because I have used Redis before. I ran the lab, then wrote a small script that talked to it from an EC2 in the same VPC, cached a slow computation, and measured the difference. The number is not important, the intuition is.

I also started thinking ahead. Upscale is going to need a queue and a cache once we get to the AWS piece in a few weeks, so I made a note that DynamoDB is not a fit for the queue part (SQS will be), but Redis is likely the right shape for the job-status cache. Wrote it down in the project notes so future-me does not re-discover it.

On the team side, quick retro on the six learning weeks. What stuck, what did not, who wants to redo which lab. Next week the tone changes.

Next week: project kickoff for Upscale AI.
