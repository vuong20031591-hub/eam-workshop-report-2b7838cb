---
title: "Nhật ký công việc Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## TUẦN 4 - NHẬT KÝ

### Mục tiêu Tuần 4

Focus tuần 4: mở tuyến Standard (LANCZOS trên CPU) để không phải GPU nào cũng gánh, và bắt đầu observability. Mình spec endpoint cho Thắng, chốt log format với Khiêm, và design property tests để coverage không bị mỏng ở phần xử lý ảnh.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Spec `/upscale/standard`: LANCZOS Pillow, CPU-only, giữ EXIF metadata; giao Thắng implement. | 14/05/2026 | 14/05/2026 | [Pillow LANCZOS](https://pillow.readthedocs.io/en/stable/handbook/concepts.html#filters) |
| 2 | Chốt log format với Khiêm: JSON `{ts, level, request_id, path, latency_ms, gpu_util}`; giao Khiêm set CloudWatch Log Group. | 15/05/2026 | 15/05/2026 | [CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/) |
| 3 | Review PR Thắng: `/upscale/standard` + save output S3 `output/` + presigned URL; approve. | 16/05/2026 | 17/05/2026 | - |
| 4 | Design property tests với Thắng: `hypothesis` sinh ảnh random size 100-4000px, verify output không crash + đúng shape. | 18/05/2026 | 19/05/2026 | [Hypothesis](https://hypothesis.readthedocs.io/) |
| 5 | Review PR Thắng: 20 property tests + coverage report; approve khi coverage ≥ 80%. | 20/05/2026 | 20/05/2026 | - |
| 6 | Review Khiêm: CloudWatch Log Group `/upscale/be` + Metric Filter cho `latency_ms` p90; approve. | 21/05/2026 | 21/05/2026 | - |
| 7 | Sprint retro: baseline p90 = 6.1s (AI), 1.4s (Standard); chốt SLO 8s cho tuần sau. | 22/05/2026 | 22/05/2026 | - |

### Kết quả đạt được Tuần 4

Hai endpoint đã chạy song song. CloudWatch có log JSON, filter được p90 latency. Property tests bắt được 2 bug edge case (ảnh 1×1 và ảnh có alpha channel) — Thắng fix ngay trong tuần. SLO 8s được cả team đồng thuận, có căn cứ đo lường.

### Thách thức & Bài học

Cái khó không phải viết test, mà là ép team viết test trước khi merge feature. Mình phải đặt quy tắc: PR không có test là auto-reject. Ban đầu Thắng thấy phiền, nhưng đến khi property test bắt được bug alpha channel — nếu chạy production sẽ crash — thì anh tự nói "may là test bắt được sớm". Đây là văn hoá cần Lead cứng ngay từ tuần đầu, để lâu càng khó ép.

### Kế hoạch tuần sau

FE tuần 5: chốt stack (TanStack Start), design page structure, giao Quân bootstrap. Review Khiêm provision S3 static hosting + CloudFront + ACM cho FE.
