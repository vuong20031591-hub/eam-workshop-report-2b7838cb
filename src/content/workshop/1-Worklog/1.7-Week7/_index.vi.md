---
title: "Worklog Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WORKLOG TUẦN 7

### Trọng tâm

ECS trên EC2. Lớp compute nơi FastAPI và worker CodeFormer thực sự chạy.

### Việc tôi làm

- Chia `UPS-11` thành: cluster, ASG kèm capacity provider, task definition cho FastAPI, task definition cho worker, đăng ký service.
- Chủ trì buổi chốt size: `t3.medium` on-demand cho FastAPI, `g4dn.xlarge` spot cho worker. Ghi luôn vào ADR để đỡ mỗi sprint lại đem ra bàn.
- Review cả hai task definition, trả về một cái vì không mount EFS tại `/mnt/models`.
- Review PR capacity provider, chốt spot interruption drain đúng.
- Tự làm: chọn scaling policy (target tracking theo CPU cho API, theo queue depth cho worker), viết deploy checklist, và pair chạy task end-to-end đầu tiên.

### Kết quả

Cluster live, hai service đã đăng ký, job upscale đầu tiên chạy trọn từ SQS sang S3. Chậm nhưng chạy.

### Khó khăn

Spot bị thu hồi giữa job. Worker giờ bắt SIGTERM và requeue lại job đang chạy trước khi tắt.

### Kế hoạch tuần sau

Chương 5.8. Đặt ALB phía trước để API tiếp cận được đàng hoàng.
