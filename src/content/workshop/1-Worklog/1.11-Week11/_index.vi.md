---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

## WORKLOG TUẦN 11

Tuần async và realtime. Luồng request-response đồng bộ chạy được, nhưng một job upscale lớn kéo dài đủ lâu để frontend về cơ bản chỉ đứng nhìn spinner và cầu nguyện. Đến lúc sửa. `UPS-11` trên Linear.

Tôi chia việc thành ba mảnh: SQS làm queue job, Redis giữ trạng thái tiến độ theo từng job, và SSE (server-sent events) để browser nhận progress được đẩy chứ không phải poll.

Backend: `/enhance` không còn chạy mô hình trực tiếp. Nó ghi một job lên SQS và trả về job id. Một tiến trình worker pull từ SQS, chạy pipeline, cập nhật key Redis với tiến độ (`queued`, `running:XX%`, `done`, `failed`). Một endpoint thứ hai stream key đó qua SSE để frontend thấy thanh chạy.

Frontend: thay spinner bằng progress bar đọc từ SSE, thêm nhãn trạng thái nhỏ để user biết job đang xếp hàng hay đang chạy. Thay đổi nhỏ, cảm giác app khác hẳn.

Vài chỗ bị bẫy. Visibility timeout của SQS lúc đầu để thấp, job dài bị redelivery trong lúc đang chạy. Nâng lên và ghi lý do để đừng ai "tối ưu" hạ lại. TTL của Redis cũng phải nghĩ kỹ, vì rò rỉ một key mỗi job mãi mãi sẽ cộng dồn.

Cũng thêm dead-letter queue và retry policy đơn giản ba lần, vì "im lặng nuốt lỗi vào hư không" không phải feature.

Tuần sau: test cuối, viết tài liệu kỹ thuật, và demo.
