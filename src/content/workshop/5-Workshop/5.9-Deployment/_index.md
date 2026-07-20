---
title: "5.9 - Deployment"
date: 2026-07-18
weight: 19
chapter: false
pre: "<b>5.9. </b>"
---

## Overview

Build the frontend, upload to S3, and invalidate CloudFront to deploy the website.

---

## Step 1: Build Frontend

```bash
cd web/
npm run build
```

Output: `web/dist/` folder

---

## Step 2: Upload to S3

1. **S3 Console** → `upscale-static-YOUR_ACCOUNT_ID`
2. Upload entire contents of `dist/`

![5.9.1](/images/5-Workshop/5.9.1.png)![5.9.2](/images/5-Workshop/5.9.2.png)
3. Set metadata:
   - `.html` files: `Cache-Control: no-cache`
   - `.js`, `.css`, images: `Cache-Control: max-age=31536000`
   - Fonts: `Cache-Control: max-age=31536000`

---

## Step 3: Invalidate CloudFront

**CloudFront Console** → `upscale-vankhiem-vn` → Invalidations → Create:
- Object paths: `/*`
- Create
- Wait for Completed (~1-2 min)

---

## Step 4: Verify

1. Open `vankhiem0504.asia` in browser
2. Verify static assets load (check DevTools Network tab)
3. Check ALB access logs for API requests
4. Check ECS logs in CloudWatch

![5.9.3](/images/5-Workshop/5.9.3.png)

---

## Summary

| Step | Action |
|------|--------|
| Build | `npm run build` → `dist/` |
| Upload | S3 `upscale-static-{ACCOUNT_ID}` |
| Invalidate | `/*` in CloudFront |
| Verify | Open URL, check Network tab |

> **Next**: [5.10 - Cleanup](../5.10-cleanup/)
