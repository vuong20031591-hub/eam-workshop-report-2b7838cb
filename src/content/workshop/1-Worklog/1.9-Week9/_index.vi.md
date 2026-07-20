---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WORKLOG TUẦN 9

Tuần lớp edge. CloudFront đặt trước ALB, WAF ngồi trên chặn ồn ào, Route 53 để app có domain thật.

Tôi chia việc thành `UPS-13` (CloudFront + Route 53) và `UPS-14` (WAF). Buổi thiết kế cache mới là phần quan trọng nhất. Frontend tĩnh cache mạnh, `/api/*` không cache, header `Authorization` phải được forward để request có auth vẫn chạy. Viết ra thì hiển nhiên, nhưng bỏ qua buổi đó là có người cache nhầm response login 24 tiếng, không ai hiểu vì sao chẳng có gì hoạt động.

PR WAF tôi cắt một rule làm trùng việc của managed common rule group. PR Route 53 tôi kiểm apex dùng alias trỏ CloudFront, không phải A record vào một IP sẽ thay đổi.

Tự tay tôi viết spec cache behavior, chọn WAF managed rule (Common, Known Bad Inputs, và rate limit 2000 request mỗi 5 phút mỗi IP), soạn kế hoạch chuyển DNS.

Cuối tuần domain resolve được, HTTPS kết thúc ở CloudFront, ALB nằm gọn sau edge, WAF chặn nhiễu rõ ràng ngay ngày đầu.

Có một pha ngượng: CloudFront cache nhầm response lỗi ban đầu của frontend và phục vụ nó một lúc. Tôi thêm TTL ngắn cho 4xx và 5xx vào spec để lên prod không lặp lại.

Tuần sau vẫn chương 5.9. Cognito cho đăng nhập, và ép CloudWatch dashboard thật sự có ích chứ không phải một bức tường đồ thị.
