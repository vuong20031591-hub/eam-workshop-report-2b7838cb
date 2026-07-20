---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WEEK 3 WORKLOG

### Week 3 Objectives

Chương 5.3 Infrastructure, phần 1. Tuần đầu tiên tôi thật sự dựng thứ gì đó trên AWS: một VPC với subnet public/private và các gateway để traffic ra vào. Tôi làm theo workshop từng bước và vẽ tay từng subnet khi tạo xong.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Đọc hết chương 5.3 phần A, ghi lại mỗi subnet để làm gì. | 03/05/2026 | 03/05/2026 | - |
| 2 | Tạo `upscale-vpc` CIDR `10.0.0.0/16`. | 04/05/2026 | 04/05/2026 | [VPC](https://docs.aws.amazon.com/vpc/latest/userguide/) |
| 3 | Tạo 2 public subnet và 2 private subnet ở `1a` và `1b`. | 05/05/2026 | 05/05/2026 | - |
| 4 | Attach Internet Gateway vào VPC. | 06/05/2026 | 06/05/2026 | - |
| 5 | Tạo NAT Gateway ở public subnet để task private ra internet được. | 07/05/2026 | 07/05/2026 | - |
| 6 | Set route table: public → IGW, private → NAT. | 08/05/2026 | 08/05/2026 | - |
| 7 | Đóng `UPS-3` trên Linear, cập nhật sprint board, nhận `UPS-4` (SG + IAM roles). | 09/05/2026 | 09/05/2026 | - |

### Week 3 Achievements

Network chạy được. VPC và cả 4 subnet hiện đủ trên console. EC2 test ở public subnet ra internet ok; EC2 ở private subnet chỉ ra được qua NAT. Đúng như workshop nói.

### Challenges & Lessons

Lần đầu tôi cấu hình nhầm route table, subnet "private" lại có đường trực tiếp ra IGW — mất luôn ý nghĩa. Bài học: sau mỗi lần đổi route, click vào đọc lại route rồi mới đi tiếp.

### Next Week Plan

Hoàn tất chương 5.3 (security group, IAM role) trong `UPS-4`, sau đó bắt đầu chương 5.4 Storage.
