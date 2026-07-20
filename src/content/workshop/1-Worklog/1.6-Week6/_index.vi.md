---
title: "Nhật ký công việc Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## TUẦN 6 - NHẬT KÝ

### Mục tiêu Tuần 6

Ba việc chính: viết SSE endpoint `/upscale/ai/stream` báo phần trăm và step; bật AWS X-Ray tracing cho FastAPI qua `aws-xray-sdk`; và bên FE thêm progress bar + skeleton loading để user không nhìn màn hình trắng khi model đang chạy.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Implement SSE endpoint dùng `StreamingResponse`, yield `{progress, step}` mỗi 200ms. | 01/06/2026 | 01/06/2026 | [FastAPI SSE](https://fastapi.tiangolo.com/advanced/custom-response/) |
| 2 | Tích hợp `aws-xray-sdk-python`, wrap boto3 + requests; segment cho `model.load`, `s3.upload`, `inference`. | 02/06/2026 | 02/06/2026 | [AWS X-Ray Python](https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-python.html) |
| 3 | Cài **X-Ray daemon** trên EC2, gắn IAM policy `AWSXRayDaemonWriteAccess`. | 03/06/2026 | 04/06/2026 | - |
| 4 | Xem service map trên X-Ray console: FastAPI → S3 → GPU inference. | 05/06/2026 | 06/06/2026 | - |
| 5 | FE consume SSE bằng `EventSource`, render `<Progress>` shadcn. | 07/06/2026 | 07/06/2026 | - |
| 6 | Đo latency phân đoạn: `s3.get 180ms + load 90ms + infer 4.1s + s3.put 210ms`. | 08/06/2026 | 08/06/2026 | - |
| 7 | Cập nhật Linear UPS-10, UPS-11. | 09/06/2026 | 09/06/2026 | - |

### Kết quả đạt được Tuần 6

Service map trên X-Ray xác nhận đúng dự đoán ban đầu: bottleneck nằm ở bước inference, còn I/O với S3 hoàn toàn chấp nhận được. FE hiển thị progress real-time, feel của app khác hẳn — không còn cảm giác "app treo" trong vài giây.

### Thách thức & Bài học

SSE bị cắt kết nối sớm khi CloudFront đứng giữa vì mặc định nó buffer response streaming. Cách xử lý: thêm header `X-Accel-Buffering: no` phía BE và tạo cache policy `CachingDisabled` riêng cho path `/upscale/*` trên CloudFront. Hoá ra là CDN nào cũng có mặc định thiên về caching, nên bất kỳ endpoint streaming nào cũng cần policy riêng.

### Kế hoạch tuần sau

Presigned POST cho FE upload trực tiếp lên S3, không đi qua BE nữa. Docker hoá BE. Chuẩn bị ECR.
