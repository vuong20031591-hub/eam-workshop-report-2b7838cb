---
title: "Worklog Tuần 4"
date: 2024-01-01
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

## WORKLOG TUẦN 4

Tuần Security Group và S3. Nhìn ngoài nhàm, làm sai convention là rất đau.

Tôi chia `UPS-6` và `UPS-7` thành ticket nhỏ theo service, rồi review ma trận SG (ai được nói chuyện với ai, port nào). Bản đầu tiên mở Redis ra Internet, trả về. PR S3 phần lớn ổn, tôi chỉ đảm bảo mọi bucket đều bật block-public-access mặc định, không phụ thuộc vào việc ai đó nhớ bật.

Tự tay thì tôi chọn convention tên bucket (`upscale-<env>-<purpose>` cho input, output, artifacts, logs), viết lifecycle rule (đẩy sang Glacier sau 30 ngày, xoá log bucket sau 90 ngày), và làm template bucket policy dùng chung. Sau đó review ngắn với nhóm để ma trận SG không phải là sơ đồ không ai đọc.

Đến thứ Sáu, ma trận SG và convention S3 đã merge, bucket và service mới bắt đầu tự theo template mà không cần tôi bám từng PR.

Một bất ngờ nhỏ: hai bạn không nhận ra ALB gọi ECS trong cùng VPC vẫn phải có SG rule. Cũng dễ hiểu. Tôi ghi thêm một dòng vào ADR.

Tuần sau chương 5.5. EFS cho model weights dùng chung, ECR cho container image.
