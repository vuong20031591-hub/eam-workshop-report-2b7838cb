---
title: "Worklog Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WORKLOG TUẦN 4 (11/05/2026 – 17/05/2026)

Một tuần đầy đủ trở lại. Tuần managed database: RDS và Lightsail.

RDS là lần đầu tôi thật sự cảm được nghĩa của chữ "managed". Chọn engine, click qua vài bước, có ngay một Postgres không phải tự lo. Tôi chạy lab với `db.t3.micro` nhỏ, kết nối từ EC2 cùng VPC bằng một SG rule cố ý mở, chạy vài query. Rồi cố tình xoá SG rule để phá kết nối và bật lại, chỉ để nhìn đúng thông báo lỗi và sau này nhận ra ngay. Mấy mẹo nhỏ kiểu vậy đang dần đọng lại.

Tôi cũng đọc thêm về parameter group, automated backup, snapshot, và khác biệt Multi-AZ với read replica. Chưa dùng ngay, nhưng tôi muốn có sẵn từ vựng trong đầu trước khi cần.

Lightsail là bất ngờ vui của tuần. Nó gần như AWS cố tỏ ra thân thiện kiểu VPS, và dựng app mẫu nhanh gần như không mất thời gian. Sẽ không dùng cho project thật, nhưng thấy được đầu kia của phổ cũng hay.

Xen giữa lab tôi đọc tài liệu FCAJ và ghi chú chậm rãi, nghe nhàm và đúng là nhàm, nhưng đó là phần giúp mọi thứ không trôi thành một khối mờ.

Tuần sau: CloudWatch và AWS CLI.
