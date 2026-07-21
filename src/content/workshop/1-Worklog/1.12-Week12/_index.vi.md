---
title: "Worklog Tuần 12"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

### Mục Tiêu Tuần 12

- Với vai trò lead, điều phối test cuối end-to-end trên staging với ảnh thật, cả case thường và biên.
- Chịu trách nhiệm phần demo: script, dry run và trình bày trước hội đồng.
- Lên kế hoạch và điều phối cleanup AWS, ghi lại bài học 12 tuần cho cả team.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Viết script test cuối và chia case cho team: ảnh nhỏ, ảnh lớn, có/không mặt, sai định dạng. | 06/07/2026 | 06/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T3 | Triage và ưu tiên các bug nhỏ tìm ra khi test, review fix cho hiển thị lỗi, empty state, edge case cancel. | 07/07/2026 | 07/07/2026 | [TanStack Router](https://tanstack.com/router) |
| T4 | Cùng team chạy hai lần dry run demo, canh thời gian và chuẩn bị slide ngắn dự phòng. | 08/07/2026 | 08/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| T5 | Trực tiếp demo trước hội đồng, ghi feedback tại chỗ cho cả team. | 09/07/2026 | 09/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| T6 | Chịu trách nhiệm kế hoạch cleanup: xoá service ECS không dùng, empty bucket S3 staging, dừng RDS/Redis test. | 10/07/2026 | 10/07/2026 | [AWS Cost Management](https://000007.awsstudygroup.com/) |

### Kết quả đạt được Tuần 12

- Bản demo mình chạy đi đúng luồng, không rơi vào edge case đã fix.
- Mình nhận feedback cụ thể, ăn thẳng vào phần workshop mình sẽ viết lại.
- Tài nguyên AWS mình duyệt giữ lại đúng mức tối thiểu, bill sau demo về mức chờ.
- Có tổng kết 12 tuần và danh sách việc mình muốn team (và bản thân) đào sâu thêm.

### Khó khăn & Bài học

- **Khó khăn:**
  - Ngày demo vẫn có một request thỉnh thoảng chậm bất thường, khó tái hiện dưới áp lực thời gian.
- **Giải pháp:**
  - Mình demo với ảnh đã warm-up worker, thêm log kỹ để điều tra sau và chặn mọi ý định sửa gấp phút chót từ team.
- **Bài học:**
  - Sát demo, vai trò lead là bảo vệ sự ổn định; quyết định "không sửa" cũng là một quyết định mình phải đứng ra chịu.

### Kế hoạch Tuần tới

- Viết workshop chi tiết dựa trên những gì đã build.
- Đóng gói bài học và feedback vào phần tự đánh giá.
- Chốt trạng thái cleanup và tài liệu cuối kỳ.
