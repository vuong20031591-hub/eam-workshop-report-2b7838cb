---
title: "Worklog Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WORKLOG TUẦN 7

Tuần ECS trên EC2. Lớp compute nơi FastAPI và worker CodeFormer thực sự chạy, nên phần lớn công sức sáu tuần trước là để đến được đây.

`UPS-11` chia thành cluster, ASG kèm capacity provider, task definition cho FastAPI và cho worker, và đăng ký service. Tôi chủ trì buổi chốt size, dừng ở `t3.medium` on-demand cho API và `g4dn.xlarge` spot cho worker. Dùng spot cho worker tiết kiệm thật, miễn là xử lý interruption đàng hoàng. Lý do ghi vào ADR để mỗi sprint khỏi lôi ra bàn lại.

Review tuần này: một task definition nộp lên thiếu mount EFS tại `/mnt/models`, tức là worker boot xong sẽ crash ở lần inference đầu. Trả về. PR capacity provider thì ok, nhưng tôi muốn nhánh drain khi bị thu hồi spot phải rõ, nên bổ sung trước khi merge.

Tự tay tôi chọn scaling policy (target tracking theo CPU cho API, theo queue depth cho worker), viết deploy checklist, và pair chạy task end-to-end đầu tiên để tận mắt xem toàn bộ luồng.

Cluster live, hai service đã đăng ký, job upscale đầu tiên chạy trọn từ SQS sang S3. Chậm, nhưng chạy. Tuần này thế là đủ.

Chỗ bị đau thực sự: trong lúc test, spot bị thu hồi giữa một job. Worker giờ bắt SIGTERM và requeue lại message đang chạy trước khi tắt. Không hào nhoáng gì, nhưng phương án còn lại là mất việc của người dùng.

Tuần sau chương 5.8. Đặt ALB phía trước để API tiếp cận được đàng hoàng.
