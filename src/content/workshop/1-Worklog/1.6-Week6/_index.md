---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG (25/05/2026 – 31/05/2026)

Last of the pure-learning weeks before the project starts. DynamoDB and ElastiCache.

DynamoDB was the one that reset a few of my assumptions. Coming from a SQL habit, I had to sit with the idea that access patterns come first and the schema falls out of them, not the other way around. I did the lab, then tried designing a small toy table for a made-up "internship reports" app just to force myself to think in partition key plus sort key. Half of what I wrote on the first pass was wrong. That was the point.

ElastiCache with Redis was more comfortable, mostly because I have played with Redis before. I ran the lab, then wrote a tiny script that hit it from an EC2 in the same VPC, cached a deliberately slow computation, and measured the difference. The number is not the important part, the intuition is. Reads that used to take a beat felt instant.

I also spent some time at the end of the week looking ahead. The project starts on Monday, and I want to know roughly what I am walking into instead of opening the code cold. Read the FCAJ intro for the AI Face Enhancement project a couple of times, sketched out how upload, processing, and delivery might connect, and made a short list of the things I do not understand yet so I can ask my mentor on day one.

Six weeks in, AWS has stopped being one big scary thing and turned into a set of specific services I can name. Whether I can actually build with them is what next week starts to answer.

Next week: project kickoff. AI Face Enhancement.
