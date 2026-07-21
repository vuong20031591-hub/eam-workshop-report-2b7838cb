---
title: "Worklog Tuần 3"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

## WORKLOG TUẦN 3 (04/05/2026 – 06/05/2026)

Lại một tuần ngắn. IAM Role cho EC2, Cloud9, và lần đầu host static site trên S3 tử tế.

Lab IAM Role cho EC2 là bài khiến instance profile "vào đầu" tôi. Không cần cắm access key lên box, instance assume role và SDK tự pick lên. Nghe hiển nhiên khi đã hiểu, nhưng tôi làm lab hai lần, một lần theo hướng dẫn, một lần từ trí nhớ, vì chỗ hụt đó mới lộ ra cái tôi chưa thật sự hiểu. Lượt hai tôi mắc kẹt một hồi vì gõ sai trust policy. Cũng đáng.

Cloud9 tôi mở chủ yếu vì tò mò. IDE gọn, chạy trên browser, hữu ích khi máy dở chứng, nhưng tôi khá nhanh quay về VS Code. Biết nó có tồn tại là đủ.

Phần lớn thời gian là lab S3 static website. Tạo bucket, upload `index.html`, vật lộn với Bucket Policy cho tới khi public read chịu áp, bật Static Website Hosting. Lần đầu quên tắt Block Public Access, ngồi khoảng hai chục phút nhìn 403 tự hỏi mình quên gì. Lỗi này tôi không lặp lần hai, và giờ tôi hiểu vì sao AWS đặt lớp chặn đó ngay từ đầu.

Tuần sau: RDS và Lightsail.
