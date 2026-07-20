---
title: "5.9 - Triển khai"
date: 2026-07-18
weight: 19
chapter: false
pre: "<b>5.9. </b>"
---

## Tổng quan

Build frontend, upload lên S3 và invalidate CloudFront để triển khai website.

---

## Bước 1: Build Frontend

```bash
cd web/
npm run build
```

Output: thư mục `web/dist/`

---

## Bước 2: Upload lên S3

1. **S3 Console** → `upscale-static-YOUR_ACCOUNT_ID`
2. Upload toàn bộ nội dung của `dist/`

![5.9.1](/images/5-Workshop/5.9.1.png)![5.9.2](/images/5-Workshop/5.9.2.png)

---

## Bước 3: Invalidate CloudFront

**CloudFront Console** → `upscale-vankhiem-vn` → Invalidations → Create:
- Đường dẫn đối tượng (Object paths): `/*`
- Create
- Đợi trạng thái Completed (~1-2 phút)

---

## Bước 4: Xác minh

1. Mở `vankhiem0504.asia` trên trình duyệt
2. Xác minh static assets tải (kiểm tra tab Network DevTools)
3. Kiểm tra ALB access logs cho API requests
4. Kiểm tra ECS logs trong CloudWatch
![5.9.3](/images/5-Workshop/5.9.3.png)
---

## Tóm tắt

| Bước | Hành động |
|-----|---------|
| Build | `npm run build` → `dist/` |
| Upload | S3 `upscale-static-{ACCOUNT_ID}` |
| Invalidate | `/*` trong CloudFront |
| Xác minh | Mở URL, kiểm tra Network tab |

> **Tiếp theo**: [5.10 - Dọn dẹp](../5.10-cleanup/)
