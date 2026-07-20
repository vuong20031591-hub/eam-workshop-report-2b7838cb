---
title: "Week 5 Worklog"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

## WEEK 5 WORKLOG

### Week 5 Objectives

This week the attention swings over to FE. Init the `upscale-FE` project with TanStack Start (React 19 + Vite 8): upload UI using `react-dropzone`, an AI/Standard mode toggle, OIDC Cognito auth via `react-oidc-context`. Design tokens also got locked: violet `#7C3AED`, cyan `#06B6D4`, Space Grotesk / DM Sans, components from shadcn/ui (Radix) on Tailwind v4. In parallel, the FE hosting stack: S3 static website + CloudFront + ACM for the SPA build.

### Tasks to be carried out this week

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 1 | Init `upscale-FE`: **TanStack Start** (Vite 8) + Tailwind v4 + shadcn/ui + react-dropzone + lucide-react + sonner. | 23/05/2026 | 23/05/2026 | [TanStack Start](https://tanstack.com/start) |
| 2 | Build `UploadZone`, `ModeToggle`, `ResultCard` (file routes under `src/routes/*`, TanStack Query); call BE via `VITE_API_URL`. | 24/05/2026 | 25/05/2026 | [TanStack Router](https://tanstack.com/router) |
| 3 | Create **S3 bucket** `upscale-fe` (enable static website hosting), block public access + OAC. | 26/05/2026 | 26/05/2026 | [CloudFront OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) |
| 4 | Create **CloudFront distribution** in front of S3, default cache policy + a custom one for hashed `/assets/*` (1 year), SPA fallback `403/404 → /index.html`. | 27/05/2026 | 28/05/2026 | [CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/) |
| 5 | Request **ACM certificate** for `upscaler.vuongtech.dev` (must live in `us-east-1` for CloudFront). | 29/05/2026 | 29/05/2026 | [ACM](https://docs.aws.amazon.com/acm/latest/userguide/) |
| 6 | CI on GitHub Actions: `vite build` → sync `dist/` to `s3://upscale-fe` → `cloudfront create-invalidation`. | 30/05/2026 | 30/05/2026 | - |
| 7 | Deploy preview to CloudFront, TTFB around 85ms from the Singapore edge. | 31/05/2026 | 31/05/2026 | - |

### Week 5 Achievements

FE is live on CloudFront with HTTPS through ACM. CI/CD is clean: push to `main` and it syncs S3 and invalidates CloudFront on its own. Lighthouse Performance sits at 92, and the TTFB win is basically edge cache doing its job — no magic beyond that.

### Challenges & Lessons

Out of habit I requested the ACM cert in `ap-southeast-1`, until CloudFront politely refused to use it. CloudFront only accepts certs from `us-east-1` because it's a global service. Re-requesting in the right region unblocked everything, and I kept the `ap-southeast-1` cert around for the ALB later. The lesson is short: a few AWS services are pinned to `us-east-1`, don't forget it.

### Next Week Plan

SSE progress endpoint. CORS + presigned upload direct from FE to S3. Put an ALB in front of FastAPI with a Cognito-authenticated listener.
