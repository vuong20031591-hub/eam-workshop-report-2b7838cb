---
title: "Worklog Tuần 5"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WORKLOG TUẦN 5 (18/05/2026 – 20/05/2026)

Lại một tuần ngắn. CloudWatch và AWS CLI, hai dịch vụ tôi nghe nói sẽ dùng mỗi ngày mãi về sau.

CloudWatch trước. Tôi tạo Log Group, đẩy log từ một EC2 lên, dựng metric filter đếm từ `ERROR` trong stream, và gắn alarm lên trên. Rồi cố tình cho alarm nổ bằng script vòng in lỗi liên tục, xem thông báo về mail, thấy khoái được chừng mười giây. Làm một dashboard thật sự hữu ích khó hơn tài liệu cho thấy, tôi bỏ luôn cái đầu tiên vì nó là một bức tường đồ thị chẳng ai muốn nhìn.

AWS CLI tôi thích hơn kỳ vọng. Sau một tuần click console, gõ `aws s3 ls`, `aws ec2 describe-instances`, pipe qua `jq` cảm giác như về nhà. Lập named profile có MFA và ép mình chỉ dùng CLI trong nửa cuối tuần, để phản xạ hình thành trước khi console kịp thành cơ bắp.

Tôi làm lại lab S3 static hosting của Tuần 3 hoàn toàn bằng CLI. Cằn nhằn với chính mình một chút, nhưng đó là bài khiến kiến thức bám lại. Mở một doc cá nhân nhỏ nhặt các one-liner cứ gõ đi gõ lại, để đỡ phải gõ lại.

Tuần sau: DynamoDB và ElastiCache.
