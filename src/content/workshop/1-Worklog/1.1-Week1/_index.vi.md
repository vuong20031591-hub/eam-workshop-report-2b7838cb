---
title: "Nhật ký công việc Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## TUẦN 1 - NHẬT KÝ

### Mục tiêu Tuần 1

Tuần đầu chủ yếu để dọn nền: mở tài khoản AWS, dựng guardrail trước khi động vào bất cứ thứ gì tốn tiền. Cụ thể là IAM user `upscale-deployer` với `AdministratorAccess` + MFA, region cố định `ap-southeast-1` (Singapore), AWS Budgets cảnh báo chi phí, CloudTrail để có audit trail. Song song đó tạo hai repo GitHub `upscale-BE` (FastAPI) và `upscale-FE` (TanStack Start + React 19), đẩy commit khung. Scope MVP cũng chốt luôn trong tuần: Real-ESRGAN x4 cho AI mode, LANCZOS cho Standard, còn bucket S3 để lưu input/output thì để tuần 2 dựng.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Đăng ký AWS Free Tier, bật **AWS Budgets** cảnh báo $10/tháng, bật **CloudTrail** cho region `ap-southeast-1`. | 17/04/2026 | 17/04/2026 | [AWS Free Tier](https://aws.amazon.com/free/) |
| 2 | Tạo **IAM** user `upscale-deployer` với `AdministratorAccess`, bật console access + MFA, lưu lại account sign-in URL. | 18/04/2026 | 18/04/2026 | [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) |
| 3 | Tạo GitHub repo `upscale-BE`, `upscale-FE`, push initial commit. | 19/04/2026 | 19/04/2026 | [upscale-BE](https://github.com/vuong20031591-hub/upscale-BE), [upscale-FE](https://github.com/vuong20031591-hub/upscale-FE) |
| 4 | Chốt stack BE: Python 3.11 + FastAPI + PyTorch, GPU CUDA FP16, lưu file qua **boto3** lên **S3**. | 20/04/2026 | 20/04/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| 5 | Chốt stack FE: **TanStack Start** (React 19 + Vite 8) + TS + Tailwind v4 + shadcn/ui (Radix) + react-hook-form + zod + OIDC (Cognito qua `react-oidc-context`); hosting **S3 + CloudFront** (SPA build). | 21/04/2026 | 21/04/2026 | [TanStack Start](https://tanstack.com/start) |
| 6 | Thiết kế API contract: `/health`, `/upscale/ai`, `/upscale/standard`, `/metrics` (Prometheus). | 22/04/2026 | 23/04/2026 | - |
| 7 | Khởi tạo Linear project **AI Upscaler**, tạo epic BE/FE/Infra (AWS)/Docs. | 24/04/2026 | 24/04/2026 | [Linear](https://linear.app/vuongtech/project/ai-upscaler-9cc98aa31b67/overview) |

### Kết quả đạt được Tuần 1

Hai repo GitHub đã initial commit đúng ngày 17/04/2026. Tài khoản AWS sẵn sàng dùng, `upscale-deployer` có MFA, region cố định `ap-southeast-1`, Budgets alert đã bắn thử một lần cho chắc. BE chốt layout layered (`core/`, `models/`, `services/`, `routers/`) và FE dùng file-based routing của TanStack Start.

### Thách thức & Bài học

User `upscale-deployer` cấp `AdministratorAccess` là chủ ý — trong giai đoạn build kiểu workshop, chạy đi chạy lại xin permission mất thời gian hơn nhiều so với rủi ro trên tài khoản sandbox, và tuần 7 mình sẽ tách role theo từng service nên nó sẽ gỡ về sau. Luật mình giữ là sau ngày đầu không đăng nhập bằng root nữa, luôn vào qua IAM sign-in URL và MFA. Điều mình rút ra: Budgets và CloudTrail nên bật từ ngày đầu tiên, không đợi. Chi phí một cái alert và một cái log group gần như bằng không, nhưng đổi lại là ngủ ngon và có bằng chứng khi cần review.

### Kế hoạch tuần sau

Bootstrap FastAPI skeleton kèm `boto3` client cho S3. Tạo bucket `upscale-io` bật versioning và lifecycle. Tải `RealESRGAN_x4plus.pth` lên S3 rồi viết `ModelManager` để BE load được weights.
