---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

### Week 12 Objectives

Deploy production at `upscaler.vuongtech.dev` and `api.upscaler.vuongtech.dev` via Route 53. Review AWS cost through Cost Explorer and cost out a Savings Plan (Compute 1-year no-upfront). Finish the final report and demo.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Route 53 hosted zone `vuongtech.dev`, A-alias `upscaler` → CloudFront, `api.upscaler` → ALB (alias). | 24/07/2026 | 24/07/2026 | [Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/) |
| 2 | Enable **CloudFront logging** to S3 + **ALB access logs** to S3. | 25/07/2026 | 25/07/2026 | - |
| 3 | Tag every resource `Project=Upscale, Env=prod` so Cost Explorer can filter. | 26/07/2026 | 26/07/2026 | [AWS Tagging](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) |
| 4 | Run **Cost Explorer** over 30 days: EC2 g5 = 78%, S3 = 6%, CloudFront = 4%, misc for the rest. | 27/07/2026 | 27/07/2026 | [Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html) |
| 5 | Model out a **Compute Savings Plan** 1-year no-upfront: ~27% saved on g5. | 28/07/2026 | 28/07/2026 | [Savings Plans](https://docs.aws.amazon.com/savingsplans/latest/userguide/) |
| 6 | Lock MVP SLA: p90 < 10s, 99% availability (single AZ), 24h RPO (S3 versioning + future cross-region replication). | 29/07/2026 | 29/07/2026 | - |
| 7 | Write the final report + demo slides (architecture + load-test numbers). | 30/07/2026 | 30/07/2026 | - |

### Week 12 Achievements

Production is live at `upscaler.vuongtech.dev`, all traffic goes through HTTPS + WAF. Cost baseline sits around $142/month, mostly one GPU instance running dev hours plus prod on-demand. Report and demo landed on time.

### Challenges & Lessons

The most expensive line on the bill is still on-demand GPU, and for a 12-week solo project it's hard to justify a 1-3 year reservation. My proposal is to run the AI worker on EC2 Spot (accepting interruptions) for burst load and keep one on-demand instance as the baseline. If this project keeps going, that's the first cost cut to try. Tagging resources from day one (Project, Env) is what made Cost Explorer genuinely useful instead of a noisy chart.
