---
title: "Worklog Tuần 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

### Mục Tiêu Tuần 1

- Bật một tài khoản AWS mới và làm quen với Management Console đến mức không còn thấy lạc.
- Hiểu tại sao chọn Region ap-southeast-1, và một tài khoản Free Tier thật ra bao gồm những gì.
- Đặt ngay AWS Budgets kèm cảnh báo email để không bị bill bất ngờ trong lúc học.
- Đi qua Billing Dashboard và các gói Support để biết chỗ tìm khi sau này cần.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Đăng ký tài khoản AWS, xác minh thẻ và bước những bước đầu tiên trong Console. | 20/04/2026 | 20/04/2026 | [AWS Account Setup](https://000001.awsstudygroup.com/) |
| T3 | Đọc về Region, Availability Zone và Free Tier; chọn Region làm việc chính. | 21/04/2026 | 21/04/2026 | [AWS Basics](https://000001.awsstudygroup.com/) |
| T4 | Tạo Budget hàng tháng nhỏ và bật email alert theo ngưỡng. | 22/04/2026 | 22/04/2026 | [AWS Budgets](https://000007.awsstudygroup.com/) |
| T5 | Xem Billing Dashboard, đọc pricing của vài dịch vụ tôi sẽ dùng. | 23/04/2026 | 23/04/2026 | [AWS Billing](https://000007.awsstudygroup.com/) |
| T6 | Đọc so sánh gói Support và thử mở một case tập dượt. | 24/04/2026 | 24/04/2026 | [AWS Support](https://000009.awsstudygroup.com/) |

### Kết quả đạt được Tuần 1

- Tài khoản chạy được, MFA cho root đã bật, credential root cất riêng.
- Biết chọn Region theo độ trễ và giá, không còn nhấn bừa như hôm đầu.
- Budget và alert email hoạt động, thử vượt ngưỡng giả lập thấy email về.
- Nắm sơ đồ Billing và biết Support có những gì để cần thì hỏi.

### Khó khăn & Bài học

- **Khó khăn:**
  - Ngày đầu quá nhiều tên riêng mới cùng lúc, đọc gì cũng thấy quen mà không thuộc.
- **Giải pháp:**
  - Bám sát series awsstudygroup, mỗi service mở một tab và ghi vào sổ hai dòng: nó là gì, khi nào dùng.
- **Bài học:**
  - Việc đầu tiên khi vào một account mới phải là bật Budget, không phải nghịch dịch vụ.

### Kế hoạch Tuần tới

- IAM chi tiết: User, Group, Policy, Role, best practice tối thiểu quyền.
- Dựng lại một VPC bằng tay để hiểu subnet, route table, IGW.
- Bật EC2 nhỏ, SSH vào, tự tay terminate.
