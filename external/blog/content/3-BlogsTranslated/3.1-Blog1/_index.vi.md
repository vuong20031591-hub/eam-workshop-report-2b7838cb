---
title: "Blog 1"
date: 2026-06-11
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Kiến trúc tổng quan — AI Image Upscaling

### Tiêu đề bài viết

**Kiến trúc tổng quan — AI Image Upscaling trên AWS**

### Tóm tắt nội dung

**Mục tiêu:** Dịch vụ API nâng cấp ảnh bằng AI (Real-ESRGAN) và phương pháp truyền thống (LANCZOS), tối ưu cho GPU để đạt chất lượng cao và hiệu năng tốt.

![Sơ đồ kiến trúc AI Image Upscaling](/images/blog1/ai-image-upscaling-architecture.png)

### Kiến trúc chính

**Frontend Layer**
- CDN và hosting tĩnh (CloudFront / Amplify) kết hợp WAF ở rìa để bảo vệ và phân phối nội dung nhanh.

**Backend API Layer**
- API nhẹ (FastAPI) nhận file, kiểm tra, trả kết quả và metadata.
- Đặt sau Application Load Balancer để scale linh hoạt.

**AI Processing Layer**
- Mô hình deep learning chạy trên GPU (SageMaker / EC2 GPU / AMI).
- Module chuyên biệt cho face-enhancement (GFPGAN) và phục hồi ảnh (CodeFormer).

**Orchestration & Queue**
- Hàng đợi công việc (SQS) điều phối tác vụ nặng bất đồng bộ.
- Hỗ trợ retry và cân bằng tải giữa các worker xử lý AI.

**Storage & Cache**
- Object storage (S3) cho ảnh đầu vào và output.
- Database (DynamoDB) cho metadata và trạng thái job.
- Cache (ElastiCache) cho kết quả phổ biến, giảm latency.

**Monitoring & Security**
- Logging và metrics (CloudWatch) cho vận hành.
- Secrets management (Secrets Manager) cho credential và API keys.

### Những điểm chính

#### Các quyết định thiết kế chính

- Tách rõ API và workload AI để scale độc lập (API nhiều instance nhỏ, AI scale trên GPU).
- Queue-driven processing cho tác vụ nặng, làm mềm spike load và tăng độ bền hệ thống.
- Preload model khi có thể để giảm độ trễ request đầu tiên; vẫn hỗ trợ lazy-load nếu cần.
- FP16 và tile-based processing giảm tiêu thụ bộ nhớ GPU và xử lý an toàn ảnh lớn.
- Trả về metadata chi tiết (số mặt, thời gian xử lý, gợi ý chế độ) để frontend hiển thị thông tin hữu ích.

#### Ưu điểm

- Linh hoạt, dễ triển khai trên cloud.
- Tách trách nhiệm rõ ràng, dễ tối ưu chi phí (scale GPU theo nhu cầu).
- Cải thiện UX bằng metadata và chế độ xử lý gợi ý.

#### Rủi ro & cải tiến đề xuất

- **Model download / OOM:** cần retry logic, alerting và fallback strategy (tile/precision giảm).
- **Chi phí GPU cao:** autoscaling theo queue, cân nhắc Spot instances.
- **Tối ưu latency:** cache kết quả, trả pre-signed URL cho object storage thay vì stream qua API.

### Kết luận

Kiến trúc cân bằng giữa chất lượng ảnh và vận hành — phù hợp cho môi trường cloud, dễ mở rộng và có các điểm cải tiến rõ ràng cho hiệu năng và chi phí.
