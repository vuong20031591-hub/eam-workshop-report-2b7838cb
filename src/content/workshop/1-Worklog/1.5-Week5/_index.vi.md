---
title: "Worklog Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WORKLOG TUẦN 5

### Trọng tâm

Storage dùng chung. EFS cho model weights mà worker nào cũng cần, ECR cho image mình ship.

### Việc tôi làm

- Chia `UPS-8` thành: dựng EFS, kế hoạch mount, layout repo ECR.
- Chủ trì buổi bàn model weights để ở đâu: nhét vào image (rebuild lâu) hay để EFS (dùng chung, warm). Chốt EFS cho weights, image chỉ chứa code.
- Review cấu hình EFS access-point, phản đối permission world-writable.
- Review PR lifecycle policy ECR (giữ 20 tag gần nhất, xoá untagged sau 7 ngày).
- Tự làm: viết convention mount (`/mnt/models` trên mọi worker), convention image tag (`<service>:<git-sha>` kèm tag di động `staging`), cập nhật runbook.

### Kết quả

Worker pull weights từ một mount warm chung, image không phình vô hạn. Mỗi service biết push/pull ở đâu.

### Khó khăn

Test mount EFS đầu tiên treo. Hoá ra thiếu SG rule từ `UPS-6`. Ghi regression vào ma trận SG.

### Kế hoạch tuần sau

Chương 5.6. Redis cho cache, SQS cho job queue.
