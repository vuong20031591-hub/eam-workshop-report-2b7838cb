---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WEEK 2 WORKLOG

### Week 2 Objectives

Chương 5.2 Prerequisites. Tuần này biến account từ "chỉ có root" thành môi trường dùng hàng ngày an toàn: IAM admin user có MFA, chốt region, dọn sạch điểm bắt đầu trước khi tạo resource thật.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Đọc kỹ chương 5.2 hai lần trước khi bấm gì. | 26/04/2026 | 26/04/2026 | - |
| 2 | Tạo IAM user `upscale-deployer` với `AdministratorAccess` cho giai đoạn build. | 27/04/2026 | 27/04/2026 | [IAM Users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) |
| 3 | Bật MFA cho `upscale-deployer`, lưu recovery code offline. | 28/04/2026 | 28/04/2026 | - |
| 4 | Đăng xuất root, đăng nhập lại bằng `upscale-deployer`. Chốt region `ap-southeast-1` (Singapore). | 29/04/2026 | 29/04/2026 | - |
| 5 | Cài AWS CLI trên laptop, chạy `aws sts get-caller-identity` để chắc profile hoạt động. | 30/04/2026 | 30/04/2026 | [AWS CLI](https://docs.aws.amazon.com/cli/) |
| 6 | Chuyển `UPS-2` sang Done trên Linear, mở `UPS-3` (VPC setup) cho tuần sau. | 01/05/2026 | 01/05/2026 | - |
| 7 | Đọc trước chương 5.3 Infrastructure để biết tuần sau cần dựng gì. | 02/05/2026 | 02/05/2026 | - |

### Week 2 Achievements

Root đã cất kỹ. Hàng ngày dùng `upscale-deployer` có MFA. Region cố định để không lỡ tạo resource ở `us-east-1` rồi bối rối. CLI đã chạy.

### Challenges & Lessons

Lần đầu tôi quên bật MFA và bị khoá vài phút. Bài học: bật MFA ngay trong session tạo user, và ghi recovery code vào chỗ tử tế (không phải giấy nhớ).

### Next Week Plan

Chương 5.3 Infrastructure: dựng VPC, subnet và internet gateway. Theo dõi tiến độ trên `UPS-3`.
