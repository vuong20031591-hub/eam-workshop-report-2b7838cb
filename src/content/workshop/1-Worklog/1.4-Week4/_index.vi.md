---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

### Week 4 Objectives

Hoàn tất chương 5.3 (security group và IAM role), rồi bước vào chương 5.4 Storage cho S3. Đây là lúc workshop bắt đầu bắt tôi suy nghĩ xem ai được nói chuyện với ai, phải cẩn thận với từng rule.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Tạo security group: `upscale-alb-sg`, `upscale-ecs-sg`, `upscale-redis-sg`. | 10/05/2026 | 10/05/2026 | - |
| 2 | Cấu hình inbound rule để SG của ALB gọi được SG của ECS ở port 8000. | 11/05/2026 | 11/05/2026 | [Security Groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html) |
| 3 | Tạo IAM role `ecs-task-execution-role` để pull image và ghi log. | 12/05/2026 | 12/05/2026 | - |
| 4 | Tạo bucket S3 `upscale-static-*` cho frontend build. | 13/05/2026 | 13/05/2026 | [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/) |
| 5 | Tạo bucket S3 `upscale-images-*` cho ảnh người dùng upload, bật versioning. | 14/05/2026 | 14/05/2026 | - |
| 6 | Upload ảnh test qua console, xác nhận chỉ đọc được qua presigned URL. | 15/05/2026 | 15/05/2026 | - |
| 7 | Đóng `UPS-4` và `UPS-5` trên Linear, plan S3 lifecycle và EFS cho tuần sau. | 16/05/2026 | 16/05/2026 | - |

### Week 4 Achievements

Security group vẽ ra và đặt tên nhất quán. Hai bucket S3 đã live. Upload và download được, hiểu Block Public Access đang bảo vệ mình cái gì. Sprint Linear đúng tiến độ.

### Challenges & Lessons

Security group chỉ thật sự sáng khi tôi ngừng nghĩ về nó như "firewall" mà xem nó như nhãn: ALB có nhãn, ECS task có nhãn, tôi mở cửa giữa hai nhãn đó. Nhìn kiểu vậy là hết đoán mò.

### Next Week Plan

Chương 5.4 phần còn lại: EFS, ECR, Secrets Manager. Nhận `UPS-6`.
