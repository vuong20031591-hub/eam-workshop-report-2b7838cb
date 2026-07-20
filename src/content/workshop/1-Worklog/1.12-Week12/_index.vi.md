---
title: "Worklog Tuần 12"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WORKLOG TUẦN 12

Tuần cuối. Cleanup, báo cáo cuối, bàn giao. Mục tiêu là đóng kỳ thực tập với tài khoản gọn và kiến thức nằm ở chỗ người sau tìm ra được.

Tôi chia `UPS-18` thành cleanup, report, và handover. Cleanup chạy theo chương 5.10 ngược thứ tự: CloudFront, WAF, ALB, ECS, EFS, Redis, SQS, S3, VPC, IAM. Ngược là quan trọng. Xoá VPC trước là một nửa resource khác không chịu đi cho tới khi mình fix xong đám dependency vừa làm hỏng. Tôi chỉ giữ lại những artefact cần, là log export, repo IaC, và doc site.

Sau đó tôi ngồi đọc kỹ trang billing để chắc chắn không còn cái gì âm thầm chạy. Phần này nhàm và bỏ qua là tốn tiền thật.

Tôi chủ trì retrospective với nhóm. Cái gì work, cái gì giữ, cái gì bỏ. Tự tay tôi viết báo cáo thực tập cuối, cập nhật doc site để người mới dựng lại stack từ đầu được nếu đọc theo thứ tự, và làm slide bàn giao ngắn.

Tài khoản sạch, bill hôm sau về gần bằng không, báo cáo nộp xong, doc site cập nhật, retrospective note chia sẻ. Kỳ thực tập đóng.

Nếu làm lại, cleanup thủ công không phải cách hay. Dễ sót và chậm. Lần sau nên Terraform toàn bộ stack để cleanup chỉ còn một câu lệnh chứ không phải một checklist. Tôi ghi vào retrospective như khuyến nghị đầu tiên cho khoá sau.
