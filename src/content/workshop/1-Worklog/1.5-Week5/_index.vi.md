---
title: "Worklog Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WORKLOG TUẦN 5

Tuần CloudWatch và AWS CLI. Hai dịch vụ kiểu "cả đời sẽ dùng mỗi ngày". `UPS-5` trên Linear.

CloudWatch trước. Tôi tạo Log Group, đẩy log từ một EC2 lên, dựng metric filter đếm từ `ERROR` trong log stream, và gắn alarm lên trên. Rồi cố tình cho alarm nổ bằng script vòng in lỗi liên tục, xem thông báo đến, thầm hài lòng. Phần dashboard đầu tiên tôi thấy không trực quan lắm. Làm được dashboard thực sự hữu ích khó hơn docs cho thấy.

AWS CLI thì tôi thích hơn kỳ vọng. Sau một tuần click console, quay về gõ `aws s3 ls`, `aws ec2 describe-instances`, thêm vài lệnh pipe qua `jq`, cảm giác như về nhà. Tôi lập named profile có MFA và ép mình chỉ dùng CLI trong nửa cuối tuần, để tạo phản xạ.

Về team, tôi bảo mọi người làm lại một lab cũ hoàn toàn bằng CLI. Hai bạn càm ràm, xong đều thừa nhận đó chính là bài khiến kiến thức bám lại. Cũng mở một doc chung để nhặt các one-liner CLI dùng nhiều hơn một lần. Về sau chắc chắn có ích.

Tuần sau: DynamoDB và ElastiCache.
