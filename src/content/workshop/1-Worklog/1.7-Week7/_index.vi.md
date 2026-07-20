---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

### Week 7 Objectives

Chương 5.5 Application nửa sau: tạo ECS cluster trên EC2, đăng ký task definition, đưa API service chạy sau cluster. Đây là bước lớn nhất trong cả workshop với tôi.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Tạo ECS cluster `upscale-cluster` (EC2 launch type). | 31/05/2026 | 31/05/2026 | [ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/) |
| 2 | Tạo launch template và Auto Scaling Group `upscale-gpu-asg` với `g4dn.xlarge`. | 01/06/2026 | 01/06/2026 | [ASG](https://docs.aws.amazon.com/autoscaling/ec2/userguide/) |
| 3 | Đăng ký ASG làm capacity provider cho ECS cluster. | 02/06/2026 | 02/06/2026 | - |
| 4 | Viết task definition `upscale-api` (image, env, mount EFS). | 03/06/2026 | 03/06/2026 | - |
| 5 | Tạo service `upscale-api`, xem task đầu tiên chuyển từ PROVISIONING sang RUNNING. | 04/06/2026 | 04/06/2026 | - |
| 6 | Curl health check từ trong VPC, nhận đúng JSON mong đợi. | 05/06/2026 | 05/06/2026 | - |
| 7 | Đóng `UPS-8` và `UPS-9` trên Linear. Sprint retro trên board Linear. | 06/06/2026 | 06/06/2026 | - |

### Week 7 Achievements

API đã chạy trên ECS. Instance GPU được cluster nhặt tự động. Stop task thì ECS lập tức tạo task mới. Lần đầu tôi thấy self-healing chạy thật.

### Challenges & Lessons

Task definition đầu tiên bị `CannotPullContainerError` liên tục. Do execution role thiếu quyền đọc ECR. Đọc tab "Events" của service (thay vì đoán mò) là thói quen debug ECS hữu ích nhất.

### Next Week Plan

Chương 5.6 Access: đặt ALB trước service. Làm ở `UPS-10`.
