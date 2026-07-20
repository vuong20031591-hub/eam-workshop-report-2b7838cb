---
title: "Nhật ký công việc Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

## TUẦN 1 - NHẬT KÝ

### Mục tiêu Tuần 1

Kickoff tuần đầu là việc của Lead: chốt scope MVP, chia team, dựng khung Linear + repo, và đặt guardrail AWS. Team ba người — Thắng (BE core), Khiêm (BE + AWS infra), Quân (FE) — nên phần lớn thời gian mình bỏ vào việc viết brief, ngồi cùng từng người để chốt phạm vi, còn phần code thì để tuần sau khi issue đã rõ.

### Các công việc thực hiện trong tuần

| Ngày | Công việc | Ngày bắt đầu | Ngày hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| 1 | Kickoff meeting: chốt MVP (Real-ESRGAN x4 cho AI, LANCZOS cho Standard, CodeFormer face), viết product brief 2 trang. | 17/04/2026 | 17/04/2026 | - |
| 2 | Tạo Linear workspace, team `UPS`, project **AI Upscaler**; định nghĩa label `BE / FE / Bug / Feature / Task`. | 17/04/2026 | 17/04/2026 | [Linear](https://linear.app/) |
| 3 | Chia team: Thắng (BE core), Khiêm (BE + AWS infra), Quân (FE); giao Khiêm set AWS account + IAM `upscale-deployer` + Budgets + CloudTrail. | 18/04/2026 | 18/04/2026 | - |
| 4 | Tạo 2 GitHub repo `upscale-BE` (FastAPI) và `upscale-FE` (TanStack Start), bật branch protection main + PR review bắt buộc. | 18/04/2026 | 19/04/2026 | [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches) |
| 5 | Draft **API contract v0** (`/upscale/ai`, `/upscale/standard`, `/face/enhance`) — request/response schema, error codes. | 20/04/2026 | 21/04/2026 | - |
| 6 | Review Khiêm confirm: IAM `upscale-deployer` + AdministratorAccess + MFA, region `ap-southeast-1`, Budgets $10/tháng. | 22/04/2026 | 22/04/2026 | [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) |
| 7 | Sprint planning tuần 2: tạo issue UPS-* backlog, ưu tiên S3 + FastAPI skeleton, chốt Definition of Done. | 23/04/2026 | 23/04/2026 | - |

### Kết quả đạt được Tuần 1

Team hiểu rõ ai làm gì, không ai bị overlap. Linear đã có backlog và label chuẩn. AWS account do Khiêm set up xong đúng như brief — mình chỉ review lại checklist chứ không đụng console. Repo hai bên đều có initial commit, branch protection bật, PR template có sẵn.

### Thách thức & Bài học

Việc lớn nhất tuần đầu không phải kỹ thuật mà là align scope. Team có xu hướng nhảy vào code ngay, mình phải kéo lại để viết brief và API contract trước — nếu không thì tuần 3 sẽ thấy FE và BE lệch nhau về response shape. Bài học rút ra là brief phải viết xong trước khi tạo Linear issue, không phải sau. Ngoài ra, giao AWS setup cho Khiêm ngay từ đầu tuần cũng đúng — Khiêm có kinh nghiệm infra, mình review checklist là đủ, không cần tự làm.

### Kế hoạch tuần sau

Design S3 bucket layout (weights / tmp / output prefix, lifecycle), giao Khiêm provision. Ngồi với Thắng chốt FastAPI folder layout và bootstrap skeleton (`app/main.py`, `app/core/config.py`). Bắt đầu draft high-level architecture diagram cho UPS-17.
