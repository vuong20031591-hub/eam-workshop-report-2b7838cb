---
title: "Worklog Tuần 3"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WORKLOG TUẦN 3

Tuần mạng. VPC phải chuẩn, vì ALB, ECS, EFS, Redis đều nằm trong đó và sau này dời cái nào cũng đau.

Tôi chia `UPS-5` thành sub-ticket cho CIDR plan, subnet, routing, NAT, endpoint, rồi chủ trì buổi whiteboard về topology và viết lại ngay hôm sau để không ai cãi nhau bằng trí nhớ. Có người đề xuất single-AZ cho tiết kiệm. Tôi gạt. Hai AZ, không thương lượng.

Tự làm thì tôi chọn CIDR (`10.20.0.0/16`), tách public và private subnet trên hai AZ, và chốt một NAT trước để giữ bill vừa phải. VPC endpoint thực sự cần là S3, ECR, CloudWatch Logs, còn lại để sau. Tất cả nhét vào ADR mạng.

Kết quả: thiết kế VPC merge xong. Khi có service mới, cả nhóm biết luôn nó thuộc subnet nào, không phải hỏi tôi.

Điểm tôi chưa yên tâm là một NAT duy nhất. Nó đúng nghĩa là single point of failure. Tôi mở follow-up để thêm cái thứ hai trước khi có traffic thật, rồi đi tiếp.

Tuần sau chương 5.4. Security Group và S3. Tôi sẽ chốt convention bucket và policy.
