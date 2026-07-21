---
title: "Worklog Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WORKLOG TUẦN 4

Tuần managed database. Lab RDS và Lightsail. Vẫn đang học, vẫn đi theo FCAJ. `UPS-4` trên Linear.

RDS là lần đầu tôi thật sự cảm được nghĩa của chữ "managed". Chọn engine, click qua vài bước, và có ngay một Postgres không phải tự lo. Tôi chạy lab với `db.t3.micro` nhỏ, kết nối từ EC2 cùng VPC bằng một SG rule cố ý mở, chạy vài query. Sau đó cố tình xoá SG rule để phá kết nối rồi mở lại, chỉ để nhìn đúng thông báo lỗi và sau này nhận ra ngay.

Lightsail là bất ngờ vui của tuần. Nó gần như AWS cố tỏ ra thân thiện kiểu VPS, và dựng app mẫu nhanh khủng khiếp. Không dùng cho project được, nhưng hiểu vì sao nó tồn tại.

Tôi cũng đọc thêm cách một app thật nói chuyện với managed DB, kiểu parameter group, backup, snapshot, và khác biệt multi-AZ với read replica. Upscale sẽ không dùng RDS, nhưng đây là background tôi muốn có sẵn trong đầu trước khi vào project.

Về team, một buổi sync ngắn thứ Sáu để chắc mọi người đã làm cả hai lab. Hai bạn trễ, tôi pair một tiếng. Bắt bây giờ vẫn hơn để lộ vào tuần 7.

Tuần sau: CloudWatch và AWS CLI.
