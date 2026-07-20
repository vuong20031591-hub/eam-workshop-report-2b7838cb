---
title: "5.2 - Yêu cầu"
date: 2026-07-18
weight: 12
chapter: false
pre: "<b>5.2. </b>"
---

## Tổng quan

Thiết lập môi trường AWS: tạo tài khoản, cấu hình IAM admin user, và xác nhận quyền truy cập console.

---

## Bước 1: Tạo tài khoản AWS

1. Truy cập [https://aws.amazon.com](https://aws.amazon.com)
2. Nhấp **"Create an AWS Account"**
3. Hoàn tất đăng ký (email, mật khẩu, thanh toán, xác minh danh tính)
4. Chọn **Basic Support Plan** (miễn phí)

---

## Bước 2: Tạo IAM Admin User

Không bao giờ dùng root cho công việc hàng ngày.

1. Tìm **IAM** trong AWS Console → mở
![5.2.1](/images/5-Workshop/5.2.1.png)
2. Sidebar trái → **Users** → **"Create user"**
![5.2.2](/images/5-Workshop/5.2.2.png)![5.2.3](/images/5-Workshop/5.2.3.png)
3. Username: `upscale-deployer`
![5.2.4](/images/5-Workshop/5.2.4.png)
4. **Attach policies directly** → tìm `AdministratorAccess` → tích chọn
![5.2.5](/images/5-Workshop/5.2.5.png)
5. **Next** → **Create user**
![5.2.6](/images/5-Workshop/5.2.6.png)

### Bật quyền truy cập Console

1. Nhấp `upscale-deployer` → tab **"Security credentials"**
![5.2.7](/images/5-Workshop/5.2.7.png)![5.2.8](/images/5-Workshop/5.2.8.png)
2. **Console access** → **"Enable"**
![5.2.9](/images/5-Workshop/5.2.9.png)
3. Đặt mật khẩu tùy chọn, bỏ chọn "must create new password at next sign-in"
4. **Apply**
![5.2.10](/images/5-Workshop/5.2.10.png)
5. **Lưu URL đăng nhập** (ví dụ: `https://123456789.signin.aws.amazon.com/console`)
![5.2.11](/images/5-Workshop/5.2.11.png)

---

## Bước 3: Đăng nhập với IAM User

1. Đăng xuất khỏi root
2. Truy cập URL đăng nhập IAM
3. Đăng nhập bằng thông tin `upscale-deployer`

---

## Bước 4: Chọn Region

Tất cả tài nguyên tại **ap-southeast-1**:

1. Góc trên bên phải → nhấp dropdown vùng
2. Chọn **Asia Pacific (Singapore) ap-southeast-1**

---

## Tóm tắt

| Mục | Giá trị |
|-----|---------|
| IAM User | `upscale-deployer` với AdministratorAccess |
| Region | ap-southeast-1 (Singapore) |
| Cần CLI | Không |

> **Tiếp theo**: [5.3 - Hạ tầng](../5.3-infrastructure/)
