---
title: "Worklog Tuần 12"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WORKLOG TUẦN 12

Tuần cuối. Test cuối, tài liệu, và demo. `UPS-12` trên Linear.

Tôi chạy app qua một lượt end-to-end tử tế trên browser sạch và tài khoản sạch: đăng ký, upload, chờ job, tải kết quả. Mỗi chỗ tôi khựng lại đều ghi thành bug, kể cả khi app vẫn chạy, vì "chạy được nhưng tôi phải dừng lại nghĩ" là bug UX tôi muốn bắt trước demo chứ không phải trong lúc demo. Phần lớn là sửa chữ, và một bug thật: job fail không clear key Redis.

Tôi chủ trì buổi triage và chia thành "phải fix trước demo" và "để sau nếu còn thời gian". Đống phải-fix nhỏ hơn tôi lo, một bất ngờ dễ chịu cho một chiều thứ Sáu.

Phần tài liệu, tôi cập nhật README để người mới clone repo, đọc theo thứ tự, và dựng được local stack mà không phải hỏi ai. Cũng viết ghi chú kiến trúc ngắn giải thích vì sao có các mảnh, không chỉ nó là gì, vì "vì sao" là cái người ta quên trước tiên.

Buổi demo diễn ra ổn. Không hoàn hảo, nhưng app làm đúng cái nó cần làm trước những người chưa từng thấy nó, và câu hỏi sau đó là về sản phẩm, không phải "sao nó crash". Tôi tính là thắng.

Đóng kỳ thực tập. Nếu làm lại tôi sẽ đẩy phần async lên sớm hơn, vì đó là thay đổi khiến app cảm giác thật sự có sức sống. Ghi vào báo cáo cuối như khuyến nghị duy nhất tôi sẵn sàng đứng ra bảo vệ.
