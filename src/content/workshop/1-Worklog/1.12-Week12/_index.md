---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

### Week 12 Objectives

Go-live week. Tôi làm launch checklist, chạy final review Linear (close hết open issue quan trọng), review Khiem set Route 53 + Savings Plan, và chạy retro tổng kết 12 tuần. Với vai trò Lead, tuần này 80% là communication: sync với stakeholder, viết launch note, tổ chức demo.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Viết launch checklist (35 mục): DNS, cert, monitoring, alerts, rollback plan, communication. | 20/07/2026 | 20/07/2026 | - |
| 2 | Review Khiem: Route 53 hosted zone `upscale.dev` + alias A record → CloudFront (FE) và `api.upscale.dev` → ALB (BE). | 21/07/2026 | 21/07/2026 | [Route 53 Alias](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html) |
| 3 | Cost review với Khiem: Cost Explorer 30 ngày, chốt mua Compute Savings Plan 1 năm cho baseline g4dn.xlarge → ước tiết kiệm 30%. | 22/07/2026 | 22/07/2026 | [Compute Savings Plan](https://aws.amazon.com/savingsplans/compute-pricing/) |
| 4 | Close Linear issue còn tồn: UPS-5 (format bug Thang), UPS-8 (config trusted_proxies Thang), UPS-9→16 (FE Quan), UPS-17 (architecture — tôi finalize), UPS-18 (draw.io lib — Quan). | 23/07/2026 | 24/07/2026 | - |
| 5 | Chạy final demo với stakeholder: login → upload 8K → upscale → download; end-to-end 12s. | 25/07/2026 | 25/07/2026 | - |
| 6 | Launch chính thức 10:00 sáng: DNS switch, monitor dashboard 3 tiếng, không có alarm. | 26/07/2026 | 26/07/2026 | - |
| 7 | Sprint retro toàn project: 3 điều làm tốt, 3 điều cần cải thiện; viết post-mortem chuẩn bị cho v2. | 26/07/2026 | 26/07/2026 | - |

### Week 12 Achievements

`upscale.dev` live. 12 tuần từ zero đến production. Chi phí baseline ~$227/tháng với Savings Plan. Team đóng đủ mọi issue P1/P2 trên Linear. Post-mortem có 3 lesson lớn: (1) design doc trước code, (2) property test bắt bug sớm, (3) chọn managed service khi phù hợp — sẽ mang sang v2.

### Challenges & Lessons

Đêm trước launch tôi hồi hộp — checklist 35 mục nhưng vẫn sợ sót. Bài học lớn nhất 12 tuần: vai trò Lead không phải là làm nhiều nhất, mà là làm đúng thứ cần làm — design, review, quyết định, unblock. Nếu tôi nhảy vào code thay Thang hay Khiem thì team sẽ mất coach, không mất coder. Tôi cũng học được nghệ thuật "để người khác làm" — khó hơn tự làm nhiều, nhưng đó mới là scale.

### Next Week Plan

Nghỉ 1 tuần. Sau đó v2: multi-region, Grafana dashboard, và có thể migrate sang EKS nếu team đã sẵn sàng.
