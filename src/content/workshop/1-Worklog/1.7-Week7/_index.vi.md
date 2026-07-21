---
title: "Worklog Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

## WORKLOG TUẦN 7

Tuần kickoff project. Sáu tuần học ở lại phía sau, giờ phải thật sự dựng ra thứ gì đó. `UPS-7` trên Linear.

Tôi chạy buổi kickoff thứ Hai. Đặt tên là Upscale AI, chốt câu pitch (upload một tấm ảnh, nhận lại bản nét hơn, khuôn mặt đẹp hơn), và đi qua kiến trúc end-to-end nháp. Chưa phải bản cuối, kiểu "bù nhìn" để cả nhóm xúm vào chê. Frontend React + Vite + TanStack Router, backend FastAPI, worker cho phần nặng tính sau. Ảnh lên S3 khi đến giai đoạn AWS.

Phần còn lại của tuần chia giữa planning và ngồi cạnh scaffolding. Tôi cắt project ra thành module (upload, điều phối job, chạy mô hình, kết quả, auth để sau) và rải xuống sub-task của `UPS-7` để owner rõ. Rồi ngồi với từng cặp lúc họ scaffold phần của mình. Tôi không code nhiều tuần này, nhưng mở repo FE và BE, dựng khung CI, và cắm một route `/healthz` bé xíu ở cả hai bên để có sẵn một build xanh mà bảo vệ.

Có một điểm gợn xuất hiện sớm: hai bạn muốn over-engineer folder structure. Tôi bảo ship upload chạy được trước, refactor sau, và ghi luôn vào repo.

Cuối tuần: FE load, BE trả lời, hai bên nói chuyện được qua CORS, CI xanh. Nhỏ, nhưng đúng là vạch xuất phát.

Tuần sau: làm luồng upload thật, đầu này sang đầu kia.
