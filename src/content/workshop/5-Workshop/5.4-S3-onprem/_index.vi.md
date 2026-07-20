---
title : "Truy cập S3 từ môi trường on-premises"
date : 2024-01-01 
weight : 4 
chapter : false
pre : " <b> 5.4. </b> "
---

#### Tổng quan

Ở phần này mình sẽ tạo một Interface endpoint để truy cập Amazon S3 từ môi trường on-premises (được mô phỏng bằng "VPC On-prem"), traffic đi qua đường VPN thay vì Internet công cộng.

Vì sao lại cần Interface endpoint thay vì Gateway:

+ Gateway endpoint chỉ hoạt động cho tài nguyên chạy trong chính VPC nơi nó được tạo. Traffic từ on-premises hay từ VPC peering không đi được qua Gateway endpoint.
+ Interface endpoint dựa trên ENI có IP riêng trong subnet nên tài nguyên ngoài VPC — kết nối vào qua Site-to-Site VPN hoặc Direct Connect — vẫn có thể resolve và gọi tới dịch vụ.
+ Interface endpoint dùng chung nền tảng AWS PrivateLink với nhiều dịch vụ khác: một số dịch vụ AWS, PrivateLink Endpoint Services do đối tác/khách hàng khác host trong VPC của họ, và các dịch vụ AWS Marketplace. Trong workshop này mình chỉ tập trung vào S3.

![Interface endpoint architecture](/images/5-Workshop/5.4-S3-onprem/diagram3.png)
