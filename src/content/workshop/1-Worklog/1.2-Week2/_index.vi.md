---
title: "Nhật ký công việc Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## TUẦN 2 - NHẬT KÝ

### Mục tiêu Tuần 2

Tuần này chia hai nhánh: đọc kỹ Real-ESRGAN để biết weights nào phù hợp, và dựng phần lưu trữ trên S3. Bucket input/output cần versioning, lifecycle 7 ngày cho thư mục tạm, mã hoá SSE-S3. Song song đó là bootstrap FastAPI ở mức tối thiểu (`app/main.py`, `app/core/config.py`) để tuần sau có chỗ nhét endpoint.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Đọc paper Real-ESRGAN, chốt weights `RealESRGAN_x4plus.pth` (~64MB). | 26/04/2026 | 27/04/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| 2 | Tạo **S3 bucket** `upscaler-io-dev` region `ap-southeast-1`, bật versioning + SSE-S3 (AES-256). | 28/04/2026 | 28/04/2026 | [S3 Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html) |
| 3 | Cấu hình **S3 Lifecycle**: xoá object `tmp/*` sau 7 ngày, chuyển `output/*` sang Standard-IA sau 30 ngày. | 29/04/2026 | 29/04/2026 | [S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) |
| 4 | Upload weights lên `s3://upscaler-io-dev/weights/`; viết `download_weight()` dùng boto3. | 30/04/2026 | 30/04/2026 | - |
| 5 | Bootstrap FastAPI: `app/main.py`, `app/core/config.py` load env qua `pydantic-settings`. | 01/05/2026 | 02/05/2026 | [Pydantic Settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) |
| 6 | Test upload/download S3 bằng script, đo latency (~120ms cho ảnh 2MB từ EC2 cùng region). | 03/05/2026 | 03/05/2026 | - |
| 7 | Cập nhật Linear issue UPS-3, UPS-4 sang Done. | 04/05/2026 | 04/05/2026 | - |

### Kết quả đạt được Tuần 2

Bucket sẵn sàng, weights nằm trên S3 thay vì chôn trong Docker image. FastAPI khởi động ổn, `/health` trả 200. Real-ESRGAN cũng chạy được local với card RTX 3060 mượn được để test — chưa dùng cho production nhưng đủ để verify pipeline.

### Thách thức & Bài học

Vấn đề rõ nhất là weights hơn 50MB, đẩy vào Git là sai từ đầu. Cách giải quyết đơn giản: để trên S3, BE tự pull lúc cold-start; đổi lại image Docker sau này gọn hơn nhiều. Cái này thật ra là practice chung cho bất kỳ artifact nào lớn — tách khỏi code repo càng sớm càng đỡ đau về sau, nhất là khi cần build image trên CI.

### Kế hoạch tuần sau

Viết `ModelManager` theo pattern Singleton, lazy-load weights từ S3. Thiết kế endpoint `/upscale/ai` nhận multipart. Chuẩn bị EC2 g5.xlarge làm dev GPU host.
