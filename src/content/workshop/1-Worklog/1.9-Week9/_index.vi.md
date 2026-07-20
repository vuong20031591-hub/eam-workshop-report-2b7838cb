---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WORKLOG TUẦN 9

### Trọng tâm

Lớp edge. CloudFront trước ALB, WAF để phòng thủ cơ bản, Route 53 cho domain thật.

### Việc tôi làm

- Chia việc thành `UPS-13` (CloudFront + Route 53) và `UPS-14` (WAF).
- Chủ trì buổi thiết kế cache: cache mạnh frontend tĩnh, không cache `/api/*`, forward header `Authorization`.
- Review PR ruleset WAF, cắt một rule dư trùng với managed common rule group.
- Review PR Route 53, chốt apex dùng alias trỏ tới CloudFront.
- Tự làm: viết spec cache behavior, chọn WAF managed rule (Common + Known Bad Inputs + rate limit 2000 req/5 phút mỗi IP), soạn kế hoạch chuyển DNS.

### Kết quả

Domain resolve được, HTTPS kết thúc ở CloudFront, WAF chặn nhiễu rõ ràng ngay ngày đầu, ALB nằm gọn sau edge.

### Khó khăn

CloudFront cache nhầm response lỗi ban đầu của frontend. Thêm TTL ngắn cho 4xx/5xx vào spec để không lặp lại ở prod.

### Kế hoạch tuần sau

Vẫn chương 5.9. Cognito cho đăng nhập, và ép CloudWatch dashboard thật sự có ích.
