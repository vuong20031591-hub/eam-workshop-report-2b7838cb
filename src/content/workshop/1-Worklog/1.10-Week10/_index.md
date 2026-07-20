---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

### Week 10 Objectives

Generate API documentation from FastAPI's OpenAPI, deploy Redoc to S3+CloudFront. Move analytics tokens into AWS Secrets Manager instead of the `.env` file on EC2. Turn on AWS WAF managed rule set in front of both CloudFront and the ALB.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Export `openapi.json`, use `redocly` to build static HTML. | 07/07/2026 | 07/07/2026 | [Redoc](https://github.com/Redocly/redoc) |
| 2 | Deploy docs to `s3://upscale-docs` + a secondary CloudFront distribution. | 08/07/2026 | 08/07/2026 | - |
| 3 | Create secret `upscaler/dev/analytics` in **Secrets Manager**, grant IAM read policy to the EC2 role. | 09/07/2026 | 09/07/2026 | [Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/) |
| 4 | Refactor `APIConfig`: when `USE_SECRETS_MANAGER=true` → call `secretsmanager:GetSecretValue`, cache for 5 minutes. | 10/07/2026 | 11/07/2026 | - |
| 5 | Enable **AWS WAF v2** WebACL with managed rule `AWSManagedRulesCommonRuleSet` + rate-based rule 2000 req/5min/IP. | 12/07/2026 | 13/07/2026 | [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/) |
| 6 | Attach the WebACL to the FE CloudFront distribution and the ALB. | 14/07/2026 | 14/07/2026 | - |
| 7 | Write a top-level README + AWS architecture diagram (draw.io). | 15/07/2026 | 15/07/2026 | - |

### Week 10 Achievements

Docs are public at `docs.upscaler.vuongtech.dev`. Secrets no longer sit in `.env` on EC2. WAF blocked 3 malicious requests on day one (mostly my own testing, but it counts).

### Challenges & Lessons

The WAF managed rule blocked normal FE traffic, and the culprit was `SizeRestrictions_BODY`. I added an exception for `/upload/presign` with a 100KB body limit and everything went back to normal. Managed rules are powerful, but they need per-app tuning; the practical habit is to run them in `count` mode for a few days, watch, and only then flip to `block`.

### Next Week Plan

Playwright E2E for the main flow. Auto-scaling via ASG + Launch Template for the GPU worker. Prep for production deploy.
