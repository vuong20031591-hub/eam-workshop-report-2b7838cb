---
title: "Worklog Tuần 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

## WORKLOG TUẦN 2 (27/04/2026 – 29/04/2026)

Tuần ngắn (chỉ ba ngày làm việc) nhưng đặc. Nửa đầu là IAM, nửa sau VPC và EC2.

Ngày rưỡi đầu tôi ngồi với IAM. Tự tay tạo User, Group, Role, Policy, bật MFA cho tài khoản root rồi cất credential root vào chỗ mà tôi sẽ không vô tình đụng lại. Lab Least Privilege là bài đọng lại nhất. Tôi viết một policy, cố tình deny chính mình một thứ, rồi đọc thông báo lỗi tới khi hiểu chính xác dòng nào gây ra. Nghe chậm, nhưng tôi học được từ đó nhiều hơn bất cứ sơ đồ nào.

Tôi suýt commit một access key dài hạn lên repo cá nhân trong lúc nghịch. Bắt kịp, rotate key, và giờ tôi hiểu vì sao guide cứ nhấn mãi điểm đó.

VPC và EC2 là nửa còn lại. Tôi làm lab theo hướng dẫn, vẽ default VPC ra giấy, rồi dựng lại từ đầu để xem mình có thật sự biết mỗi mảnh làm gì không (chưa, không hoàn toàn). Bật một EC2 nhỏ, SSH vào, gõ vài lệnh, terminate. Không có gì hào nhoáng, nhưng khá nhiều giả định của tôi về "cloud" được lặng lẽ chỉnh lại trong giờ đồng hồ đó.

Tuần sau: IAM Role cho EC2, Cloud9, và lần đầu host static site trên S3.
