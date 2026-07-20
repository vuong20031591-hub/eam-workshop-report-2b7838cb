---
title: "Nhật ký công việc"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

Worklog này ghi lại 12 tuần thực tập của tôi tại dự án Upscale AI. Tôi vào với vai trò intern học AWS từ đầu, mỗi tuần bám theo một phần của workshop guide ở chương 5. Sprint plan và issue được theo dõi trên Linear (workspace `UPS`), tôi nhắc theo ticket ID xuyên suốt.

## Sơ đồ kiến trúc AWS — Pipeline AI Upscaler

![AWS Architecture](/workshop-static/images/1-Worklog/aws-architecture.png)

Sơ đồ trên là pipeline hoàn chỉnh tôi dựng trong 12 tuần. Luồng traffic: **Người dùng → Route 53 → CloudFront + WAF → ALB → ECS on EC2 (GPU) → S3 / EFS / ElastiCache / SQS / CloudWatch**.

| Tuần | Nội dung workshop | Linear |
| --- | --- | --- |
| [Tuần 1](1.1-week1/) | Onboarding, mở AWS account, đọc chương 5.1 | `UPS-1`, `UPS-2` |
| [Tuần 2](1.2-week2/) | Chương 5.2 Prerequisites: IAM admin, MFA, region | `UPS-2` |
| [Tuần 3](1.3-week3/) | Chương 5.3 phần A: VPC, subnet, IGW, NAT | `UPS-3` |
| [Tuần 4](1.4-week4/) | Chương 5.3 phần B + 5.4 mở đầu: SG, IAM role, S3 bucket | `UPS-4`, `UPS-5` |
| [Tuần 5](1.5-week5/) | Chương 5.4 còn lại: EFS, ECR, Secrets Manager | `UPS-6` |
| [Tuần 6](1.6-week6/) | Chương 5.5 phần A/B: ElastiCache Redis, SQS | `UPS-7` |
| [Tuần 7](1.7-week7/) | Chương 5.5 phần C trở đi: ECS cluster, ASG, task definition | `UPS-8`, `UPS-9` |
| [Tuần 8](1.8-week8/) | Chương 5.6 Access: ALB + target group | `UPS-10` |
| [Tuần 9](1.9-week9/) | Chương 5.7 Delivery: ACM, CloudFront, WAF | `UPS-11` |
| [Tuần 10](1.10-week10/) | Chương 5.8 Observability: CloudWatch, alarm | `UPS-12` |
| [Tuần 11](1.11-week11/) | Chương 5.9 Deployment: build FE, upload S3, invalidate CloudFront | `UPS-13` |
| [Tuần 12](1.12-week12/) | Chương 5.10 Cleanup + retro thực tập | `UPS-14`–`UPS-18` |
