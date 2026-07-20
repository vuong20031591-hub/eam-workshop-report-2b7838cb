---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

### Week 5 Objectives

Tuần FE. Tôi chốt stack (TanStack Start + React 19), viết spec page structure và UX flow, viết spec API contract từ phía FE. Song song rà quy trình provision S3 static hosting + CloudFront + ACM để có domain HTTPS thật.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Chốt stack FE trong ADR-002: TanStack Start (SSR/SSG + file-based route), React 19, Tailwind v4. | 24/05/2026 | 24/05/2026 | [TanStack Start](https://tanstack.com/start) |
| 2 | Viết spec page structure: `/` (upload), `/result/:id`, `/history`; wireframe Figma. | 25/05/2026 | 26/05/2026 | - |
| 3 | Viết spec API contract phía FE: fetch presigned URL, poll status, hiển thị progress. | 26/05/2026 | 26/05/2026 | - |
| 4 | Review PR bootstrap TanStack Start + Tailwind + upload component; feedback vòng 1 (thiếu error state). | 27/05/2026 | 28/05/2026 | - |
| 5 | Review PR vòng 2 sau khi thêm error/loading state; approve. | 29/05/2026 | 29/05/2026 | - |
| 6 | Review PR S3 bucket `upscale-fe`, CloudFront distribution, ACM cert `upscale.dev`, alias record. | 30/05/2026 | 30/05/2026 | [CloudFront + ACM](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-procedures.html) |
| 7 | Chạy end-to-end demo FE → BE trên staging domain; note UX gaps cho tuần sau. | 31/05/2026 | 31/05/2026 | - |

### Week 5 Achievements

FE staging live tại `staging.upscale.dev`, upload thật, gọi BE thật, nhận output thật. CloudFront cache HTML với `s-maxage=60` và asset với `max-age=31536000` — chốt phương án này để không phải purge cache thủ công mỗi lần deploy.

### Challenges & Lessons

Bài học review FE lần đầu: không chỉ nhìn code chạy, mà phải hỏi user thấy gì khi mất mạng hay khi BE trả 500. UI trắng xoá là bug nghiêm trọng hơn cả lỗi 500 chính nó. Từ tuần này tôi thêm rule: mọi PR FE phải có ảnh chụp error state trước khi review.

### Next Week Plan

Viết spec SSE progress contract để show progress bar thật. Rà kế hoạch bật AWS X-Ray tracing cho request path S3 → model → output.
