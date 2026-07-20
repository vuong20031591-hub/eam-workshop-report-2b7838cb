---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

### Week 6 Objectives

Progress bar thật + distributed tracing. Tôi design contract SSE (`/upscale/ai/stream`) và giao đôi bên: Thang implement server side, Quan consume phía FE. Song song giao Khiem bật AWS X-Ray để nhìn được bottleneck từ S3 → model → output trong 1 trace.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Design SSE contract: event `progress` (percent, stage), event `done` (output_url), event `error`; document trong OpenAPI extension. | 01/06/2026 | 01/06/2026 | [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| 2 | Review PR Thang: `/upscale/ai/stream` với `StreamingResponse` FastAPI + progress hook trong pipeline. | 02/06/2026 | 03/06/2026 | - |
| 3 | Review PR Quan: `EventSource` phía FE + progress bar + reconnect logic. | 04/06/2026 | 04/06/2026 | - |
| 4 | Chốt X-Ray strategy: 3 subsegment (`s3.download`, `model.inference`, `s3.upload`), sampling rate 10%; giao Khiem set. | 05/06/2026 | 05/06/2026 | [AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/) |
| 5 | Review Khiem: X-Ray daemon + IAM permission + service map hiển thị đúng flow. | 06/06/2026 | 06/06/2026 | - |
| 6 | Đọc trace X-Ray thật: `s3.download` chiếm 30% latency với ảnh > 5MB → note optimize cho tuần 7 (presigned upload trực tiếp). | 07/06/2026 | 07/06/2026 | - |
| 7 | Sprint retro: SSE + X-Ray đều live; team đồng ý tuần 7 chuyển sang presigned direct-upload. | 07/06/2026 | 07/06/2026 | - |

### Week 6 Achievements

Progress bar hiển thị real progress, không phải fake spinner. X-Ray cho thấy chính xác điểm chậm — insight quan trọng nhất: upload S3 đang là bottleneck với ảnh lớn. Đây là lý do tuần 7 tôi chuyển strategy sang presigned URL FE upload trực tiếp, bỏ qua BE.

### Challenges & Lessons

Đọc X-Ray trace là kỹ năng phải học — lần đầu tôi nhìn service map không hiểu gì, phải mở AWS doc. Sau khi hiểu thì insight ra ngay: đừng đoán bottleneck, đo. Trước tuần này team hay đoán "chắc model chậm", đo xong mới thấy S3 upload mới là thủ phạm. Lead phải kéo team về data-driven decision, không dựa cảm giác.

### Next Week Plan

Chốt Docker strategy, ECR setup, presigned direct-upload flow. Review Khiem set ECR + Thang viết Dockerfile production.
