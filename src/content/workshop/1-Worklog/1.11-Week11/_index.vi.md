---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WORKLOG TUẦN 11

Tuần diễn tập. Không thêm tính năng nào. Việc của tuần này là chứng minh hệ thống thực sự chạy được từ một tài khoản trắng, không phải nhét thêm gì lên trên.

Tôi biến `UPS-17` thành ticket diễn tập với checklist cả nhóm cùng tick, rồi chạy deploy từ đầu vào một tài khoản trắng theo runbook, đọc từng dòng. Mọi chỗ tôi phải đoán hoặc ứng biến là chỗ runbook viết sai. Tôi vừa chạy vừa sửa lại.

Sau lần chạy end-to-end đầu tiên, tôi chủ trì buổi triage bug và chia kết quả thành "bắt buộc fix trước demo" và "để sau". Rồi review mọi PR chạm đến đường deploy trong tuần và chặn tất cả những gì không liên quan. Tuần diễn tập không phải tuần lén nhét thêm việc.

Tự tay tôi viết script smoke test (upload, job, poll, download), kịch bản demo, và một ghi chú rollback ngắn phòng khi demo có gì sai.

Cuối tuần deploy trọn stack từ tài khoản trắng trong một lượt, smoke test qua, diễn tập demo hai lần. Board xanh.

Chỗ hay bẫy người là thứ tự thao tác. Mount target EFS phải có trước khi ECS service khởi động, không thì task crash-loop. Runbook giờ ghi đúng thứ tự.

Tuần sau chương 5.10. Cleanup, báo cáo cuối, bàn giao.
