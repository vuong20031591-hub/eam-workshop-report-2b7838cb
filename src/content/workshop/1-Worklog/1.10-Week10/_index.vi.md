---
title: "Nhật ký công việc Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## TUẦN 10 - NHẬT KÝ

### Mục tiêu Tuần 10

Sinh tài liệu API từ OpenAPI của FastAPI, deploy Redoc lên S3+CloudFront. Đưa AWS Secrets Manager vào giữ token analytics thay vì `.env` trên EC2. Bật AWS WAF managed rule set cho cả CloudFront và API Gateway.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Export `openapi.json`, dùng `redocly` build static HTML. | 07/07/2026 | 07/07/2026 | [Redoc](https://github.com/Redocly/redoc) |
| 2 | Deploy docs lên `s3://upscale-docs` + CloudFront distribution phụ. | 08/07/2026 | 08/07/2026 | - |
| 3 | Tạo secret trong **Secrets Manager** `upscaler/dev/analytics`, cấp IAM policy đọc cho EC2 role. | 09/07/2026 | 09/07/2026 | [Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/) |
| 4 | Refactor `APIConfig`: nếu env `USE_SECRETS_MANAGER=true` → gọi `secretsmanager:GetSecretValue`, cache 5 phút. | 10/07/2026 | 11/07/2026 | - |
| 5 | Bật **AWS WAF v2** WebACL, gắn managed rule `AWSManagedRulesCommonRuleSet` + rate-based rule 2000 req/5min/IP. | 12/07/2026 | 13/07/2026 | [AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/) |
| 6 | Gắn WebACL vào CloudFront distribution FE và API Gateway stage. | 14/07/2026 | 14/07/2026 | - |
| 7 | Viết README chung + kiến trúc AWS diagram (draw.io). | 15/07/2026 | 15/07/2026 | - |

### Kết quả đạt được Tuần 10

Docs public tại `docs.upscaler.vuongtech.dev`. Secrets không còn nằm trong `.env` trên EC2. WAF chặn 3 request malicious ngay ngày đầu bật (mình tự test là chính, nhưng vẫn tính).

### Thách thức & Bài học

Managed rule của WAF chặn nhầm request FE bình thường, thủ phạm là `SizeRestrictions_BODY`. Mình thêm exception cho path `/upload/presign` với body limit 100KB và mọi thứ trở lại bình thường. WAF managed rule mạnh nhưng cần tune theo app cụ thể; kinh nghiệm là luôn để `count` trước, quan sát vài ngày rồi mới chuyển sang `block`.

### Kế hoạch tuần sau

E2E Playwright cho luồng chính. Auto-scaling qua ASG + Launch Template cho GPU worker. Chuẩn bị deploy production.
