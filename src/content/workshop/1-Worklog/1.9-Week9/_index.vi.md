---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WORKLOG TUẦN 9

Tuần tích hợp mô hình. Ghép Real-ESRGAN và CodeFormer vào backend để ảnh upload thật sự quay lại nét hơn. `UPS-9` trên Linear.

Tôi làm phần nghiên cứu. Real-ESRGAN lo upscale tổng thể, CodeFormer mạnh phần khuôn mặt, chạy nối tiếp là pipeline hợp lý cho use case của mình. Setup cả hai ở máy local, chạy trên tập ảnh test nhỏ, và mắt thường kiểm xem có đúng như paper nói không. Ảnh marketing của họ chọn lọc kỹ, nên phải chạy trên ảnh của mình để chắc.

Phần integration tôi pair với bạn phụ trách module inference. Bọc cả hai mô hình sau một hàm `enhance(image)` để phần còn lại của backend không cần biết mô hình nào chạy, và thêm object params cho các knob quan trọng (hệ số upscale, bật/tắt face restore, fidelity weight cho CodeFormer).

Phần khó chịu của tuần là hiệu năng. Chạy cả hai mô hình trên CPU chậm đau lòng, chậm đến mức một request sẽ timeout với setup hiện tại. Thống nhất giữ CPU trong môi trường dev, chuyển sang GPU ở giai đoạn AWS. Ghi quyết định vào project notes để sau khỏi tranh cãi lại.

Cũng làm một bộ eval nội bộ nhỏ (hai chục ảnh đủ kích thước, có ảnh mặt có ảnh không) kèm script chạy pipeline trên toàn bộ và đổ output ra folder. Không phải benchmark, nhưng bắt được regression.

Tuần sau: dockerize và đưa lên ECS/Fargate cùng S3.
