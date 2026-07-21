---
title: "Worklog Tuần 6"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

## WORKLOG TUẦN 6 (25/05/2026 – 31/05/2026)

Tuần học thuần cuối cùng trước khi dự án bắt đầu. DynamoDB và ElastiCache.

DynamoDB làm reset kha khá giả định của tôi. Quen SQL rồi nên phải ngồi lại với ý "access pattern đi trước, schema rơi ra từ đó", chứ không ngược lại. Tôi làm lab, sau đó thử thiết kế một bảng đồ chơi nhỏ cho một app "báo cáo thực tập" tự bịa, chỉ để ép mình nghĩ theo partition key và sort key. Một nửa những gì tôi viết ở lượt đầu là sai. Đúng là điểm cần sai.

ElastiCache với Redis dễ chịu hơn, phần vì tôi từng nghịch Redis. Chạy lab xong, viết một script nhỏ nói chuyện với nó từ EC2 cùng VPC, cache một tính toán cố tình làm chậm, và đo chênh lệch. Con số không quan trọng, cái intuition mới quan trọng. Những read trước đó chờ được một nhịp, giờ như thoáng qua.

Cuối tuần tôi cũng dành thời gian nhìn tới trước. Thứ Hai bắt đầu dự án, tôi muốn hình dung được mình sắp bước vào cái gì thay vì mở code bằng đầu óc trắng. Đọc phần intro FCAJ về dự án AI Face Enhancement vài lượt, phác nhanh xem upload, xử lý và delivery sẽ nối vào nhau ra sao, và ghi một danh sách ngắn những chỗ tôi chưa hiểu để hỏi mentor ngày đầu.

Sau sáu tuần, AWS đã bớt là một khối to đáng sợ và biến thành một tập các dịch vụ tôi gọi được tên. Có thật sự dựng được gì bằng chúng hay không thì tuần sau mới bắt đầu trả lời.

Tuần sau: kickoff dự án. AI Face Enhancement.
