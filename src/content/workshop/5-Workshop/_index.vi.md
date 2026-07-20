---
title: "Workshop"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Truy cập S3 an toàn từ môi trường Hybrid bằng VPC Endpoint

#### Tổng quan

AWS PrivateLink giúp workload trong VPC hoặc dưới trung tâm dữ liệu on-premises kết nối tới các dịch vụ AWS mà không phải đi vòng ra Internet công cộng. Đây là lựa chọn phổ biến khi mình cần giữ traffic trong mạng riêng, giảm rủi ro rò rỉ dữ liệu và tránh phụ thuộc vào NAT/Internet Gateway.

Trong bài lab này, mình sẽ dựng, cấu hình và kiểm thử hai loại VPC endpoint để truy cập Amazon S3:

+ **Gateway endpoint** — dùng cho S3 và DynamoDB. Traffic từ VPC đi tới endpoint qua route table, không tốn thêm ENI hay chi phí giờ chạy.
+ **Interface endpoint** — endpoint dựa trên ENI có địa chỉ IP riêng trong subnet, hỗ trợ cả tài nguyên trong VPC lẫn từ on-premises qua Site-to-Site VPN / Direct Connect. Client resolve tên dịch vụ qua DNS về IP của ENI.

Việc chọn loại nào phụ thuộc vào nguồn traffic đến từ đâu: cùng VPC thì Gateway đủ dùng và rẻ; on-premises hoặc peered VPC thì cần Interface.

#### Nội dung

1. [Tổng quan về workshop](5.1-Workshop-overview/)
2. [Chuẩn bị](5.2-Prerequiste/)
3. [Truy cập S3 từ VPC](5.3-S3-vpc/)
4. [Truy cập S3 từ TTDL On-premises](5.4-S3-onprem/)
5. [VPC Endpoint Policies (làm thêm)](5.5-Policy/)
6. [Dọn dẹp tài nguyên](5.6-Cleanup/)
