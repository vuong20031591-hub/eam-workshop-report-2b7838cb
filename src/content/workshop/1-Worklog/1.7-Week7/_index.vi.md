---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

### Week 7 Objectives

Chuyển pipeline sang container + presigned direct-upload. Tôi chốt strategy Docker multi-stage trong ADR-003, viết spec presigned direct-upload flow, và review các PR liên quan (Dockerfile, ECR, xoá weights khỏi git).

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết ADR-003 Docker strategy: multi-stage, base `nvidia/cuda:12.4.0-runtime-ubuntu22.04`, image target ≤ 2GB. | 08/06/2026 | 08/06/2026 | [Docker Multi-stage](https://docs.docker.com/build/building/multi-stage/) |
| 2 | Review PR UPS-4: Dockerfile + docker-compose + healthcheck; feedback (thiếu non-root user), approve vòng 2. | 09/06/2026 | 10/06/2026 | - |
| 3 | Review PR UPS-7: xoá weights khỏi git history + `.gitignore` + script pull từ S3 ở entrypoint. | 11/06/2026 | 11/06/2026 | [git filter-repo](https://github.com/newren/git-filter-repo) |
| 4 | Review PR ECR repo `upscale-be` + IAM policy push/pull + GitHub Actions push on tag. | 12/06/2026 | 12/06/2026 | [Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/) |
| 5 | Viết spec presigned direct-upload flow: FE xin URL từ `/upload/init`, PUT thẳng S3, gọi `/upscale/ai` với `object_key`. | 13/06/2026 | 13/06/2026 | - |
| 6 | Review PR endpoint `/upload/init` (presigned PUT 5 phút) + refactor `/upscale/ai` nhận `object_key`. | 14/06/2026 | 14/06/2026 | - |
| 7 | Review PR FE dùng presigned PUT + progress upload thật; end-to-end test ảnh 20MB không qua BE. | 14/06/2026 | 14/06/2026 | - |

### Week 7 Achievements

Docker image production 1.7GB, chạy trên EC2 GPU đúng như dev. ECR có tag `v0.7.0`. Presigned direct-upload giảm latency perceived ~40% cho ảnh > 10MB — user thấy progress upload chạy tay, không phải chờ BE proxy. UPS-4, UPS-7 close.

### Challenges & Lessons

UPS-7 (remove weights khỏi git) là bài học lớn: repo đã commit weights thì dù xoá vẫn còn trong history. `git filter-repo` phải chạy force-push, mọi người phải re-clone. Với vai trò Lead, tôi phải viết migration note rõ ràng và schedule đúng lúc mọi người rảnh — nếu không sẽ mất nửa ngày chỉ để sync lại repo.

### Next Week Plan

Chốt strategy auth: Cognito hay self-managed JWT. Viết spec rate limit + WAF baseline. Chuẩn bị load test plan.
