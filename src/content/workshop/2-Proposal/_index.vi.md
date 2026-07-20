---
title: "Bản đề xuất"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# IoT Weather Platform cho phòng lab nghiên cứu

Đây là bản đề xuất em dự tính sẽ triển khai trong kỳ thực tập: một nền tảng giám sát thời tiết thời gian thực chạy trên AWS Serverless, phục vụ nhóm *ITea Lab* tại TP. Hồ Chí Minh.

## 1. Tóm tắt

Hệ thống hiện tại của lab gồm khoảng 5 trạm thời tiết dùng Raspberry Pi và cảm biến ESP32, dữ liệu vẫn được thu thập thủ công. Em muốn gom tất cả về một nền tảng chung: dữ liệu đi qua MQTT lên AWS IoT Core, chảy vào S3 data lake, xử lý bằng Glue, rồi hiển thị trên một web app viết bằng TanStack Start. Quyền truy cập giới hạn cho 5 thành viên lab qua Amazon Cognito. Thiết kế tính sẵn cho việc mở rộng lên 10–15 trạm.

## 2. Vấn đề đang gặp

Với cách làm hiện tại, mỗi trạm phải xuất dữ liệu riêng và ai đó phải ngồi ghép lại bằng tay. Càng nhiều trạm thì càng tốn công, và không ai xem được dữ liệu theo thời gian thực. Các nền tảng thương mại như Thingsboard hay CoreIoT thì làm được, nhưng chi phí và độ phức tạp không hợp với quy mô lab.

Giải pháp em đề xuất là dựng một pipeline serverless riêng cho lab: IoT Core nhận MQTT, S3 lưu raw và processed ở hai bucket, Glue Crawlers và ETL jobs chuyển dữ liệu từ data lake sang bucket phân tích, Lambda và API Gateway lo phần backend còn lại. Front-end là app TanStack Start (React 19 + Vite 8) host trên Amplify, đăng nhập qua Cognito bằng OIDC. Người dùng có thể đăng ký thiết bị mới ngay trên web tương tự như Thingsboard, chỉ khác là quy mô nhỏ và nội bộ.

Về ROI: chi phí AWS ước tính khoảng 0,66 USD/tháng, cả năm rơi vào 7,92 USD. Phần cứng đã có sẵn từ hệ thống cũ nên không phát sinh thêm. Cái đáng giá hơn là bỏ được thao tác thủ công cho từng trạm, và có sẵn một nguồn dữ liệu chuẩn cho các anh chị làm AI trong lab dùng để huấn luyện mô hình. Thời gian hoàn vốn khoảng 6–12 tháng, tính theo thời gian tiết kiệm được.

## 3. Kiến trúc

Kiến trúc chia rõ hai lớp: lớp thiết bị biên (Raspberry Pi + cảm biến ESP32) và lớp cloud. Raspberry Pi chạy Raspbian, dùng Docker để lọc dữ liệu trước khi gửi lên IoT Core qua MQTT trên Wi-Fi, ước tính khoảng 1 MB mỗi trạm mỗi ngày. IoT Core rule đẩy dữ liệu thô về S3 data lake. Glue Crawlers lập chỉ mục, ETL jobs biến đổi và ghi sang S3 bucket phân tích. Lambda và API Gateway phục vụ các request từ web app. Amplify host giao diện TanStack Start (TanStack Router file routes, TanStack Query, Tailwind v4, shadcn/ui), Cognito lo phần đăng nhập cho 5 người dùng.

![IoT Weather Station Architecture](/images/2-Proposal/edge_architecture.jpeg)

![IoT Weather Platform Architecture](/images/2-Proposal/platform_architecture.jpeg)

Dịch vụ AWS chính sẽ dùng: IoT Core (ingest MQTT), Lambda (2 hàm chính, kích hoạt Glue job và xử lý phụ), API Gateway (giao tiếp với web app), S3 (2 bucket: raw + processed), Glue (crawlers và ETL), Amplify Hosting (host TanStack Start), Cognito (quản lý user).

## 4. Triển khai kỹ thuật

Em chia dự án thành hai phần — trạm biên và nền tảng cloud — và mỗi phần đi qua bốn giai đoạn: nghiên cứu + vẽ kiến trúc (làm trước kỳ thực tập một tháng), tính chi phí và kiểm tra khả thi (tháng 1), tinh chỉnh kiến trúc để tối ưu chi phí (tháng 2), rồi phát triển, kiểm thử, triển khai (tháng 2–3). Một trong những tinh chỉnh em muốn thử là dùng server functions của TanStack Start để giảm số Lambda handler viết riêng — phần backend gọn hơn thấy rõ.

Về mặt hạ tầng cần chuẩn bị: cảm biến đo nhiệt độ, độ ẩm, lượng mưa, tốc độ gió; ESP32 làm vi điều khiển; Raspberry Pi làm gateway. Bên cloud em cần thao tác đủ tốt với Amplify Hosting, Lambda, Glue (ETL), S3, IoT Core (rules) và Cognito (OIDC qua `react-oidc-context`). Toàn bộ phần cấu hình sẽ viết bằng AWS CDK/SDK để dễ tái tạo.

## 5. Lộ trình

- Trước thực tập (tháng 0): lên kế hoạch, đánh giá lại các trạm cũ.
- Tháng 1: học AWS, nâng cấp phần cứng nếu cần.
- Tháng 2: hoàn thiện kiến trúc, tinh chỉnh chi phí.
- Tháng 3: triển khai, kiểm thử, chuyển giao cho lab.
- Sau thực tập: theo dõi và nghiên cứu thêm trong khoảng 1 năm.

## 6. Ngân sách

Bản chi tiết xem trên [AWS Pricing Calculator](https://calculator.aws/#/estimate?id=621f38b12a1ef026842ba2ddfe46ff936ed4ab01) hoặc [tệp ước tính ngân sách](../attachments/budget_estimation.pdf).

Chi phí hạ tầng ước tính mỗi tháng: Lambda 0,00 USD (1.000 request, 512 MB); S3 Standard 0,15 USD (6 GB, 2.100 request, 1 GB quét); truyền dữ liệu 0,02 USD (1 GB vào + 1 GB ra); Amplify 0,35 USD (256 MB, request 500 ms); API Gateway 0,01 USD (2.000 request); Glue ETL 0,02 USD (2 DPU); Glue Crawlers 0,07 USD (1 crawler); IoT Core MQTT 0,08 USD (5 thiết bị, 45.000 tin nhắn). Tổng khoảng 0,7 USD/tháng, tương đương 8,40 USD cho 12 tháng. Phần cứng Raspberry Pi 5 và cảm biến khoảng 265 USD, đầu tư một lần.

## 7. Rủi ro và phương án dự phòng

Ba rủi ro em nhìn thấy trước: mất mạng (ảnh hưởng trung bình, xác suất trung bình), hỏng cảm biến (ảnh hưởng cao, xác suất thấp), và vượt ngân sách (ảnh hưởng trung bình, xác suất thấp).

Cách giảm thiểu tương ứng: khi mất mạng, Raspberry Pi buffer dữ liệu cục bộ bằng Docker rồi gửi lại khi có kết nối; với cảm biến, em sẽ chuẩn linh kiện dự phòng và kiểm tra định kỳ; chi phí thì bật AWS Budget alerts và rà lại dịch vụ khi báo động. Nếu AWS có sự cố kéo dài, lab vẫn có thể quay lại thu thập thủ công; toàn bộ cấu hình lưu bằng CloudFormation nên khôi phục được nhanh.

## 8. Kỳ vọng kết quả

Sau khi triển khai xong, lab sẽ có dashboard thời gian thực thay cho việc gộp file thủ công, và hệ thống sẵn sàng mở rộng lên 10–15 trạm mà không phải thiết kế lại. Sau một năm, dữ liệu tích lũy có thể dùng cho các nghiên cứu AI trong lab, và bản thân kiến trúc cũng tái sử dụng được cho các dự án IoT khác cùng nhóm.
