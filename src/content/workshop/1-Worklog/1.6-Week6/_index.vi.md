---
title: "Week 6 Worklog"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WEEK 6 WORKLOG

### Week 6 Objectives

Progress bar thật + distributed tracing. Tôi viết spec SSE (`/upscale/ai/stream`) cho cả BE và FE, và chốt strategy bật AWS X-Ray để nhìn bottleneck từ S3 → model → output trong 1 trace.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết spec SSE contract: event `progress`, event `done`, event `error`; document trong OpenAPI extension. | 01/06/2026 | 01/06/2026 | [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) |
| 2 | Review PR `/upscale/ai/stream` với `StreamingResponse` FastAPI + progress hook trong pipeline. | 02/06/2026 | 03/06/2026 | - |
| 3 | Review PR `EventSource` phía FE + progress bar + reconnect logic. | 04/06/2026 | 04/06/2026 | - |
| 4 | Chốt X-Ray strategy: 3 subsegment (`s3.download`, `model.inference`, `s3.upload`), sampling rate 10%. | 05/06/2026 | 05/06/2026 | [AWS X-Ray](https://docs.aws.amazon.com/xray/latest/devguide/) |
| 5 | Review PR X-Ray daemon + IAM permission + service map hiển thị đúng flow. | 06/06/2026 | 06/06/2026 | - |
| 6 | Đọc trace X-Ray thật: `s3.download` chiếm 30% latency với ảnh > 5MB → mở note optimize presigned direct-upload. | 07/06/2026 | 07/06/2026 | - |
| 7 | Sprint retro: SSE + X-Ray đều live; chốt tuần 7 chuyển sang presigned direct-upload. | 07/06/2026 | 07/06/2026 | - |

### Week 6 Achievements

Progress bar hiển thị real progress, không phải fake spinner. X-Ray cho thấy chính xác điểm chậm — insight quan trọng nhất: upload S3 đang là bottleneck với ảnh lớn, dẫn đến quyết định đổi strategy sang direct-upload.

### Challenges & Lessons

Đọc X-Ray trace là kỹ năng phải học — lần đầu nhìn service map không hiểu gì, phải mở AWS doc. Sau khi hiểu thì rút ra nguyên tắc: đừng đoán bottleneck, đo. Trước tuần này tôi hay đoán chắc model chậm, đo xong mới thấy S3 upload mới là thủ phạm. Lead phải kéo team về data-driven decision, không dựa cảm giác.

### Next Week Plan

Chốt Docker strategy, ECR setup, presigned direct-upload flow. Rà spec Dockerfile production.
