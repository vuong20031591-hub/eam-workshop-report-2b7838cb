---
title: "Blog 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Session policies trong Amazon EKS Pod Identity

Amazon EKS Pod Identity vừa bổ sung session policies, và đây là một cải tiến em nghĩ đội DevOps nào chạy EKS ở quy mô lớn cũng nên để mắt tới. Ý tưởng đơn giản: thay vì phải tạo thêm một IAM role mới mỗi khi cần thu hẹp quyền cho một workload cụ thể, giờ đã có thể đính kèm một inline policy ngay tại association giữa ServiceAccount và IAM role.

Cách nó hoạt động cũng dễ hình dung. Quyền hiệu quả của pod là phần giao giữa policy của IAM role và session policy. Nghĩa là session policy chỉ có thể co lại chứ không mở rộng thêm quyền, nên không có rủi ro escalation. Điều này giải quyết đúng bài toán over-permissioning: khi nhiều workload dùng chung một role, mỗi workload có thể bị siết riêng theo nhu cầu thật.

Tính năng hỗ trợ cả same-account lẫn cross-account (qua IAM role chaining), nên các mô hình multi-account cũng hưởng lợi. Ở cluster lớn, cái được rõ nhất là giảm số IAM role phải quản lý — trước đây rất dễ chạm giới hạn quota IAM khi cứ mỗi workload phải một role riêng để giữ least privilege.

Cấu hình thì làm được qua Console, AWS CLI hoặc SDK khi tạo hoặc cập nhật association. Không cần thay đổi kiến trúc, chỉ là một trường mới trong lúc liên kết ServiceAccount với role.

Trường hợp em thấy hợp nhất là khi một team dùng chung một role cho vài pod: pod này chỉ cần đọc một S3 bucket, pod kia chỉ gọi một vài API cụ thể. Trước đây phải tách role, giờ chỉ cần hai session policy khác nhau trên cùng một role.

...Hình ảnh...

...Link...

...Hướng dẫn...
