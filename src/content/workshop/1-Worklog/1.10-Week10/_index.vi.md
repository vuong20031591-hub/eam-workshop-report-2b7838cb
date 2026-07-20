---
title: "Worklog Tuần 10"
date: 2024-01-01
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

## WORKLOG TUẦN 10

Tuần Cognito và CloudWatch. Sign-in không phải tự dựng, và một góc monitoring thật sự báo được khi có vấn đề, chứ không phải "cái gì cũng là đồ thị".

`UPS-15` (Cognito user pool + Google OAuth) và `UPS-16` (observability) mở ra. Thiết kế auth đơn giản một khi thống nhất hình dạng: Cognito user pool với hosted UI, Google làm identity provider, ID token đổi lấy session cookie ở FastAPI. Không ai phải đụng vào chuyện lưu password, đúng cái tôi muốn.

PR Cognito tôi siết danh sách callback OAuth chỉ còn prod và local dev. Callback wildcard là loại thứ mà sau này có người chỉ ra mới thấy đáng tiếc.

PR dashboard CloudWatch nộp lên với khoảng mười hai widget. Tôi cắt nửa, vì dashboard không ai nhìn còn tệ hơn không có dashboard. Cái còn lại là tập nhỏ mình thực sự mở ra mỗi sáng.

Tự tay tôi viết tài liệu luồng auth cho nhóm để cả team code theo một hợp đồng, và chọn alarm để paging: ALB 5xx > 1% trong 5 phút, DLQ SQS khác rỗng, GPU util > 90% kéo dài, ECS service unhealthy. Thứ dưới ngưỡng đó chỉ là đồ thị, không phải page.

User đăng nhập được bằng Google, API xác thực token, dashboard chỉ hiện bốn số thực sự cần nhìn.

CORS Cognito hosted UI ngốn vài tiếng. Tôi viết ghi chú ngắn "quy tắc callback URL" vào runbook để không mất chừng đó thời gian mỗi lần.

Tuần sau đóng chương 5.9. Diễn tập deploy end-to-end và buổi demo đầu tiên tử tế.
