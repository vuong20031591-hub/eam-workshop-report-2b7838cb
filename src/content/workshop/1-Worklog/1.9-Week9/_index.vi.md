---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục Tiêu Tuần 9

- Nghiên cứu và tích hợp mô hình AI Real-ESRGAN và CodeFormer.
- Xây dựng pipeline inference AI và tối ưu hiệu năng.
- Kiểm thử kết quả nâng cấp ảnh trên nhiều ảnh test.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Nghiên cứu Real-ESRGAN và CodeFormer, chuẩn bị môi trường inference AI. | 15/06/2026 | 15/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN); [CodeFormer](https://github.com/sczhou/CodeFormer) |
| T3 | Tích hợp Real-ESRGAN vào pipeline xử lý ảnh của backend. | 16/06/2026 | 16/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| T4 | Tích hợp CodeFormer cho phục hồi khuôn mặt và tối ưu luồng inference. | 17/06/2026 | 17/06/2026 | [CodeFormer](https://github.com/sczhou/CodeFormer) |
| T5 | Debug quá trình xử lý AI, tối ưu hiệu năng model và cải thiện chất lượng ảnh. | 18/06/2026 | 18/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN); [CodeFormer](https://github.com/sczhou/CodeFormer) |
| T6 | Kiểm thử kết quả nâng cấp ảnh trên nhiều ảnh test. | 19/06/2026 | 19/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN); [CodeFormer](https://github.com/sczhou/CodeFormer) |

### Kết quả đạt được Tuần 9

- Tích hợp thành công Real-ESRGAN và CodeFormer vào pipeline backend.
- Cải thiện rõ chất lượng nâng cấp ảnh và phục hồi khuôn mặt.
- Kiểm chứng chất lượng đầu ra trên nhiều loại ảnh khác nhau.

### Khó khăn & Bài học

- **Khó khăn:**
  - Cấu hình môi trường AI (Python/PyTorch/CUDA) và hiệu năng inference.
- **Giải pháp:**
  - Pin phiên bản dependency, dùng GPU khi có, và benchmark trên ảnh đại diện.
- **Bài học:**
  - Môi trường AI ổn định và benchmark nhất quán là yếu tố then chốt cho pipeline inference tin cậy.

### Kế hoạch Tuần tới

- Containerize frontend và backend bằng Docker.
- Triển khai ứng dụng lên Amazon ECS/Fargate.
- Xác minh hệ thống end-to-end sau khi deploy.
