---
title: "Week 11 Worklog"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WEEK 11 WORKLOG

### Week 11 Objectives

Chương 5.9 Deployment. Build frontend, upload lên bucket S3 static, invalidate CloudFront để người dùng thật sự thấy bản mới.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Chạy `npm run build` ở local, kiểm tra thư mục `dist/`. | 28/06/2026 | 28/06/2026 | - |
| 2 | Upload `dist/` lên `upscale-static-*` qua S3 console. | 29/06/2026 | 29/06/2026 | - |
| 3 | Tạo CloudFront invalidation cho `/*` và chờ. | 30/06/2026 | 30/06/2026 | - |
| 4 | Mở site, upload ảnh thật, thấy bản upscaled trả về. | 01/07/2026 | 01/07/2026 | - |
| 5 | Chia sẻ URL trong Slack cho team dùng thử. Ghi lại feedback ngày đầu. | 02/07/2026 | 02/07/2026 | - |
| 6 | Viết ghi chú "how to deploy" ngắn trên Linear ticket để sau khỏi quên các bước. | 03/07/2026 | 03/07/2026 | - |
| 7 | Đóng `UPS-13` trên Linear, mở `UPS-14` (cleanup + retro). | 04/07/2026 | 04/07/2026 | - |

### Week 11 Achievements

Frontend đã live. Người dùng upload ảnh và vài giây sau nhận bản nét hơn. Mười tuần trước tôi không hình dung được, tuần này là tuần "hái quả".

### Challenges & Lessons

Lần đầu tôi quên invalidate CloudFront, mất 20 phút cứ nghĩ deploy bị hỏng. Bài học: với CloudFront, "file đã ở S3" không phải là "cả thế giới thấy được".

### Next Week Plan

Tuần cuối: chương 5.10 Cleanup, viết retro, đóng nốt các Linear ticket còn lại.
