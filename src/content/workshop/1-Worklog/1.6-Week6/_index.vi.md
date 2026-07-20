---
title: "Worklog Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WORKLOG TUẦN 6

Tuần Redis và SQS. Hai mảnh quyết định hệ thống có mượt hay không khi queue bắt đầu dài.

`UPS-9` (Redis) và `UPS-10` (SQS) chia ra với owner rõ. Sau đó một buổi thiết kế queue. Thống nhất: một main queue kèm DLQ, redrive sau ba lần lỗi, và visibility timeout bám theo p95 thời gian upscale chứ không đặt bừa. Worker crash thì message quay lại, còn job chạy lâu không bị nhân đôi sau lưng chính nó.

PR Redis nộp lên là single-node. Tôi gạt và yêu cầu multi-AZ. Tốn hơn, nhưng single-node không phải thứ tôi muốn giải thích với ai lúc 2 giờ sáng. PR worker consume SQS thì ổn, chỉ thiếu delete message ở nhánh lỗi, chỗ đó sẽ âm thầm retry mãi. Cờ lên, sửa, merge.

Tự tay tôi viết schema message (job_id, s3_input, s3_output, params, submitted_at), retry policy, và convention key cache để không ai tự đặt riêng.

Điểm bị vấp: visibility timeout ban đầu tôi đặt thấp, job dài bị retry trong lúc đang chạy. Nâng lên 15 phút và ghi rõ lý do để lần sau đừng ai "tối ưu" hạ lại.

Tuần sau chương 5.7. Dựng ECS cluster và chạy task thật đầu tiên.
