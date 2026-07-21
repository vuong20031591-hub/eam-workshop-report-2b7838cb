---
title: "Worklog Tuần 3"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WORKLOG TUẦN 3

Tuần 3 xoay quanh IAM Role cho EC2, Cloud9, và lần đầu host trên S3. Toàn lab. `UPS-3` trên Linear.

Lab IAM Role cho EC2 là bài khiến instance profile "vào đầu" tôi. Không cần cắm key lên box, instance assume role và SDK tự chạy. Tôi làm lab hai lần, một lần theo hướng dẫn, một lần tự dựng lại từ đầu, vì đúng chỗ trống đó mới lộ ra mình chưa hiểu cái gì.

Cloud9 dùng được. Tôi mở nó cho lab S3 rồi lại quay về máy mình, nói thật là vậy. Nó tốt khi máy ai đó dở chứng.

Phần lớn thời gian là lab S3 static website. Tạo bucket, upload `index.html`, chỉnh Bucket Policy đến khi public read chịu chạy, và bật Static Website Hosting. Lần đầu quên tắt Block Public Access, ngồi hai chục phút hỏi vì sao vẫn 403. Lỗi đó tôi không lặp lần hai.

Về team, tôi review nhanh mấy ghi chú IAM tuần trước của mọi người, chỉ ra hai chỗ hay đọc sai một statement policy. Không formal, kiểu ngồi ăn trưa và whiteboard.

Tuần sau: RDS và Lightsail.
