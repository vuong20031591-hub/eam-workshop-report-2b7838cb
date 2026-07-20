---
title: "Tự đánh giá"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 6. </b> "
---

Workshop Upscale AI dài hơn em dự tính. Kế hoạch nói bốn tuần, thực tế mất gần sáu, chủ yếu vì Real-ESRGAN chạy trên GPU behave khác hẳn khi phải share EFS và Redis với phần còn lại của hệ thống thật. Cuối cùng em có một ECS on EC2 setup chạy được end-to-end, một queue sống sót khi worker bị kill, và hiểu rõ vì sao serverless là instinct sai ngay từ đầu.

Trong quãng đó em làm phần lớn qua AWS Console trước rồi mới script lại. Chậm hơn ở giai đoạn đầu, bù lại các mảnh nhớ lâu. Worklog em viết đều mỗi tuần, kể cả tuần chẳng có gì đáng viết.

Để nhìn thẳng vào chỗ em đang đứng, em ghi lại như sau:

| STT | Tiêu chí | Mô tả | Tốt | Khá | Trung bình |
| --- | --- | --- | --- | --- | --- |
| 1 | Kiến thức kỹ thuật | Các dịch vụ AWS cốt lõi, container, áp dụng vào một dự án thật | ✅ | ☐ | ☐ |
| 2 | Tốc độ học | Tiếp thu dịch vụ mới (ECS, EFS, Cognito) và ghép chúng lại với nhau | ☐ | ✅ | ☐ |
| 3 | Chủ động | Tự quyết bước tiếp theo mà không chờ checklist | ✅ | ☐ | ☐ |
| 4 | Trách nhiệm | Làm xong việc đã bắt đầu và dọn dẹp tài nguyên sau đó | ✅ | ☐ | ☐ |
| 5 | Kỷ luật | Giữ nhịp đều đặn, tắt những gì đã bật | ☐ | ☐ | ✅ |
| 6 | Cầu tiến | Viết lại kiến trúc khi hướng cũ rõ ràng không chạy | ☐ | ✅ | ☐ |
| 7 | Viết | Giải thích quyết định trong worklog và proposal | ☐ | ✅ | ☐ |
| 8 | Làm việc với người khác | Hỏi sớm khi bí, trả lời tử tế khi được hỏi | ✅ | ☐ | ☐ |
| 9 | Ứng xử chuyên nghiệp | Quản lý credential và tài nguyên chung cẩn thận | ✅ | ☐ | ☐ |
| 10 | Giải quyết vấn đề | Chẩn đoán lỗi thay vì đoán mò | ☐ | ✅ | ☐ |
| 11 | Đóng góp cho dự án | Bàn giao một hệ thống chạy được end-to-end | ✅ | ☐ | ☐ |
| 12 | Tổng thể | Đánh giá chung cho toàn bộ workshop | ✅ | ☐ | ☐ |

### Những chỗ em muốn cải thiện

Kỷ luật chi phí là thứ em phải sửa trước. Em quên tắt một NAT Gateway qua cuối tuần và ăn một khoản nhỏ nhưng đáng xấu hổ vào bill. Từ đó em tag mọi thứ ngay ngày đầu và bật budget alarm trước khi tạo tài nguyên đầu tiên.

Cách debug của em vẫn cắm quá sâu vào stack. Khi một ECS task fail to start, em mở logs trước khi xem IAM và networking, mà đó lại là hai thứ hay hỏng nhất. Em muốn tập thói quen đi từ trên xuống trước khi mở CloudWatch.

Viết cho người không cùng chuyên môn vẫn là điểm yếu. Proposal đọc ổn với một kỹ sư khác, kém ổn với người chưa biết target group là gì. Lần tới em muốn mở đầu bằng kết quả, đẩy phần "đi dây" xuống appendix.
