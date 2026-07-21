---
title: "Worklog Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WORKLOG TUẦN 8

Tuần làm luồng upload. Dựng thật đường đi "user thả ảnh, backend nhận" từ đầu đến đuôi. `UPS-8` trên Linear.

Phần lớn thời gian tôi làm UI upload phía frontend. Vùng drag-and-drop, file picker phòng khi thiết bị không hỗ trợ drag, thumbnail preview, validate size và MIME, thanh progress khi upload đang chạy. Không cầu kỳ về hình thức, nhưng muốn tương tác đúng cảm giác trước khi gắn thứ gì đó tốn kém đằng sau. Tôi pair vài tiếng với phía backend để chắc endpoint FastAPI `/upload` khớp với frontend về tên field multipart, vì lệch chỗ đó phát hiện sau sẽ mất nửa ngày.

Backend thì endpoint validate file, tạm lưu vào folder local (S3 sẽ vào ở giai đoạn AWS sau này), và trả về job id cho frontend giữ. Tôi giữ validate ở server dù client đã check, vì tin client là cách sớm nhất để phát hiện bug ngoài production.

Cũng viết một ghi chú ngắn "upload chạy thế nào" trong repo, để người mới vào project trace một request đầu-đến-cuối mà không cần đọc code từ zero.

Về team, có chỗ tôi phải đẩy: có bạn muốn bỏ validate server-side vì "client đã check". Trả PR lại kèm comment.

Cuối tuần: user chọn ảnh, preview được, bấm upload, backend trả job id. Chưa có AI, nhưng đường ống đã sẵn.

Tuần sau: tích hợp Real-ESRGAN và CodeFormer.
