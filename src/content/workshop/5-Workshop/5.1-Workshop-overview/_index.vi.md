---
title : "Giới thiệu"
date : 2024-01-01 
weight : 1
chapter : false
pre : " <b> 5.1. </b> "
---

#### VPC Endpoint là gì

VPC endpoint là một thiết bị ảo do AWS quản lý, có khả năng scale ngang, dự phòng và độ sẵn sàng cao. Nó cho phép tài nguyên trong VPC (EC2, Lambda, container…) nói chuyện trực tiếp với dịch vụ AWS mà không cần Internet Gateway hay NAT, đồng thời không phải lo về availability của bản thân endpoint.

Với S3 thì có hai lựa chọn: **Gateway endpoint** dùng cho tài nguyên chạy ngay trong VPC, còn **Interface endpoint** (PrivateLink) dùng được cho cả tài nguyên trong VPC lẫn từ hệ thống on-premises kết nối vào qua VPN / Direct Connect.

#### Tổng quan về workshop

Workshop này dựng sẵn hai VPC để mô phỏng một môi trường hybrid điển hình:

+ **"VPC Cloud"** chứa các tài nguyên phía cloud như Gateway endpoint và EC2 instance để test.
+ **"VPC On-Prem"** đóng vai một trung tâm dữ liệu / nhà máy tại chỗ. Trong VPC này có sẵn một EC2 chạy strongSwan VPN, được cấu hình tự động để dựng đường hầm Site-to-Site VPN tới AWS Transit Gateway. Đường hầm này mô phỏng kết nối từ on-prem lên AWS cloud.

Để tiết kiệm chi phí, workshop chỉ dựng một instance VPN duy nhất. Với workload production thật, AWS khuyến nghị chạy nhiều thiết bị VPN song song để đảm bảo high availability.

![overview](/images/5-Workshop/5.1-Workshop-overview/diagram1.png)
