---
title: "Worklog Tuần 3"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Mục Tiêu Tuần 3

- Sử dụng IAM Roles để EC2 truy cập dịch vụ AWS an toàn, không cần lưu access key.
- Làm quen với AWS Cloud9 làm môi trường phát triển trên trình duyệt.
- Triển khai Static Website trên Amazon S3 và kiểm tra truy cập công khai.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tìm hiểu IAM Roles for EC2 và gán IAM Role cho EC2 instance để truy cập dịch vụ AWS an toàn. | 01/05/2026 | 01/05/2026 | [IAM Roles for EC2](https://000048.awsstudygroup.com/) |
| T3 | Tạo môi trường AWS Cloud9 và khám phá workspace phát triển trên cloud. | 04/05/2026 | 04/05/2026 | [AWS Cloud9](https://000049.awsstudygroup.com/) |
| T4 | Thực hành code, chạy lệnh và quản lý file trong AWS Cloud9. | 05/05/2026 | 05/05/2026 | [Cloud9 Usage](https://000049.awsstudygroup.com/) |
| T5 | Tạo Amazon S3 bucket, cấu hình Static Website Hosting và upload file website. | 06/05/2026 | 06/05/2026 | [S3 Static Website](https://000057.awsstudygroup.com/) |
| T6 | Kiểm tra khả năng truy cập website, cấu hình permissions cho bucket và xác nhận deploy thành công. | 07/05/2026 | 07/05/2026 | [S3 Permissions](https://000057.awsstudygroup.com/) |

### Kết quả đạt được Tuần 3

- Gán được IAM Role cho EC2 instance, cho phép truy cập dịch vụ AWS mà không cần lưu credentials.
- Thiết lập AWS Cloud9 và thực hành code trực tiếp trên trình duyệt.
- Triển khai thành công Static Website trên S3 với public access.
- Hiểu về Bucket Policy và Public Access Block khi host trên S3.

### Khó khăn & Bài học

- **Khó khăn:**
  - Cấu hình S3 bucket để host công khai yêu cầu tắt Block Public Access và viết Bucket Policy đúng — dễ bị sai bảo mật.
- **Giải pháp:**
  - Làm đúng theo lab awsstudygroup, chỉ mở quyền tối thiểu cần cho static site và kiểm tra lại Bucket Policy sau khi deploy.
- **Bài học:**
  - S3 mạnh nhưng rất nhạy về permissions — luôn kiểm tra kỹ trước khi để bucket ở chế độ public.

### Kế hoạch Tuần tới

- Đi tiếp các chủ đề S3: versioning, lifecycle và encryption.
- Tìm hiểu CloudFront để phân phối static website qua CDN.
- Bắt đầu ghép các dịch vụ AWS thành một demo nhỏ end-to-end.
