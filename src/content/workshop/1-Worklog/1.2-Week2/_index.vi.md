---
title: "Worklog Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WORKLOG TUẦN 2

Tuần chốt baseline tài khoản. Mục tiêu đơn giản: không ai còn lý do đăng nhập root nữa.

Tôi chạy sprint kickoff và cắt việc thành ticket cỡ một ngày dưới `UPS-3` (baseline) và `UPS-4` (IAM roles). Sau đó một buổi thiết kế IAM ngắn. Không gì cầu kỳ: nhóm admin, nhóm developer, service user `upscale-deployer` cho CI, và task role riêng cho từng ECS service để mỗi service chỉ có đúng quyền nó cần.

Phần lớn thời gian tôi ngồi review PR. Hai đề xuất muốn cắm access key dài hạn lên máy dev, cả hai đóng lại. Hai PR IAM trả về vì scope còn rộng. Tôi cũng viết ADR (MFA root bật, không có root access key, group theo least privilege) và một template policy cho deployer để service sau này copy chứ không phải nghĩ lại từ đầu.

Cuối tuần baseline xong. Root khoá, MFA bật, group đủ, `upscale-deployer` có policy tối thiểu, ADR merge để lưu lại lý do.

Chuyện lặp đi lặp lại: một bạn cứ với tay tới `AdministratorAccess`. Tôi giải thích hai lần. Lần thứ hai xong tôi ghi luôn vào ADR cho khỏi giải thích lần ba.

Tuần sau chương 5.3, VPC. Tôi chốt topology.
