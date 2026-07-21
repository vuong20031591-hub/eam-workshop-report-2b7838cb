---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

Week 3 was IAM Roles for EC2, Cloud9, and a first go at hosting on S3. All labs. `UPS-3` on Linear.

The IAM Role for EC2 lab is the one that finally made instance profiles click for me. Instead of putting keys on the box, the instance assumes a role and the SDK just works. I did the lab twice, once following the steps and once from memory, because that gap is where you find out what you did not actually understand.

Cloud9 was fine. I used it for the S3 lab and then went back to my laptop, honestly. It is a nice fallback when someone's machine is not cooperating.

Most of my time went into the S3 static website lab. Creating a bucket, uploading an `index.html`, working through Bucket Policy until public read actually took effect, and turning on Static Website Hosting. First try I forgot to disable Block Public Access and spent twenty minutes wondering why 403s were coming back. That is a mistake I will not make twice.

On the team side I ran a short review of everyone's IAM notes from the week before and pointed out the two most common misreadings of a policy statement. Nothing formal, more of a lunch chat with a whiteboard.

Next week: RDS and Lightsail.
