---
title: "Worklog Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Mục Tiêu Tuần 2

- Tự tay dựng người dùng và nhóm IAM thay vì đọc lý thuyết, và siết least privilege trên chính mình.
- Dựng một VPC tối thiểu từ con số không: subnet public/private, route table, IGW.
- Bật một EC2 nhỏ, SSH vào bằng key riêng và terminate gọn gàng.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Tạo IAM User riêng cho ngày thường, bật MFA, xoá thói quen dùng root. | 27/04/2026 | 27/04/2026 | [AWS IAM](https://000002.awsstudygroup.com/) |
| T3 | Chia Group theo vai trò, gán policy AWS managed, viết một inline policy nhỏ. | 28/04/2026 | 28/04/2026 | [IAM Policies](https://000002.awsstudygroup.com/) |
| T4 | Vẽ default VPC ra giấy, rồi dựng lại một VPC 2 AZ bằng Console. | 29/04/2026 | 29/04/2026 | [Amazon VPC](https://000003.awsstudygroup.com/) |
| T5 | Cấu hình subnet public/private, gắn IGW, viết route table cho từng loại. | 30/04/2026 | 30/04/2026 | [VPC Networking](https://000003.awsstudygroup.com/) |
| T6 | Launch EC2 t3.micro trong subnet public, SSH bằng key mới tạo, rồi terminate. | 01/05/2026 | 01/05/2026 | [Amazon EC2](https://000004.awsstudygroup.com/) |

### Kết quả đạt được Tuần 2

- IAM User cá nhân dùng thay root cho mọi thao tác, MFA đã ràng.
- Đọc được một policy JSON và biết dòng nào đang deny mình.
- Hiểu lát cắt public–private của VPC đủ để tự vẽ lại mà không cần hình mẫu.
- SSH được vào EC2 tự dựng và tự terminate mà không lăn tăn sợ để lại tài nguyên.

### Khó khăn & Bài học

- **Khó khăn:**
  - Route table với IGW ban đầu bối rối vì lỗi kiểu không thấy ra internet, không phải lỗi to nhưng khó bắt.
- **Giải pháp:**
  - Cắt bài toán: kiểm tra Security Group, NACL, route 0.0.0.0/0 và public IP theo đúng thứ tự đó, gặp cái nào sai thì dừng.
- **Bài học:**
  - Đọc thông báo lỗi kỹ hơn một chút thường nhanh hơn là mở lại tài liệu từ đầu.

### Kế hoạch Tuần tới

- IAM Role cho EC2 để bỏ hẳn access key trên máy.
- Ngó qua Cloud9 xem có hợp với dòng công việc không.
- Host thử một trang tĩnh trên S3.
