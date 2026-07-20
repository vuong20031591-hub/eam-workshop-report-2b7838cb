---
title: "Nhật ký công việc Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## TUẦN 1 - NHẬT KÝ

### Mục tiêu Tuần 1

Tuần đầu chủ yếu để dọn nền: mở tài khoản AWS, dựng guardrail trước khi động vào bất cứ thứ gì tốn tiền. Cụ thể là IAM user `upscaler-dev` với MFA và policy tối thiểu, AWS Budgets cảnh báo chi phí, CloudTrail để có audit trail. Song song đó tạo hai repo GitHub `upscale-BE` (FastAPI) và `upscale-FE` (TanStack Start + React 19), đẩy commit khung. Scope MVP cũng chốt luôn trong tuần: Real-ESRGAN x4 cho AI mode, LANCZOS cho Standard, còn bucket S3 để lưu input/output thì để tuần 2 dựng.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Đăng ký AWS Free Tier, bật **AWS Budgets** cảnh báo $10/tháng, bật **CloudTrail** cho region `ap-southeast-1`. | 17/04/2026 | 17/04/2026 | [AWS Free Tier](https://aws.amazon.com/free/) |
| 2 | Tạo **IAM** user `upscaler-dev` + group `Developers`, gắn policy `AmazonS3FullAccess` (dev-only) và `IAMReadOnlyAccess`; bật MFA. | 18/04/2026 | 18/04/2026 | [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) |
| 3 | Tạo GitHub repo `upscale-BE`, `upscale-FE`, push initial commit. | 19/04/2026 | 19/04/2026 | [upscale-BE](https://github.com/vuong20031591-hub/upscale-BE), [upscale-FE](https://github.com/vuong20031591-hub/upscale-FE) |
| 4 | Chốt stack BE: Python 3.11 + FastAPI + PyTorch, GPU CUDA FP16, lưu file qua **boto3** lên **S3**. | 20/04/2026 | 20/04/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| 5 | Chốt stack FE: **TanStack Start** (React 19 + Vite 8) + TS + Tailwind v4 + shadcn/ui (Radix) + react-hook-form + zod + OIDC (Cognito qua `react-oidc-context`); hosting **S3 + CloudFront** (SPA build). | 21/04/2026 | 21/04/2026 | [TanStack Start](https://tanstack.com/start) |
| 6 | Thiết kế API contract: `/health`, `/upscale/ai`, `/upscale/standard`, `/metrics` (Prometheus). | 22/04/2026 | 23/04/2026 | - |
| 7 | Khởi tạo Linear project **AI Upscaler**, tạo epic BE/FE/Infra (AWS)/Docs. | 24/04/2026 | 24/04/2026 | [Linear](https://linear.app/vuongtech/project/ai-upscaler-9cc98aa31b67/overview) |

### Kết quả đạt được Tuần 1

Hai repo GitHub đã initial commit đúng ngày 17/04/2026. Tài khoản AWS sẵn sàng dùng, IAM user có MFA, Budgets alert đã bắn thử một lần cho chắc. BE chốt layout layered (`core/`, `models/`, `services/`, `routers/`) và FE dùng file-based routing của TanStack Start.

### Thách thức & Bài học

IAM policy là chỗ dễ sai nhất vì chưa quen — reflex đầu tiên là gán rộng cho khỏi vướng, nhưng sau đó siết lại rất mất công. Mình bám theo tài liệu AWS IAM Best Practices, bắt đầu bằng managed policy tối thiểu và note lại là tuần 7 sẽ siết dần thành custom policy. Điều mình rút ra: Budgets và CloudTrail nên bật từ ngày đầu tiên, không đợi. Chi phí một cái alert và một cái log group gần như bằng không, nhưng đổi lại là ngủ ngon và có bằng chứng khi cần review.

### Kế hoạch tuần sau

Bootstrap FastAPI skeleton kèm `boto3` client cho S3. Tạo bucket `upscaler-io-dev` bật versioning và lifecycle. Tải `RealESRGAN_x4plus.pth` lên S3 rồi viết `ModelManager` để BE load được weights.
