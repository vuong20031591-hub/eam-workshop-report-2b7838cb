---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## WEEK 1 WORKLOG

### Week 1 Objectives

Tuần đầu tôi dành cho việc chốt scope MVP của Upscale AI, dựng khung quản lý công việc trên Linear + GitHub, và đặt guardrail AWS trước khi bắt đầu code. Vai trò của tôi trong project là Project Lead nên focus tuần này là planning và setup, chưa đụng vào implementation.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Chốt MVP: Real-ESRGAN x4 cho tuyến AI, LANCZOS cho Standard, CodeFormer cho face; viết product brief 2 trang. | 17/04/2026 | 17/04/2026 | - |
| 2 | Tạo Linear workspace, team `UPS`, project **AI Upscaler**; định nghĩa label `BE / FE / Bug / Feature / Task`. | 17/04/2026 | 17/04/2026 | [Linear](https://linear.app/) |
| 3 | Tạo backlog UPS-* và chia đầu việc theo module (BE core, BE + infra AWS, FE); mở checklist prerequisite AWS. | 18/04/2026 | 18/04/2026 | - |
| 4 | Khởi tạo 2 GitHub repo `upscale-BE` (FastAPI) và `upscale-FE` (TanStack Start), bật branch protection main + PR review bắt buộc. | 18/04/2026 | 19/04/2026 | [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches) |
| 5 | Draft **API contract v0** (`/upscale/ai`, `/upscale/standard`, `/face/enhance`) — request/response schema, error codes. | 20/04/2026 | 21/04/2026 | - |
| 6 | Rà lại checklist AWS: IAM user `upscale-deployer` + AdministratorAccess + MFA, region `ap-southeast-1`, Budgets $10/tháng. | 22/04/2026 | 22/04/2026 | [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) |
| 7 | Sprint planning cho tuần 2: sắp thứ tự issue, ưu tiên S3 + FastAPI skeleton, chốt Definition of Done. | 23/04/2026 | 23/04/2026 | - |

### Week 1 Achievements

Backlog Linear có label và priority rõ, không còn tình trạng issue mơ hồ. Hai repo GitHub live, branch protection bật, PR template có sẵn. Product brief và API contract v0 đã đóng vai trò "source of truth" để tuần sau bắt đầu spec chi tiết.

### Challenges & Lessons

Việc lớn nhất tuần đầu không phải kỹ thuật mà là ép mình viết brief xong trước khi tạo issue. Cám dỗ chung là nhảy vào code luôn cho "cảm giác làm việc", nhưng nếu API contract không rõ sớm thì tuần 3 FE và BE sẽ lệch nhau về response shape. Bài học: brief là công cụ align rẻ nhất — viết 2 tiếng để tiết kiệm cả tuần tranh cãi.

### Next Week Plan

Viết spec S3 bucket (prefix weights / tmp / output, lifecycle, encryption) và spec FastAPI folder layout để có tài liệu implement. Bắt đầu draft high-level architecture diagram cho UPS-17.
