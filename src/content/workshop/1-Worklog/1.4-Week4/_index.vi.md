---
title: "Week 4 Worklog"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WEEK 4 WORKLOG

### Week 4 Objectives

Focus tuần 4: mở tuyến Standard (LANCZOS trên CPU) để không phải GPU nào cũng gánh, và bắt đầu observability. Tôi viết spec endpoint, chốt log format, và design property test plan để coverage không bị mỏng ở phần xử lý ảnh.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết spec `/upscale/standard`: LANCZOS Pillow, CPU-only, giữ EXIF metadata. | 14/05/2026 | 14/05/2026 | [Pillow LANCZOS](https://pillow.readthedocs.io/en/stable/handbook/concepts.html#filters) |
| 2 | Chốt log format: JSON `{ts, level, request_id, path, latency_ms, gpu_util}`; spec CloudWatch Log Group. | 15/05/2026 | 15/05/2026 | [CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/) |
| 3 | Review PR `/upscale/standard` + save output S3 `output/` + presigned URL; approve. | 16/05/2026 | 17/05/2026 | - |
| 4 | Design property test plan: `hypothesis` sinh ảnh random size 100-4000px, verify output shape đúng và không crash. | 18/05/2026 | 19/05/2026 | [Hypothesis](https://hypothesis.readthedocs.io/) |
| 5 | Review PR 20 property tests + coverage report; approve khi coverage ≥ 80%. | 20/05/2026 | 20/05/2026 | - |
| 6 | Review PR CloudWatch Log Group `/upscale/be` + Metric Filter cho `latency_ms` p90; approve. | 21/05/2026 | 21/05/2026 | - |
| 7 | Sprint retro: baseline p90 = 6.1s (AI), 1.4s (Standard); chốt SLO 8s cho tuần sau. | 22/05/2026 | 22/05/2026 | - |

### Week 4 Achievements

Hai endpoint chạy song song. CloudWatch có log JSON, filter được p90 latency. Property tests bắt được 2 bug edge case (ảnh 1×1 và ảnh có alpha channel) trước khi lên production. SLO 8s được cả nhóm đồng thuận, có căn cứ đo lường.

### Challenges & Lessons

Cái khó không phải viết test, mà là ép quy trình: PR không có test là auto-reject. Ban đầu bị càm ràm là phiền, nhưng đến khi property test bắt được bug alpha channel trước production thì team tự đồng ý. Văn hoá này Lead phải cứng ngay từ tuần đầu, để lâu càng khó ép.

### Next Week Plan

Tuần FE: chốt stack TanStack Start, viết spec page structure. Review setup S3 static hosting + CloudFront + ACM cho FE.
