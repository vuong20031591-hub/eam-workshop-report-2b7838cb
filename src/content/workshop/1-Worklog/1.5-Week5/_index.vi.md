---
title: "Nhật ký công việc Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## TUẦN 5 - NHẬT KÝ

### Mục tiêu Tuần 5

Tuần này chuyển sự chú ý sang FE. Init dự án `upscale-FE` bằng TanStack Start (React 19 + Vite 8): upload UI dùng `react-dropzone`, cho phép chọn mode AI/Standard, auth OIDC Cognito qua `react-oidc-context`. Design token cũng chốt trong tuần: violet `#7C3AED`, cyan `#06B6D4`, font Space Grotesk / DM Sans, component dùng shadcn/ui (Radix) trên nền Tailwind v4. Song song đó là hạ tầng FE hosting: S3 static website + CloudFront + ACM cho SPA build.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Init `upscale-FE`: **TanStack Start** (Vite 8) + Tailwind v4 + shadcn/ui + react-dropzone + lucide-react + sonner. | 23/05/2026 | 23/05/2026 | [TanStack Start](https://tanstack.com/start) |
| 2 | Build `UploadZone`, `ModeToggle`, `ResultCard` (file routes `src/routes/*`, TanStack Query); gọi BE qua `VITE_API_URL`. | 24/05/2026 | 25/05/2026 | [TanStack Router](https://tanstack.com/router) |
| 3 | Tạo **S3 bucket** `upscale-fe` (bật static website hosting), block public access + OAC. | 26/05/2026 | 26/05/2026 | [CloudFront OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) |
| 4 | Tạo **CloudFront distribution** trỏ về S3, cache policy default + custom cho `/assets/*` hash (1 năm), SPA fallback `403/404 → /index.html`. | 27/05/2026 | 28/05/2026 | [CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/) |
| 5 | Request **ACM certificate** cho `upscaler.vuongtech.dev` (region `us-east-1` cho CloudFront). | 29/05/2026 | 29/05/2026 | [ACM](https://docs.aws.amazon.com/acm/latest/userguide/) |
| 6 | CI GitHub Actions build `vite build` → sync `dist/` sang `s3://upscale-fe` → `cloudfront create-invalidation`. | 30/05/2026 | 30/05/2026 | - |
| 7 | Deploy preview lên CloudFront, đo TTFB ~85ms từ Singapore edge. | 31/05/2026 | 31/05/2026 | - |

### Kết quả đạt được Tuần 5

FE đã lên CloudFront, HTTPS chạy qua ACM. CI/CD gọn: push `main` là tự sync S3 rồi invalidate CloudFront. Lighthouse Performance 92, TTFB tốt là do edge cache — không phải magic gì hơn.

### Thách thức & Bài học

Ban đầu mình request ACM cert ở `ap-southeast-1` như quán tính, cho đến khi CloudFront báo không xài được. CloudFront chỉ nhận cert từ `us-east-1` vì bản chất nó là global. Sau khi request lại đúng region thì mọi thứ trơn tru, và mình vẫn giữ cert `ap-southeast-1` để dành cho ALB sau này. Bài học đơn giản: một vài dịch vụ AWS được đóng khung ở `us-east-1`, đừng quên.

### Kế hoạch tuần sau

SSE progress endpoint. CORS + presigned upload trực tiếp FE→S3. Đưa ALB đứng trước FastAPI với listener xác thực Cognito.
