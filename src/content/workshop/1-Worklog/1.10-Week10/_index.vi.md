---
title: "Week 10 Worklog"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WEEK 10 WORKLOG

### Week 10 Objectives

Hardening security trước khi mở scale. Tôi audit IAM least privilege, chốt Secrets Manager rotation, và bắt đầu viết spec kiến trúc ECS on EC2 + ASG + SQS cho tuần 11.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Audit IAM: chuyển role `EC2-Upscale-Role` từ wildcard `s3:*` sang chỉ prefix `weights/*`, `tmp/*`, `output/*`. | 29/06/2026 | 29/06/2026 | [IAM Least Privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) |
| 2 | Chốt Secrets Manager cho DB password + Cognito App Client secret; rotation 30 ngày. | 30/06/2026 | 30/06/2026 | [Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/) |
| 3 | Review PR migrate secrets từ env-var sang Secrets Manager (SDK boto3 fetch on startup). | 01/07/2026 | 01/07/2026 | - |
| 4 | Chốt VPC Flow Logs + GuardDuty enable cho account; review chi phí phát sinh (~$8/tháng). | 02/07/2026 | 02/07/2026 | [GuardDuty](https://docs.aws.amazon.com/guardduty/latest/ug/) |
| 5 | Viết spec kiến trúc ECS on EC2: ASG Capacity Provider, task definition GPU-aware, SQS `upscale-job-queue`. | 03/07/2026 | 03/07/2026 | [ECS Capacity Providers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html) |
| 6 | Viết ADR-006: chọn ECS trên EC2 thay vì Fargate GPU (Fargate không có GPU option chính thức lúc này). | 04/07/2026 | 04/07/2026 | - |
| 7 | Sprint retro: security posture tăng rõ; tuần 11 bắt đầu ECS migration. | 05/07/2026 | 05/07/2026 | - |

### Week 10 Achievements

IAM policy còn ~40% quyền cũ, xoá toàn bộ wildcard. Secrets Manager rotation chạy tự động. GuardDuty phát hiện 2 API call bất thường từ IP nước ngoài trong ngày đầu → chốt bật permanent. Spec ECS on EC2 xong, sẵn sàng cho tuần 11.

### Challenges & Lessons

Audit IAM là việc chán nhất nhưng bắt buộc phải làm trước khi go-live. Wildcard `s3:*` là bom nổ chậm — nếu key rò rỉ thì attacker xoá cả bucket. Tôi nhắc bản thân: mỗi lần tạo policy mới, viết tối thiểu resource và action, không copy-paste wildcard từ tutorial.

### Next Week Plan

Migrate BE sang ECS + ASG + SQS. Viết spec worker consume SQS. Chốt strategy autoscale policy.
