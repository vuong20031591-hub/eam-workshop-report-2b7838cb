---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục Tiêu Tuần 9

- Với vai trò lead, định hướng nhóm ML gom Real-ESRGAN và CodeFormer về một pipeline chung, tránh hai luồng song song.
- Chốt contract enhance(image, params) để phần backend không phụ thuộc vào lựa chọn mô hình.
- Thiết lập bộ eval nội bộ để regression bị bắt lúc review chứ không phải lúc demo.

### Các công việc thực hiện trong tuần

| Thứ | Công việc | Bắt đầu | Hoàn thành | Tài liệu tham khảo |
| --- | --- | --- | --- | --- |
| T2 | Review spike Real-ESRGAN, cùng bạn ML so sánh output với ảnh gốc. | 15/06/2026 | 15/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| T3 | Pair với bạn ML thử fidelity weight của CodeFormer trên ảnh có mặt, chốt default hợp lý. | 16/06/2026 | 16/06/2026 | [CodeFormer](https://github.com/sczhou/CodeFormer) |
| T4 | Thiết kế và duyệt interface enhance(image, params) với knob upscale factor và face restore. | 17/06/2026 | 17/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T5 | Tự chọn bộ eval 20 ảnh đủ loại, review script runner dump kết quả ra folder. | 18/06/2026 | 18/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| T6 | Cùng team đo thời gian trên CPU, mình chốt CPU cho dev, GPU cho AWS và ghi vào project notes. | 19/06/2026 | 19/06/2026 | [Amazon EC2 GPU](https://000004.awsstudygroup.com/) |

### Kết quả đạt được Tuần 9

- Pipeline chạy end-to-end trên ảnh test, output rõ ràng tốt hơn input.
- Hàm enhance() có interface gọn mà cả team đã đồng ý, sẵn sàng đóng gói vào worker tuần sau.
- Bộ eval mình tự chọn bắt được một default bị chỉnh sai chỉ sau đúng một ngày.

### Khó khăn & Bài học

- **Khó khăn:**
  - CPU chậm đến mức một request có thể timeout, và team muốn nhảy sang GPU luôn.
- **Giải pháp:**
  - Mình chọn chấp nhận CPU cho dev để không đốt tiền, dời việc chuyển GPU sang khi vào AWS, ghi thẳng quyết định vào project notes.
- **Bài học:**
  - Vai trò lead đôi khi là chốt trade-off bằng chữ trong repo để team dừng tranh cãi lại mỗi tuần.

### Kế hoạch Tuần tới

- Dockerize FE, BE và worker.
- Đưa lên ECS Fargate + S3 cho môi trường staging.
- Chuẩn bị plan chuyển pipeline sang GPU khi cần.
