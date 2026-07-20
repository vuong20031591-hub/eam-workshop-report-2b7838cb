---
title: "Worklog Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## WORKLOG TUẦN 1

Tuần kickoff. Cả tuần tôi không đụng vào một resource AWS nào, và đó là chủ ý. Là team lead, tôi muốn dự án có hình hài trước khi ai đó mở console.

Phần lớn thời gian là ngồi đọc. Tôi đọc workshop hai lượt từ đầu đến cuối, rồi viết một trang tóm chương 5.1 để cả nhóm có cái cụ thể mà tranh luận, chứ không cãi nhau bằng cảm giác. Xong xuôi thì bê roadmap 12 tuần lên Linear thành các epic, mở `UPS-1` (Planning) và `UPS-2` (Architecture doc) làm hai ticket gốc để mọi thứ khác móc vào.

Còn lại là những quyết định nhỏ mà tôi không muốn tuần nào cũng phải bàn lại: region `ap-southeast-1`, prefix `upscale-`, env `dev` và `prod`, Git flow, PR template. Standup 15 phút mỗi sáng, planning thứ Hai, review thứ Sáu. Nhạt, nhưng chốt một lần cho xong.

Tôi cũng vẽ sơ đồ đích (User, CloudFront, ALB, ECS chạy FastAPI và worker CodeFormer, SQS, Redis, S3) và ước tính chi phí sơ bộ để sau này khỏi giật mình.

Thật ra nửa tuần trôi vào việc cắt scope. Workshop có nhiều thứ, ham thì làm hết. Mình không làm hết.

Tuần sau là chương 5.2. Tôi sẽ chủ trì thiết kế IAM và chốt baseline tài khoản.
