---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục Tiêu Tuần 9

- Ghép Real-ESRGAN cho upscaling và CodeFormer cho face restore vào một pipeline.
- Bọc pipeline sau một hàm enhance(image, params) để phần backend không cần biết chi tiết mô hình.
- Có bộ eval nội bộ để đo chất lượng và bắt regression sớm.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Cài và chạy Real-ESRGAN local trên vài ảnh, so kết quả với ảnh gốc. | 15/06/2026 | 15/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| T3 | Cài CodeFormer, thử fidelity weight khác nhau trên ảnh có khuôn mặt. | 16/06/2026 | 16/06/2026 | [CodeFormer](https://github.com/sczhou/CodeFormer) |
| T4 | Bọc cả hai mô hình sau enhance(image, params), đặt sẵn knob cho upscale factor và face restore. | 17/06/2026 | 17/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T5 | Tạo bộ eval 20 ảnh đủ loại và script chạy pipeline dump kết quả ra folder. | 18/06/2026 | 18/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Đo thời gian trên CPU, chốt CPU cho dev và GPU cho giai đoạn AWS. | 19/06/2026 | 19/06/2026 | [Amazon EC2 GPU](https://000004.awsstudygroup.com/) |

### Kết quả đạt được Tuần 9

- Pipeline chạy end-to-end trên ảnh test, output rõ ràng tốt hơn input.
- Hàm enhance() có interface gọn để tuần sau đóng gói vào worker.
- Bộ eval nhỏ giúp phát hiện ngay lần đầu khi có ai đó chỉnh sai default.

### Khó khăn & Bài học

- **Khó khăn:**
  - CPU chậm đến mức một request có thể timeout với setup hiện tại.
- **Giải pháp:**
  - Chấp nhận CPU cho dev để không đốt tiền, dời việc chuyển GPU sang khi vào AWS, ghi thẳng quyết định vào project notes.
- **Bài học:**
  - Có những trade-off nên chốt sớm bằng chữ trong repo hơn là tranh cãi lại mỗi tuần.

### Kế hoạch Tuần tới

- Dockerize FE, BE và worker.
- Đưa lên ECS Fargate + S3 cho môi trường staging.
- Chuẩn bị plan chuyển pipeline sang GPU khi cần.
