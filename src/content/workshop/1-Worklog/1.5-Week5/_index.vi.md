---
title: "Nhật ký công việc Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## TUẦN 5 - NHẬT KÝ

### Mục tiêu Tuần 5

Tuần FE. Mình chốt stack (TanStack Start + React 19), design page structure và UX flow, giao Quân bootstrap. Song song giao Khiêm provision S3 static hosting + CloudFront + ACM để có domain HTTPS thật, không phải `.s3-website` xấu xí.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Chốt stack FE: TanStack Start (SSR/SSG + file-based route), React 19, Tailwind v4; viết ADR-002. | 24/05/2026 | 24/05/2026 | [TanStack Start](https://tanstack.com/start) |
| 2 | Design page structure: `/` (upload), `/result/:id`, `/history`; wireframe Figma. | 25/05/2026 | 26/05/2026 | - |
| 3 | Design API contract phía FE: fetch presigned URL, poll status, hiển thị progress; sync với Thắng. | 26/05/2026 | 26/05/2026 | - |
| 4 | Review PR Quân: bootstrap TanStack Start + Tailwind + upload component; feedback vòng 1 (thiếu error state). | 27/05/2026 | 28/05/2026 | - |
| 5 | Review PR Quân vòng 2: đã thêm error/loading state; approve. | 29/05/2026 | 29/05/2026 | - |
| 6 | Review Khiêm: S3 bucket `upscale-fe`, CloudFront distribution, ACM cert `upscale.dev`, alias record. | 30/05/2026 | 30/05/2026 | [CloudFront + ACM](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-procedures.html) |
| 7 | Chạy end-to-end demo FE → BE trên staging domain; note UX gaps cho tuần sau. | 31/05/2026 | 31/05/2026 | - |

### Kết quả đạt được Tuần 5

FE staging live tại `staging.upscale.dev`, upload thật, gọi BE thật, nhận output thật. CloudFront cache HTML với `s-maxage=60` và asset với `max-age=31536000` — mình review setup của Khiêm, chốt phương án này để không phải purge cache thủ công mỗi lần deploy.

### Thách thức & Bài học

Quân mới TanStack Start nên PR đầu thiếu error handling — nếu BE trả 500, UI trắng xoá. Mình review thẳng: "user thấy gì khi mất mạng?" — anh sửa ngay. Bài học chung: PR review không chỉ nhìn code chạy, mà phải nhìn user path khi thứ tệ nhất xảy ra. Với FE điều này càng quan trọng vì user thấy trực tiếp.

### Kế hoạch tuần sau

Design SSE progress contract để show progress bar thật (không phải fake). Review Khiêm set X-Ray tracing cho request path S3 → model → output.
