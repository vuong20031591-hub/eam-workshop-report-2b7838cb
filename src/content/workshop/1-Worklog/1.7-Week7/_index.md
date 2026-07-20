---
title: "Week 7 Worklog"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WEEK 7 WORKLOG

### Week 7 Objectives

Move the pipeline to containers + presigned direct-upload. I locked the multi-stage Docker strategy in ADR-003, wrote the presigned direct-upload flow spec, and reviewed the related PRs (Dockerfile, ECR, purging weights from git).

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Wrote ADR-003 Docker strategy: multi-stage, base `nvidia/cuda:12.4.0-runtime-ubuntu22.04`, image target ≤ 2GB. | 08/06/2026 | 08/06/2026 | [Docker Multi-stage](https://docs.docker.com/build/building/multi-stage/) |
| 2 | Reviewed the UPS-4 PR: Dockerfile + docker-compose + healthcheck; feedback (missing non-root user), approved on round 2. | 09/06/2026 | 10/06/2026 | - |
| 3 | Reviewed the UPS-7 PR: purged weights from git history + `.gitignore` + entrypoint script that pulls from S3. | 11/06/2026 | 11/06/2026 | [git filter-repo](https://github.com/newren/git-filter-repo) |
| 4 | Reviewed the ECR `upscale-be` repo + push/pull IAM policy + GitHub Actions push-on-tag PR. | 12/06/2026 | 12/06/2026 | [Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/) |
| 5 | Wrote the presigned direct-upload flow spec: FE requests URL from `/upload/init`, PUTs directly to S3, then calls `/upscale/ai` with `object_key`. | 13/06/2026 | 13/06/2026 | - |
| 6 | Reviewed the `/upload/init` endpoint PR (5-min presigned PUT) + `/upscale/ai` refactor to take `object_key`. | 14/06/2026 | 14/06/2026 | - |
| 7 | Reviewed the FE PR using presigned PUT + real upload progress; end-to-end test with a 20MB image never touches the BE. | 14/06/2026 | 14/06/2026 | - |

### Week 7 Achievements

Production Docker image at 1.7GB, runs on the GPU EC2 exactly like dev. ECR is tagged `v0.7.0`. Presigned direct-upload cut perceived latency ~40% for images > 10MB — the upload progress moves in real time instead of waiting for a BE proxy. UPS-4, UPS-7 closed.

### Challenges & Lessons

UPS-7 (purging weights from git) was a big lesson: once weights are committed, deletion doesn't remove them from history. `git filter-repo` requires a force-push and everyone has to re-clone. As Lead I had to write a clear migration note and schedule it when everyone had time — otherwise you burn half a day just re-syncing repos.

### Next Week Plan

Lock the auth strategy: Cognito vs self-managed JWT. Write the rate-limit + WAF baseline spec. Prepare the load test plan.
