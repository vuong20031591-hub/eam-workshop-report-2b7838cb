---
title: "Chia sẻ, đóng góp ý kiến"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 7. </b> "
---

Phần này em ghi lại cảm nhận sau khi hoàn thành workshop Upscale AI trong chương trình First Cloud AI Journey. Em cố nói thẳng cả chỗ hay lẫn chỗ chưa ổn, để team FCAJ có input thật khi tổ chức kỳ sau.

### Nội dung workshop

Đề bài chọn khéo. Upscale AI đủ nhỏ để một mình làm được, nhưng đủ khó vì bắt buộc dùng GPU, có state (EFS, PostgreSQL, Redis) và có async queue. Nếu chọn một app stateless không GPU thì em nghĩ đã bỏ qua phần thú vị nhất của AWS, tức là ECS on EC2 với capacity provider. Đó là chương khó nhất và cũng là chương em học được nhiều nhất.

### Mentor và tài liệu

Mentor để em thử trước, chỉ nhảy vào khi em rõ ràng đang bí. Ba tuần đầu em hơi bực vì tốn thời gian, sang tuần thứ tư thì hiểu vì sao cách này chạy. Tài liệu workshop chi tiết ở phần networking và ECS, mỏng hơn ở phần Cognito và CI/CD. Hai mục đó em phải đọc thẳng docs AWS, không phải vấn đề lớn nhưng nên bổ sung ở kỳ sau.

### Sự phù hợp với chuyên môn

Trùng khoảng 60% với những gì em đã biết (Linux, Docker, networking cơ bản) và 40% là thứ em chưa động: IAM chi tiết, ALB target group, EFS mount target, ElastiCache. Tỉ lệ đó hợp lý. Quen đủ để không loạn, mới đủ để không nhàm.

### Kỹ năng học được

Em học được thói quen viết đề xuất kiến trúc trước khi bấm nút Console, đọc bill AWS theo từng dòng để tìm chỗ tốn tiền không cần, và cleanup tài nguyên theo thứ tự ngược. Về mặt viết, ghi worklog hàng tuần kể cả tuần chậm hóa ra hữu ích hơn em tưởng.

### Nhịp chương trình

FCAJ giữ nhịp tốt: standup ngắn, review giữa kỳ, demo cuối kỳ. Không có deadline giả tạo. Khi em xin thêm một tuần vì phần Cognito phức tạp hơn dự tính, mentor duyệt mà không hỏi vặn.

### Chi phí và chính sách

Credit AWS đủ cho toàn bộ workshop nếu em cẩn thận với NAT Gateway và không để EC2 chạy qua đêm. Có vài ngày em quên tắt và tốn khoảng 8 USD ngoài dự tính. Đó là lỗi của em chứ không phải chính sách.

### Một số câu hỏi khác

Điều em hài lòng nhất: kết thúc chương trình em có một hệ thống chạy thật, không phải slide. Cảm giác gõ URL và nhận về ảnh đã upscale từ backend là động lực mạnh nhất.

Điều em nghĩ có thể cải thiện: onboarding tuần đầu hơi mỏng. Em mất khoảng ba ngày để biết ai làm gì và tìm tài liệu nội bộ ở đâu. Một trang "start here" cho học viên mới sẽ tiết kiệm hết khoảng thời gian đó.

Có giới thiệu bạn bè không: có, nhưng em sẽ nói trước là chương trình đòi hỏi tự học nhiều, không hợp với ai chỉ muốn được cầm tay chỉ việc.

### Đề xuất

Nếu format cho phép, em muốn thêm một buổi giữa kỳ với một học viên khóa trước, để có góc nhìn của người vừa đi qua chương trình. Em cũng muốn tiếp tục theo các buổi kỹ thuật của FCAJ sau khi kết thúc, kể cả với vai trò tình nguyện viên hỗ trợ khóa sau.
