---
title : "Dọn dẹp tài nguyên"
date : 2024-01-01
weight : 6
chapter : false
pre : " <b> 5.6. </b> "
---

Xin chúc mừng, bạn đã hoàn thành workshop! Qua các phần trên, mình đã đi qua hai kiểu kiến trúc để truy cập Amazon S3 mà không cần Internet công cộng:

+ **Gateway endpoint** cho phép EC2 trong VPC nói chuyện thẳng với S3, không cần đi qua Internet Gateway.
+ **Interface endpoint** mở rộng khả năng đó ra cho các tài nguyên nằm dưới trung tâm dữ liệu on-premises, kết nối vào AWS qua Site-to-Site VPN hoặc Direct Connect.

#### Dọn dẹp

1. Vào **Route 53 console → Hosted Zones**, mở zone `s3.us-east-1.amazonaws.com`, chọn **Delete** và gõ `delete` để xác nhận.

   ![hosted zone](/images/5-Workshop/5.6-Cleanup/delete-zone.png)

2. Ở Route 53 Resolver, gỡ liên kết (Disassociate) rule `myS3Rule` khỏi "VPC On-prem" rồi xoá rule đi.

   ![hosted zone](/images/5-Workshop/5.6-Cleanup/vpc.png)

3. Mở **CloudFormation console** và xoá hai stack đã tạo cho lab:
    + `PLOnpremSetup`
    + `PLCloudSetup`

   ![delete stack](/images/5-Workshop/5.6-Cleanup/delete-stack.png)

4. Xoá các S3 bucket đã tạo:
    + Mở S3 console.
    + Chọn từng bucket, bấm **Empty** để dọn object bên trong, sau đó bấm **Delete** và xác nhận.

   ![delete s3](/images/5-Workshop/5.6-Cleanup/delete-s3.png)
