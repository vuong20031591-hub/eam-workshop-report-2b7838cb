---
title: "Blog 3"
date: 2026-06-20
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# Kiến trúc Serverless trên AWS

### Tiêu đề bài viết

**Kiến trúc Serverless trên AWS — Xây dựng ứng dụng quản lý sách không cần máy chủ**

### Tóm tắt nội dung

Hệ thống trong sơ đồ được xây dựng theo mô hình **Serverless** trên nền tảng AWS, kết hợp các dịch vụ **Amazon S3**, **Amazon API Gateway**, **AWS Lambda** và **Amazon DynamoDB**. Mô hình này giúp ứng dụng hoạt động linh hoạt, tự động mở rộng theo lưu lượng truy cập và giảm chi phí vận hành do không cần quản lý máy chủ.

![Sơ đồ kiến trúc Serverless](/images/blog3/serverless-architecture.png)

### Nội dung chính

#### Amazon S3 - Static Website Hosting

Đầu tiên, người dùng truy cập website được lưu trữ dưới dạng **Static Website** trên **Amazon S3**. S3 không chỉ lưu trữ giao diện người dùng (HTML, CSS, JavaScript) mà còn đóng vai trò hosting với khả năng phân phối nội dung nhanh chóng và chi phí thấp. Sau khi giao diện được tải, mọi thao tác như xem danh sách sách, thêm sách mới hoặc xóa sách sẽ được gửi đến tầng API.

#### Amazon API Gateway - Cổng giao tiếp API

**Amazon API Gateway** đóng vai trò là cầu nối giữa giao diện người dùng và các hàm xử lý phía sau. Dịch vụ này nhận các HTTP request từ người dùng, định tuyến chúng đến đúng Lambda function tương ứng, và trả về kết quả. API Gateway cũng cung cấp các tính năng bảo mật, giới hạn tốc độ (throttling) và theo dõi log một cách tự động.

#### AWS Lambda - Xử lý logic nghiệp vụ

Mỗi yêu cầu sẽ được chuyển đến một **AWS Lambda** tương ứng:

- **GET /books** → gọi hàm `list_books` để lấy danh sách sách từ **Amazon DynamoDB**
- **POST /books** → gọi hàm `create_book` để thêm sách mới vào database
- **DELETE /books/:id** → gọi hàm `delete_book` để xóa sách theo ID

Lambda chỉ chạy khi có request, giúp tối ưu chi phí vì bạn chỉ trả tiền cho thời gian thực thi thực tế. Hơn nữa, Lambda tự động scale theo số lượng request mà không cần cấu hình thủ công.

#### Amazon DynamoDB - Cơ sở dữ liệu NoSQL

**Amazon DynamoDB** là cơ sở dữ liệu NoSQL được quản lý hoàn toàn, lưu trữ thông tin về sách trong bảng **Books table**. DynamoDB cung cấp hiệu năng cao, độ trễ thấp và khả năng mở rộng tự động, rất phù hợp với các ứng dụng serverless cần truy xuất dữ liệu nhanh chóng.

#### Xử lý hình ảnh tự động

Đối với hình ảnh, khi người dùng tải lên một file mới, ảnh sẽ được lưu vào **S3 Bucket** chứa ảnh gốc (store raw file). Sự kiện này sẽ tự động kích hoạt hàm **Lambda resize_image**, thực hiện thay đổi kích thước và tối ưu hình ảnh trước khi lưu vào một **S3 Bucket** khác dành cho ảnh đã xử lý (store resized file). 

Cơ chế event-driven này hoàn toàn tự động, không cần can thiệp thủ công, giúp website tải nhanh hơn và tối ưu dung lượng lưu trữ. Điều này đặc biệt hữu ích khi hiển thị thumbnail hoặc responsive images cho các thiết bị khác nhau.

### Ưu điểm của kiến trúc Serverless

#### 1. Không cần quản lý máy chủ

Bạn không phải lo lắng về việc cài đặt, cập nhật hoặc bảo trì máy chủ. AWS tự động xử lý mọi vấn đề về hạ tầng.

#### 2. Tự động mở rộng

Hệ thống tự động scale up khi có nhiều người dùng và scale down khi lưu lượng giảm, đảm bảo hiệu suất tối ưu mà không lãng phí tài nguyên.

#### 3. Tiết kiệm chi phí

Chỉ trả tiền cho những gì bạn sử dụng - số lần Lambda được gọi, dung lượng DynamoDB thực tế, và băng thông S3. Không có chi phí cho máy chủ chạy idle.

#### 4. Tốc độ phát triển nhanh

Các developer có thể tập trung vào code logic nghiệp vụ thay vì lo về infrastructure, giúp đưa sản phẩm ra thị trường nhanh hơn.

#### 5. Độ tin cậy cao

Mỗi dịch vụ AWS đều có SLA cao và được replicate trên nhiều Availability Zone, đảm bảo hệ thống luôn sẵn sàng.

### Kết luận

Nhìn chung, kiến trúc Serverless tận dụng tối đa các dịch vụ được quản lý của AWS để xây dựng một hệ thống hiện đại, có khả năng mở rộng cao, dễ bảo trì và phù hợp với các ứng dụng web cần xử lý dữ liệu cũng như hình ảnh một cách tự động.

Mô hình này đặc biệt phù hợp với:
- Startup và dự án nhỏ với ngân sách hạn chế
- Ứng dụng có lưu lượng truy cập không đều
- Hệ thống cần phát triển và triển khai nhanh
- Các use case xử lý event-driven như upload file, xử lý ảnh, gửi notification

Bằng cách loại bỏ gánh nặng quản lý server, Serverless cho phép team tập trung vào việc tạo ra giá trị cho người dùng thay vì dành thời gian cho vận hành hạ tầng.

---

### Bài viết đã được chia sẻ trên AWS Study Group

![Bài viết trên AWS Study Group VN](/images/blog3/facebook-post.png)
