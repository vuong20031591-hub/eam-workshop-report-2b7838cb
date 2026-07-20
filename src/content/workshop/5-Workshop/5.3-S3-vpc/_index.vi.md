---
title : "Truy cập S3 từ VPC"
date : 2024-01-01 
weight : 3
chapter : false
pre : " <b> 5.3. </b> "
---

#### Dùng Gateway endpoint

Ở phần này mình sẽ tạo một Gateway endpoint để một EC2 instance trong VPC có thể upload object lên S3 mà không đi qua Internet công cộng. Khi tạo endpoint chỉ cần chọn VPC mình muốn gắn vào và dịch vụ đích — ở đây là S3.

![overview](/images/5-Workshop/5.3-S3-vpc/diagram2.png)

#### Nội dung

- [Tạo gateway endpoint](3.1-create-gwe/)
- [Kiểm tra gateway endpoint](3.2-test-gwe/)
