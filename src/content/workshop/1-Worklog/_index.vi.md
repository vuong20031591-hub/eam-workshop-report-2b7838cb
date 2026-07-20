---
title: "Nhật ký công việc"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

**Trong trang này** bạn sẽ cần giới thiệu worklog của bạn **như thế nào**? Bạn hoàn thành chương trình trong vòng **bao nhiêu tuần**? Bạn **đã làm gì** trong các tuần đó?

Thông thường và cũng là tiêu chuẩn, một worklog được thực hiện trong khoảng 3 tháng (trong suốt thời gian thực tập) với nội dung các tuần như sau:

### Sơ đồ kiến trúc AWS — Pipeline AI Upscaler

![AWS Architecture](/workshop-static/images/1-Worklog/aws-architecture.png)

Sơ đồ trên ánh xạ mọi dịch vụ AWS sử dụng trong dự án AI Upscaler theo tuần được đưa vào. Luồng traffic: **Người dùng → Route 53 → CloudFront (FE) / ALB (BE) → ECS on EC2 GPU (ASG capacity provider) → S3 / EFS / ElastiCache / SQS / CloudWatch / X-Ray**.

| Dịch vụ AWS | Vai trò trong pipeline | Đưa vào ở |
| --- | --- | --- |
| IAM · Budgets · CloudTrail | Guardrail tài khoản, least-privilege, audit trail | [Tuần 1](1.1-week1/) |
| Amazon S3 (`upscale-io`) | Lưu weights, input tạm, output; lifecycle + SSE | [Tuần 2](1.2-week2/), [Tuần 7](1.7-week7/) |
| EC2 g5.xlarge (A10G GPU) | Host FastAPI + Real-ESRGAN inference | [Tuần 3](1.3-week3/), [Tuần 11](1.11-week11/) |
| CloudWatch Logs / Metrics / Alarms | Log JSON, GPU util, alarm p90 | [Tuần 4](1.4-week4/), [Tuần 9](1.9-week9/) |
| S3 + CloudFront + ACM (FE) | Static TanStack Start (SPA), edge cache, TLS | [Tuần 5](1.5-week5/) |
| AWS X-Ray | Distributed tracing (S3 · model · inference) | [Tuần 6](1.6-week6/) |
| Amazon ECR | Registry Docker private cho BE image | [Tuần 7](1.7-week7/) |
| ALB + AWS WAF + Cognito | TLS termination, CORS, WAF rate limits, OIDC auth | [Tuần 8](1.8-week8/) |
| CloudWatch Dashboard / SNS | Dashboard vận hành + cảnh báo | [Tuần 9](1.9-week9/) |
| Secrets Manager · AWS WAF | Bí mật + managed rule set áp cho CloudFront + ALB | [Tuần 10](1.10-week10/) |
| ECS on EC2 · ASG · SQS · ElastiCache Redis · EFS | Scale ngang, job bất đồng bộ, cache, storage chia sẻ (model/DB) | [Tuần 11](1.11-week11/) |
| Route 53 · Cost Explorer · Savings Plan | Domain, review chi phí, chiến lược đặt trước | [Tuần 12](1.12-week12/) |

**Tuần 1:** [Làm quen AWS và các dịch vụ cơ bản](1.1-week1/)

**Tuần 2:** [Nghiên cứu Real-ESRGAN + thiết kế S3 bucket](1.2-week2/)

**Tuần 3:** [EC2 GPU host + `ModelManager` + `/upscale/ai`](1.3-week3/)

**Tuần 4:** [`/upscale/standard` + CloudWatch Logs + property tests](1.4-week4/)

**Tuần 5:** [TanStack Start FE + hosting S3/CloudFront/ACM](1.5-week5/)

**Tuần 6:** [SSE progress + AWS X-Ray tracing](1.6-week6/)

**Tuần 7:** [Docker + Amazon ECR + presigned S3 upload](1.7-week7/)

**Tuần 8:** [ALB + WAF + Cognito auth + integration tests](1.8-week8/)

**Tuần 9:** [Load test + tile inference + CloudWatch dashboard](1.9-week9/)

**Tuần 10:** [Secrets Manager + AWS WAF + tài liệu API](1.10-week10/)

**Tuần 11:** [ECS on EC2 + ASG + ALB + SQS + Redis + EFS + Playwright E2E](1.11-week11/)

**Tuần 12:** [Route 53 + Cost Explorer + go-live](1.12-week12/)
