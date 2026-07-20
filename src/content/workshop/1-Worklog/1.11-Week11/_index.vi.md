---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WORKLOG TUẦN 11

### Trọng tâm

Diễn tập deploy và test end-to-end. Tuần này lo chứng minh cả hệ thống chạy, không thêm tính năng.

### Việc tôi làm

- Biến `UPS-17` thành ticket diễn tập với checklist cả nhóm cùng tick.
- Chạy deploy từ đầu vào một tài khoản trắng theo runbook, sửa lại những chỗ sai hoặc thiếu.
- Chủ trì buổi triage bug sau lần chạy end-to-end đầu, ưu tiên các fix bắt buộc phải xong trước demo.
- Review mọi PR chạm vào đường deploy trong tuần, chặn mọi thứ không liên quan đến diễn tập.
- Tự làm: viết script smoke test (upload → job → poll → download), kịch bản demo, và ghi chú rollback.

### Kết quả

Deploy trọn stack từ tài khoản trắng trong một lượt, smoke test qua, demo diễn tập hai lần. Board xanh.

### Khó khăn

Thứ tự thao tác. Mount target EFS phải có trước khi ECS service khởi động, không thì task crash-loop. Runbook giờ ghi rõ.

### Kế hoạch tuần sau

Chương 5.10. Cleanup, báo cáo cuối, bàn giao.
