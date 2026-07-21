---
title: "Worklog Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WORKLOG TUẦN 2

Tuần IAM, kèm chạm nhẹ VPC và EC2. Vẫn học, vẫn lab. Vai lead tuần này chủ yếu là giữ nhịp, họp thiết kế ngắn một buổi, và review lại việc mọi người làm. `UPS-2` trên Linear.

Phần lab IAM tôi tự làm hết. Tạo User, Group, Role, Policy, bật MFA cho tài khoản root, rồi nghịch Least Privilege bằng cách cố tình deny chính mình rồi đọc thông báo lỗi. Nghe hơi ngớ ngẩn nhưng đó là cách hiểu policy nhanh nhất. Bài học "không cắm access key dài hạn lên máy" thì tôi học kiểu suýt commit access key lên repo, rotate ngay và đi tiếp.

Nửa còn lại là VPC và EC2. Tôi làm lab theo hướng dẫn, vẽ lại default VPC ra giấy, rồi dựng lại từ đầu để biết mỗi mảnh dùng làm gì. Chạy một EC2 instance, SSH vào, terminate. Không gì to tát, nhưng dẹp được rất nhiều giả định sai.

Về team, tôi viết một ghi chú ngắn cách nhóm sẽ dùng IAM (group admin, group dev, một service user cho CI sau này, không bao giờ dùng root access key) và ghim trong repo. Chưa phải ADR, mới là working agreement. Có bạn hay với tay tới `AdministratorAccess` trong lab, tôi nhắc lại. Sandbox thì được, thói quen mang theo thì không.

Tuần sau: IAM Role cho EC2, Cloud9, và host static site trên S3.
