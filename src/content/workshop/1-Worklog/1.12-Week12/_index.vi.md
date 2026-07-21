---
title: "Worklog Tuần 12"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

### Mục Tiêu Tuần 12

- Test cuối cùng end-to-end trên staging với ảnh thật, cả trường hợp thường và biên.
- Đóng gói bản demo và chạy trơn trước hội đồng.
- Dọn tài nguyên AWS, tổng kết và ghi lại bài học 12 tuần.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Kịch bản test cuối: ảnh nhỏ, ảnh lớn, ảnh có/không mặt, ảnh sai định dạng. | 06/07/2026 | 06/07/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T3 | Sửa các bug nhỏ tìm được: hiển thị lỗi, empty state, edge case cancel. | 07/07/2026 | 07/07/2026 | [TanStack Router](https://tanstack.com/router) |
| T4 | Chạy dry run demo hai lần, canh thời gian, chuẩn bị slide ngắn. | 08/07/2026 | 08/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| T5 | Demo trước hội đồng, ghi feedback tại chỗ. | 09/07/2026 | 09/07/2026 | [FCAJ Project](https://000000.awsstudygroup.com/) |
| T6 | Cleanup: xoá service ECS không dùng, empty bucket S3 staging, dừng RDS/Redis test. | 10/07/2026 | 10/07/2026 | [AWS Cost Management](https://000007.awsstudygroup.com/) |

### Kết quả đạt được Tuần 12

- Bản demo chạy đúng luồng, không rơi vào edge case đã fix.
- Nhận được feedback cụ thể để dùng cho phần workshop viết lại.
- Tài nguyên AWS còn lại đúng những gì cần, bill sau demo về mức chờ.
- Có tổng kết cá nhân 12 tuần và danh sách việc cần học sâu thêm.

### Khó khăn & Bài học

- **Khó khăn:**
  - Ngày demo vẫn có một request thỉnh thoảng chậm bất thường, khó tái hiện.
- **Giải pháp:**
  - Chạy demo với ảnh đã warm-up worker, đồng thời log kỹ để điều tra sau, không cố sửa gấp giờ chót.
- **Bài học:**
  - Sát demo, ổn định quan trọng hơn sửa nốt một bug lẻ, quyết định 'không sửa' cũng là quyết định.

### Kế hoạch Tuần tới

- Viết workshop chi tiết dựa trên những gì đã build.
- Đóng gói bài học và feedback vào phần tự đánh giá.
- Chốt trạng thái cleanup và tài liệu cuối kỳ.
