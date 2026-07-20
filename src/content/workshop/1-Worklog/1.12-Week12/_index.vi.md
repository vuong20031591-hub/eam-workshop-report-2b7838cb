---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

### Week 12 Objectives

Tuần cuối. Chương 5.10 Cleanup: xoá hết resource đã tạo để bill về 0. Sau đó viết retro thực tập và đóng nốt Linear ticket còn lại.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Đọc kỹ chương 5.10, ghi lại thứ tự xoá trước khi động vào cái gì. | 05/07/2026 | 05/07/2026 | - |
| 2 | Xoá ECS service và cluster, sau đó ASG và launch template. | 06/07/2026 | 06/07/2026 | - |
| 3 | Xoá ALB, target group, CloudFront distribution và WAF web ACL. | 07/07/2026 | 07/07/2026 | - |
| 4 | Xoá Redis, SQS queue và dead-letter queue. | 08/07/2026 | 08/07/2026 | - |
| 5 | Xoá EFS, ECR repo, bucket S3 và secret trong Secrets Manager. | 09/07/2026 | 09/07/2026 | - |
| 6 | Xoá NAT Gateway, subnet và cuối cùng là VPC. Mở Cost Explorer để chắc bill đang giảm. | 10/07/2026 | 10/07/2026 | - |
| 7 | Viết retro thực tập, đóng nốt các Linear ticket còn lại (`UPS-14` đến `UPS-18`). | 11/07/2026 | 11/07/2026 | - |

### Week 12 Achievements

Account về trạng thái sạch. Cost Explorer cho thấy chi phí giảm mạnh sau khi NAT Gateway bị xoá. Tôi đã dựng và dỡ nguyên một stack AWS từ số 0 trong 12 tuần, và hiểu đủ từng phần để giải thích khi phỏng vấn.

### Challenges & Lessons

Cleanup dạy tôi về dependency nhiều hơn cả lúc build. Không xoá được VPC khi còn NAT Gateway, không xoá được NAT khi còn ENI, không xoá được ENI khi task còn chạy. Resource AWS là một đồ thị, cleanup là đồ thị đó chạy ngược. Đây là mô hình tôi sẽ giữ lại sau thực tập.

### Next Week Plan

Thực tập kết thúc ở đây. Việc cá nhân sau: viết một blog post về những gì học được, làm lại chương 5.5 và 5.6 theo trí nhớ xem thứ gì thật sự đọng lại.
