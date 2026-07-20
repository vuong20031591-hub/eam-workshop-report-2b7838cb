---
title: "Blog 2"
date: 2026-05-07
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Bộ ba dịch vụ AWS trong kiến trúc

### Tiêu đề bài viết

**Bộ ba dịch vụ AWS trong kiến trúc — VPC, EC2 và EFS**

### Tóm tắt nội dung

Kiến trúc trong hình sử dụng ba dịch vụ cốt lõi của AWS gồm **Amazon VPC**, **Amazon EC2** và **Amazon Elastic File System (EFS)** để xây dựng một hệ thống an toàn, linh hoạt và có tính sẵn sàng cao.

![Sơ đồ kiến trúc VPC, EC2 và EFS](/images/blog2/vpc-ec2-efs-architecture.png)

### Nội dung chính

#### Amazon VPC (Virtual Private Cloud)

Amazon VPC đóng vai trò là mạng riêng ảo, giúp cô lập và bảo vệ toàn bộ tài nguyên trên AWS. Bên trong VPC, hệ thống được chia thành nhiều subnet trải rộng trên các Availability Zone khác nhau, giúp tăng khả năng chịu lỗi và quản lý lưu lượng mạng hiệu quả hơn.

#### Amazon EC2 (Elastic Compute Cloud)

Amazon EC2 là dịch vụ máy chủ ảo chịu trách nhiệm chạy ứng dụng và xử lý các yêu cầu từ người dùng. Việc triển khai nhiều EC2 ở các Availability Zone khác nhau giúp hệ thống duy trì hoạt động ngay cả khi một khu vực gặp sự cố, đồng thời dễ dàng mở rộng khi nhu cầu sử dụng tăng lên.

#### Amazon Elastic File System (EFS)

Amazon EFS là dịch vụ lưu trữ tệp dùng chung cho nhiều EC2. Thông qua các Mount Target được đặt tại từng Availability Zone, các máy chủ EC2 có thể truy cập cùng một nguồn dữ liệu, đảm bảo tính đồng nhất và loại bỏ nhu cầu sao chép dữ liệu giữa các máy chủ.

### Kết luận

Sự kết hợp giữa VPC, EC2 và EFS tạo nên một kiến trúc có khả năng mở rộng cao, dữ liệu được chia sẻ tập trung, tính sẵn sàng tốt và dễ dàng quản lý. Đây là mô hình thường được sử dụng cho các ứng dụng web, hệ thống doanh nghiệp và các nền tảng cần nhiều máy chủ cùng truy cập một nguồn dữ liệu chung.
