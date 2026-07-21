---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG (04/05/2026 – 06/05/2026)

Another short week. IAM Roles for EC2, Cloud9, and my first proper go at S3 static hosting.

The IAM Role for EC2 lab is the one that finally made instance profiles click. Instead of putting an access key on the box, the instance assumes a role and the SDK just picks it up. Obvious in hindsight, but I did the lab twice, once following the steps and once from memory, because that gap is where I find out what I did not actually understand. Second run I got stuck on a trust policy typo for a while. Fair.

I opened Cloud9 mostly out of curiosity. Nice IDE, browser-based, useful when my laptop is not cooperating, but I went back to VS Code pretty quickly. Good to know it exists.

Most of the time went into the S3 static website lab. Create a bucket, upload an `index.html`, wrestle with the Bucket Policy until public read actually takes effect, turn on Static Website Hosting. First attempt I forgot to disable Block Public Access and spent about twenty minutes staring at 403s wondering what I had missed. That is a mistake I will not make twice, and now I understand why the guardrail exists in the first place.

Next week: RDS and Lightsail.
