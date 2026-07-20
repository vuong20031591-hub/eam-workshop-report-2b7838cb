---
title: "Worklog Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WORKLOG TUẦN 2

### Trọng tâm

Prerequisites và IAM. Chuẩn baseline tài khoản từ sớm để không ai phải đụng vào root nữa.

### Việc tôi làm

- Chạy sprint kickoff, chia `UPS-3` (baseline tài khoản) và `UPS-4` (IAM roles) thành ticket nhỏ, cỡ một ngày một ticket.
- Chủ trì buổi thiết kế IAM: nhóm admin, nhóm developer, service user `upscale-deployer` cho CI, và task role riêng cho ECS.
- Đối chiếu checklist tài khoản với chương 5.2, gạt hai đề xuất muốn cắm long-lived key trên máy dev.
- Review lứa PR IAM đầu tiên, trả lại hai cái để siết quyền chặt hơn.
- Tự làm: viết ADR về IAM (MFA root, không có root access key, least-privilege) và template policy cho deployer.

### Kết quả

Baseline xong: root khoá, MFA bật, các group đủ, `upscale-deployer` có policy tối thiểu. ADR merge để lưu lại lý do.

### Khó khăn

Có bạn cứ với tay tới `AdministratorAccess`. Giải thích hai lần, rồi tôi ghi luôn vào ADR cho khỏi phải giải thích lần ba.

### Kế hoạch tuần sau

Chương 5.3 VPC. Tôi sẽ chốt topology mạng.
