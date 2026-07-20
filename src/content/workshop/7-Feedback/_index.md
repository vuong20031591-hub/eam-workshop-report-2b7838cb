---
title: "Sharing and Feedback"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 7. </b> "
---

This is where I write down what I actually thought about the Upscale AI workshop and the First Cloud AI Journey program around it. I want to be honest about both the parts that worked and the parts that could be better, so the FCAJ team has real input for the next cohort.

### The workshop itself

The brief was well chosen. Upscale AI is small enough to build solo, but hard enough because it forces you into GPU compute, stateful services (EFS, PostgreSQL, Redis), and an async queue. Pick a stateless app without GPU and you skip the most interesting part of AWS, which is ECS on EC2 with capacity providers. That was the hardest chapter and also the one I got the most out of.

### Mentor and materials

The mentor let me try first and only stepped in when I was clearly stuck. The first three weeks that annoyed me because it cost time, but by week four I understood why it works. The workshop materials are detailed on networking and ECS, thinner on Cognito and CI/CD. I ended up reading AWS docs directly for those two, which is not a problem, but worth patching in the next revision.

### Fit with what I already knew

Roughly 60% overlapped with what I had done before (Linux, Docker, basic networking) and 40% was new territory: fine-grained IAM, ALB target groups, EFS mount targets, ElastiCache. That ratio is about right. Familiar enough that I did not drown, new enough that I did not coast.

### What I learned

I picked up the habit of writing an architecture proposal before touching the Console, reading the AWS bill line by line to find waste, and cleaning up resources in reverse creation order. On the writing side, keeping a weekly worklog even in slow weeks was more useful than I expected.

### Program rhythm

FCAJ paced things well: short standups, a mid-program review, a demo at the end. No manufactured deadlines. When I asked for an extra week because Cognito was more work than planned, the mentor said yes without a debate.

### Cost and policy

The AWS credit covered the whole workshop as long as I was careful with NAT Gateway and did not leave EC2 running overnight. I forgot a couple of times and lost about 8 USD I did not need to lose. That was on me, not on the policy.

### A few specific questions

What I was most satisfied with: finishing the program with a system that actually runs, not slides. Typing a URL and watching the image come back upscaled from the backend was the strongest motivation I had.

What I think could improve: the first-week onboarding is thin. I spent about three days figuring out who does what and where the internal docs live. A single "start here" page for new participants would save that time completely.

Would I recommend it to a friend: yes, with the warning that the program expects a lot of self-driven work. It is not a fit for anyone who wants to be walked through every step.

### Suggestions

If it fits the format, I would add a mid-program session with a participant from the previous cohort, so we get the perspective of someone who just went through it. I would also be happy to keep attending FCAJ technical talks after finishing, including as a volunteer helping the next cohort.
