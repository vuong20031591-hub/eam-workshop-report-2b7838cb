---
title: "Worklog Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WORKLOG TUẦN 6

Tuần DynamoDB và ElastiCache. Tuần học thuần cuối cùng trước khi vào project. `UPS-6` trên Linear.

DynamoDB làm reset kha khá giả định của tôi. Quen SQL rồi nên phải ngồi lại với ý "access pattern đi trước, schema rơi ra từ đó", chứ không ngược lại. Tôi làm lab, sau đó thiết kế một bảng đồ chơi cho app "báo cáo thực tập" tự bịa, chỉ để ép mình nghĩ theo partition key + sort key. Nửa cái tôi viết lần đầu là sai. Đúng là điểm cần sai.

ElastiCache với Redis dễ chịu hơn, phần vì tôi từng dùng Redis. Chạy lab xong, viết một script nhỏ nói chuyện với nó từ EC2 cùng VPC, cache một tính toán chậm, và đo chênh lệch. Con số không quan trọng, cái intuition mới quan trọng.

Tôi cũng bắt đầu nghĩ trước. Upscale vài tuần nữa sẽ cần queue và cache khi bước sang phần AWS, nên tôi ghi lại: DynamoDB không hợp để làm queue (dùng SQS), còn Redis khả năng cao đúng cho job-status cache. Nhét vào note project để "tôi tương lai" không phải khám phá lại.

Về team, làm retro nhanh cho sáu tuần học. Cái gì bám lại, cái gì chưa, ai muốn làm lại lab nào. Tuần sau đổi tông.

Tuần sau: kickoff dự án Upscale AI.
