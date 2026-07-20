---
title: "Worklog Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## WORKLOG TUẦN 1

### Trọng tâm

Kickoff. Là team lead, tôi cần dự án có hình hài rõ trước khi ai đó gõ dòng code đầu tiên, nên tuần này chủ yếu là lên kế hoạch và đọc tài liệu.

### Việc tôi làm

- Đọc hết workshop, tóm chương 5.1 thành một trang kiến trúc để cả nhóm có cái mà bàn.
- Chia roadmap 12 tuần thành các epic trên Linear, mở `UPS-1` (Planning) và `UPS-2` (Architecture doc) làm ticket gốc.
- Chốt convention chung: region `ap-southeast-1`, prefix `upscale-`, tên env `dev`/`prod`, Git flow, PR template.
- Chốt nhịp làm việc: standup 15 phút mỗi sáng, planning thứ Hai, review thứ Sáu.
- Tự làm: vẽ sơ đồ kiến trúc đích (User → CloudFront → ALB → ECS với FastAPI + CodeFormer, SQS, Redis, S3) và viết bản cost baseline đầu tiên.

### Kết quả

Cả nhóm nhìn chung một bức tranh, Linear board bám sát workshop, và có bộ convention khỏi phải cãi lại về sau.

### Khó khăn

Đầu tuần scope còn mờ. Nửa tuần tôi ngồi cắt bớt việc chứ không thêm việc.

### Kế hoạch tuần sau

Chương 5.2 Prerequisites. Tôi sẽ chủ trì thiết kế IAM và chuẩn hoá baseline tài khoản.
