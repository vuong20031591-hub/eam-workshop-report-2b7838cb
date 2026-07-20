---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

### Week 9 Objectives

Chapter 5.7 Delivery. Add HTTPS with ACM, put CloudFront in front of the ALB and the S3 static bucket, and turn on WAF for basic protection.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Requested an ACM certificate for the workshop domain, validated via DNS. | 14/06/2026 | 14/06/2026 | [ACM](https://docs.aws.amazon.com/acm/latest/userguide/) |
| 2 | Created CloudFront distribution with the S3 static bucket as origin. | 15/06/2026 | 15/06/2026 | [CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/) |
| 3 | Added a second origin pointing at the ALB for `/api/*`. | 16/06/2026 | 16/06/2026 | - |
| 4 | Attached the ACM cert to CloudFront and enabled HTTPS-only. | 17/06/2026 | 17/06/2026 | - |
| 5 | Created a WAF web ACL with AWS-managed rule sets and attached it to CloudFront. | 18/06/2026 | 18/06/2026 | [WAF](https://docs.aws.amazon.com/waf/latest/developerguide/) |
| 6 | Verified in the browser: padlock icon, requests to the API still work. | 19/06/2026 | 19/06/2026 | - |
| 7 | Closed `UPS-11` on Linear, took `UPS-12` (observability). | 20/06/2026 | 20/06/2026 | - |

### Week 9 Achievements

Traffic now goes through CloudFront with HTTPS end to end, WAF is quietly blocking obvious junk in the background. The workshop domain finally shows a real padlock instead of a scary browser warning.

### Challenges & Lessons

The cert stayed in `Pending validation` for an hour. I had added the CNAME to the wrong hosted zone. Lesson with anything DNS: verify with `dig` from the terminal before waiting.

### Next Week Plan

Chapter 5.8 Observability: CloudWatch logs, alarms and a small dashboard. Work under `UPS-12`.
