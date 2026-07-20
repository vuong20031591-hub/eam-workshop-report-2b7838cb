---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

### Week 9 Objectives

Tuần 9 focus vào scale: load test bằng k6 để có số thật, và spec tile-based inference cho ảnh 8K để không OOM GPU 16GB.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết spec load test plan: k6 script mô phỏng 50 VU trong 10 phút, ramp 5 → 50; scenario upload → poll → download. | 22/06/2026 | 22/06/2026 | [k6](https://k6.io/) |
| 2 | Review PR k6 script + dashboard Grafana Cloud; chạy baseline 1 instance. | 23/06/2026 | 23/06/2026 | - |
| 3 | Đọc kết quả baseline: p95 = 9.2s ở 30 VU, fail rate 0%; xác định GPU 16GB OOM ở 4K → cần tile. | 24/06/2026 | 24/06/2026 | - |
| 4 | Viết spec tile-based inference: chia ảnh 512×512 tile, overlap 32px, blend Gaussian; document trong ADR-005. | 25/06/2026 | 25/06/2026 | [Tiled Inference](https://github.com/xinntao/Real-ESRGAN#--tile) |
| 5 | Review PR implement tile mode + benchmark: ảnh 4K không OOM, latency +18% (chấp nhận được). | 26/06/2026 | 26/06/2026 | - |
| 6 | Chốt cache Redis cho job status (thay vì poll DB): TTL 1h, key `job:{uuid}`; giao provision ElastiCache. | 27/06/2026 | 27/06/2026 | [ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/) |
| 7 | Sprint retro: load test có số thật; team đồng thuận tuần 10 hardening security + tuần 11 auto-scale. | 28/06/2026 | 28/06/2026 | - |

### Week 9 Achievements

Có số thật để nói chuyện với stakeholder: 1 instance g4dn.xlarge xử lý được ~30 VU đồng thời với p95 dưới SLO. Tile mode mở khoá ảnh 8K không OOM. ElastiCache Redis thay poll DB, giảm load DB đáng kể.

### Challenges & Lessons

Bài học đo trước rồi mới quyết định: nếu không chạy k6 thật thì team sẽ tranh cãi mãi về capacity. Đo xong thì mọi người đồng ý ngay. Với tile mode, quan trọng nhất là chọn overlap đủ lớn để không thấy seam — 16px thấy đường ghép, 32px thì mượt. Cái này chỉ có test ảnh thật mới biết.

### Next Week Plan

Hardening security: Secrets Manager rotation, IAM least privilege audit. Viết spec ECS on EC2 + ASG cho auto-scale.
