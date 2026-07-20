---
title: "Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

**On this page**, you will need to introduce your worklog. **How** did you complete it? How many weeks did you take to complete the program? **What** did you do in those weeks?

Typically, and as a standard, a worklog is carried out over about 3 months (throughout the internship period) with weekly contents as follows:

### AWS Architecture — AI Upscaler pipeline

![AWS Architecture](/workshop-static/images/1-Worklog/aws-architecture.png)

The diagram above maps every AWS service used in the AI Upscaler project to the week it was introduced. Traffic flows: **User → Route 53 → CloudFront (FE) / API Gateway (BE) → ALB → EC2 GPU ASG → S3 / CloudWatch / X-Ray**.

| AWS service | Role in pipeline | Introduced in |
| --- | --- | --- |
| IAM · Budgets · CloudTrail | Account guardrails, least-privilege access, audit | [Week 1](1.1-week1/) |
| Amazon S3 (`upscale-io`) | Weights, temp input, output objects; lifecycle + SSE | [Week 2](1.2-week2/), [Week 7](1.7-week7/) |
| EC2 g5.xlarge (A10G GPU) | FastAPI + Real-ESRGAN inference host | [Week 3](1.3-week3/), [Week 11](1.11-week11/) |
| CloudWatch Logs / Metrics / Alarms | Structured logs, GPU util, p90 alarm | [Week 4](1.4-week4/), [Week 9](1.9-week9/) |
| S3 + CloudFront + ACM (FE) | Static TanStack Start (SPA) hosting, edge cache, TLS | [Week 5](1.5-week5/) |
| AWS X-Ray | Distributed tracing (S3 · model · inference) | [Week 6](1.6-week6/) |
| Amazon ECR | Private Docker registry for BE image | [Week 7](1.7-week7/) |
| API Gateway (HTTP API) | TLS, CORS, throttling, custom domain | [Week 8](1.8-week8/) |
| CloudWatch Dashboard / SNS | Ops dashboard + alerting | [Week 9](1.9-week9/) |
| Secrets Manager · AWS WAF | Secret rotation + managed WAF rule set | [Week 10](1.10-week10/) |
| ALB · Auto Scaling Group · SQS · VPC Link | Horizontal scale, blue/green, async jobs | [Week 11](1.11-week11/) |
| Route 53 · Cost Explorer · Savings Plan | Custom domain, cost review, reservation strategy | [Week 12](1.12-week12/) |

**Week 1:** [Getting familiar with AWS and basic AWS services](1.1-week1/)

**Week 2:** [Real-ESRGAN research + S3 bucket design](1.2-week2/)

**Week 3:** [EC2 GPU host + `ModelManager` + `/upscale/ai`](1.3-week3/)

**Week 4:** [`/upscale/standard` + CloudWatch Logs + property tests](1.4-week4/)

**Week 5:** [TanStack Start FE + S3/CloudFront/ACM hosting](1.5-week5/)

**Week 6:** [SSE progress + AWS X-Ray tracing](1.6-week6/)

**Week 7:** [Docker + Amazon ECR + presigned S3 upload](1.7-week7/)

**Week 8:** [API Gateway + throttling + integration tests](1.8-week8/)

**Week 9:** [Load test + tile inference + CloudWatch dashboard](1.9-week9/)

**Week 10:** [Secrets Manager + AWS WAF + API docs](1.10-week10/)

**Week 11:** [ASG + ALB + SQS + Playwright E2E](1.11-week11/)

**Week 12:** [Route 53 + Cost Explorer + production launch](1.12-week12/)
