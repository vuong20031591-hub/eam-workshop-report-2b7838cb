---
title: "Worklog Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WORKLOG TUẦN 5

Tuần storage dùng chung. EFS cho model weights mà worker nào cũng cần, ECR cho image mình ship.

Tôi chia `UPS-8` thành dựng EFS, kế hoạch mount, và layout repo ECR. Quyết định đáng bàn là để model weights ở đâu. Nhét vào image là dễ nhất nhưng rebuild lâu và image rất nặng. Để EFS thì worker nào cũng dùng chung được, luôn warm. Chốt EFS cho weights, image chỉ để code. Cảm giác đúng, và đến giờ vẫn ổn.

Phần review: cấu hình EFS access point đầu tiên đặt quyền world-writable, không phù hợp cho mount dùng chung, trả về. PR lifecycle của ECR thì ok sau khi thống nhất giữ 20 tag gần nhất và xoá untagged sau 7 ngày.

Tự tay thì tôi viết convention mount (`/mnt/models` trên mọi worker), convention image tag (`<service>:<git-sha>` kèm tag di động `staging` để promote không cần rebuild), và cập nhật runbook.

Test mount end-to-end đầu tiên treo cứng, vui được đúng mười phút cho tới lúc tôi nhớ ra ma trận SG từ `UPS-6` chưa có rule NFS. Ghi regression vào SG doc để đừng lặp lại.

Tuần sau chương 5.6. Redis cho cache, SQS cho job queue.
