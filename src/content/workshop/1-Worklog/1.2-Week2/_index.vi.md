---
title: "Nhật ký công việc Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## TUẦN 2 - NHẬT KÝ

### Mục tiêu Tuần 2

Hai nhánh tuần này: design S3 layout để Khiêm provision, và ngồi với Thắng chốt FastAPI folder layout trước khi anh bootstrap. Mình cũng dành thời gian đọc paper Real-ESRGAN để có nền tảng review model code sau này, và bắt đầu vẽ high-level architecture diagram cho UPS-17.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Đọc paper Real-ESRGAN + document Pillow LANCZOS để nắm cơ chế; chốt weights `RealESRGAN_x4plus.pth` (~64MB). | 26/04/2026 | 27/04/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| 2 | Design S3 bucket spec: `upscale-io` region `ap-southeast-1`, prefix `weights/ tmp/ output/`, versioning + SSE-S3. | 28/04/2026 | 28/04/2026 | [S3 Encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html) |
| 3 | Design lifecycle policy: xoá `tmp/*` sau 7 ngày, chuyển `output/*` sang Standard-IA sau 30 ngày; giao Khiêm provision. | 29/04/2026 | 29/04/2026 | [S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) |
| 4 | Review PR Khiêm: bucket tạo xong + upload weights + IAM policy `EC2-Upscale-Role` read/write. | 30/04/2026 | 30/04/2026 | - |
| 5 | Ngồi pair với Thắng chốt FastAPI layout: `app/{core, models, services, routers}`, config qua `pydantic-settings`. | 01/05/2026 | 02/05/2026 | [Pydantic Settings](https://docs.pydantic.dev/latest/concepts/pydantic_settings/) |
| 6 | Review PR Thắng: FastAPI skeleton + `/health` endpoint + Dockerfile dev; approve merge. | 03/05/2026 | 03/05/2026 | - |
| 7 | Update Linear UPS-3, UPS-4 sang Done; viết note kiến trúc cho tuần 3. | 04/05/2026 | 04/05/2026 | - |

### Kết quả đạt được Tuần 2

Spec S3 và spec FastAPI layout đã chốt bằng document — cả Khiêm và Thắng implement theo là chạy. Weights nằm trên S3, không dính vào Docker image, đúng nguyên tắc tách artifact khỏi code repo. Kiến trúc high-level cũng đã xong bản draft đầu, tuần sau sẽ review với team.

### Thách thức & Bài học

Design spec trước khi giao issue là cách mình ép mình phải suy nghĩ đủ sâu — nếu chỉ nói miệng "làm bucket S3 nhé" thì Thắng và Khiêm sẽ phải hỏi đi hỏi lại về lifecycle, encryption, prefix. Một trang design doc mất mình 2 tiếng, nhưng tiết kiệm ít nhất 5-6 giờ tương tác Slack sau đó. Bài học chung: Lead viết doc là investment, không phải overhead.

### Kế hoạch tuần sau

Design `/upscale/ai` endpoint contract (multipart upload, response schema). Review Khiêm provision EC2 g4dn.xlarge. Review Thắng implement `ModelManager` Singleton. Bắt đầu chọn diagram tool (draw.io) cho UPS-18.
