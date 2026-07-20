# Upscale-BE + Upscale-FE — Specification

**Nguồn phân tích:**
- `github.com/vuong20031591-hub/upscale-BE` — commit `8cd016b`
- `github.com/vuong20031591-hub/upscale-FE` — commit `c761d9e`

**Mục đích:** Tài liệu này mô tả **chính xác trạng thái hiện tại** của 2 repo (as-is), đối chiếu với **sơ đồ AWS Cloud** đang thiết kế, và đưa ra **spec triển khai** cho các sprint tiếp theo (login Google, DB, deploy AWS).

---

## Phần 1 — As-Is: Trạng thái codebase hiện tại

### 1.1. Backend (`upscale-BE`)

**Stack:** Python 3.11 · FastAPI 0.109 · Uvicorn · PyTorch 2.4.1 (CUDA 12.4) · Real-ESRGAN 0.3 · GFPGAN 1.3.8 · CodeFormer (embedded từ `codeformer_minimal/` + `facelib/`) · Prometheus client · SSE-Starlette.

**Cấu trúc:**

```text
app/
├── main.py                    # FastAPI factory, preload model on startup
├── core/                      # config, exceptions (dataclass @frozen)
├── middleware/rate_limiter.py # in-memory rate limit (RATE_LIMIT_PER_MINUTE)
├── models/                    # Pydantic-like DTOs: Resolution, ProcessedImage,
│                              #   UploadFileInfo, AnalysisResult, ProcessingMode
├── routers/                   # 5 router: health, upscale_basic, upscale_face,
│                              #   upscale_smart, upscale_stream
├── services/                  # ModelManager (singleton), CodeFormerManager,
│                              #   ImageProcessor, SmartProcessor, ImageAnalyzer,
│                              #   FaceEnhancementService, UpscaleJobProcessor
├── utils/                     # file_handler, logging_utils (structured JSON log)
└── validators/                # face_enhancement_validator
codeformer_minimal/            # CodeFormer arch (codeformer_arch, vqgan_arch)
facelib/                       # RetinaFace + YOLOv5-face + parsing (bisenet/parsenet)
weights/                       # local .pth (auto-download từ GitHub Release)
tests/                         # pytest + hypothesis, ~70+ file test
```

**API endpoints (tổng cộng 9):**

| Method | Path | Loại | Mô tả |
|---|---|---|---|
| GET | `/` | info | Service info |
| GET | `/health` | health | Ping cơ bản |
| GET | `/health/ready` | health | Model load status |
| GET | `/health/config` | health | Public config (upload/output) |
| GET | `/health/metrics` | metrics | Prometheus exposition |
| POST | `/upscale/ai` | **sync** | Real-ESRGAN 4x → 2K/4K, optional CodeFormer |
| POST | `/upscale/standard` | **sync** | LANCZOS resampling |
| POST | `/upscale/smart` | **sync** | Auto-detect issue → chọn mode xử lý |
| POST | `/upscale/enhance/face` | **sync** | CodeFormer 3 mode: restoration / colorization / inpainting |
| POST | `/upscale/ai/stream` | **async** | Tạo job, chạy trong `BackgroundTasks`, trả `job_id` |
| GET | `/upscale/progress/{job_id}` | **SSE** | Stream tiến độ job (in-memory `_progress_store` dict) |

**Response format:**
- Sync: `StreamingResponse` binary PNG + custom headers (`X-Faces-Detected`, `X-Processing-Time`, `X-Mode-Used`, `X-Analysis-*`, `X-Original-Width`, `X-Final-Height`, ...)
- Async: JSON `{"job_id": "uuid"}` → poll SSE

**Cơ chế nội bộ:**
- **ModelManager singleton** (double-check locking) — preload tại startup event
- **In-memory job store** — `_progress_store: dict[str, dict]` trong `upscale_stream.py` (KHÔNG persistent, mất khi restart, không share giữa nhiều worker)
- **Rate limit middleware** — sliding window per-IP, đọc `X-Forwarded-For` từ `TRUSTED_PROXIES`
- **Logging** — structured JSON qua `logging_utils.get_structured_logger`
- **Metrics** — `prometheus_client` Counter/Histogram/Gauge
- **Validation** — kiểm size ≤ 10MB, content-type `image/jpeg|png`, extension

**Config (env vars):**
`API_HOST/PORT/DEBUG`, `CORS_ORIGINS`, `MAX_FILE_SIZE`, `ALLOWED_EXTENSIONS`, `MODEL_NAME`, `MODEL_SCALE`, `MODEL_PATH`, `TILE_SIZE`, `HALF_PRECISION`, `CODEFORMER_ENABLED/WEIGHT/FACE_UPSAMPLE`, `GPU_CACHE_CLEAR_FREQUENCY`, `RATE_LIMIT_PER_MINUTE`, `TRUSTED_PROXIES`, `SUPPORTED_RESOLUTIONS`, `DEFAULT_TARGET_RESOLUTION`, `OUTPUT_FORMAT`, `OUTPUT_QUALITY`.

**Điều KHÔNG có trong BE:**
- ❌ Không có database (không có SQLAlchemy, không có model user/job persistent)
- ❌ Không có auth / JWT / OAuth
- ❌ Không có message queue (Celery, Redis, SQS)
- ❌ Không có object storage (ảnh xử lý in-memory rồi stream trả về ngay, không lưu S3/disk)
- ❌ Không có Dockerfile
- ❌ Không có CI/CD workflow

---

### 1.2. Frontend (`upscale-FE`)

**Stack:** Next.js 16.1.6 (App Router) · React 19.2 · TypeScript 5 · TailwindCSS 4 · react-dropzone · lucide-react · React Compiler (babel plugin).

**Cấu trúc:**

```text
src/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # / — Upscale chung (Smart/AI/Standard)
│   ├── face-enhancement/page.tsx     # /face-enhancement — CodeFormer UI
│   └── globals.css                   # Tailwind + design tokens
├── components/
│   ├── FaceEnhancement/              # Section + ModeSelector + Preview
│   ├── upload/                       # Dropzone, Preview, Progress, Streaming
│   ├── result/                       # ComparisonSlider, Lightbox, Metadata,
│   │                                 #   ResultView, UnifiedResultView, Download
│   ├── feedback/                     # Toast, EmptyState, ErrorBoundary
│   ├── ui/                           # Button, Card, Progress, Skeleton, Spinner,
│   │                                 #   TabSwitcher, ThemeToggle
│   └── layout/Navbar.tsx
├── context/                          # UpscaleContext, FaceEnhancementContext
├── hooks/                            # useImageUpload, useStreamingUpload (SSE),
│                                     #   useComparisonSlider, useDarkMode,
│                                     #   useImageZoom, useToast
├── lib/                              # api.ts (XHR + fetch), constants, utils
├── services/faceEnhancementApi.ts    # fetch client cho /upscale/enhance/face
└── types/                            # UpscaleConfig, UpscaleResult, FaceMode, ...
```

**Routes / Pages:**
- `/` — Landing + upload zone + tabs (Smart / AI / Standard) + result view
- `/face-enhancement` — Trang riêng cho CodeFormer 3 mode

**API client:**
- `lib/api.ts` — dùng `XMLHttpRequest` (cần progress upload event) cho `/upscale/ai|standard`, trả về Blob PNG
- `services/faceEnhancementApi.ts` — dùng `fetch()` cho `/upscale/enhance/face`, parse metadata từ headers
- `hooks/useStreamingUpload.ts` — SSE cho `/upscale/ai/stream` + `/upscale/progress/{job_id}`

**Cấu hình:**
- `NEXT_PUBLIC_API_URL` (default `http://localhost:8000`)
- Không có `.env.local.example` trong repo

**Điều KHÔNG có trong FE:**
- ❌ Không có auth UI (login / signup / profile)
- ❌ Không có route `/history`, `/dashboard`, `/settings`
- ❌ Không có Next.js API routes (all-BFF-less, gọi thẳng FastAPI)
- ❌ Không có state management ngoài React Context (không Zustand/Redux)
- ❌ Không có test (Vitest/Jest chưa cấu hình)
- ❌ Không có Dockerfile

---

### 1.3. Đối chiếu với sơ đồ AWS Cloud hiện có

| Node trong sơ đồ | Trạng thái code | Ghi chú |
|---|---|---|
| Route53 · CloudFront · ACM | ⬜ Chưa có | Deploy step |
| WAF | ⬜ Chưa có | Rate limit đang in-app |
| API Gateway | ⬜ Chưa có | FastAPI mở port trực tiếp |
| **Cognito** | ❌ Không có auth | Sprint 2 |
| ALB · ASG · EC2 GPU | ⬜ Chưa có | Deploy step |
| **RDS / Database** | ❌ Không có DB | Sprint 3 |
| **S3 (input/output)** | ❌ In-memory | Sprint 4 (async) |
| **SQS** | ❌ BackgroundTasks in-process | Sprint 4 (async) |
| Secrets Manager | ⬜ Chưa có | Đang đọc `.env` |
| IAM | ⬜ Chưa có | Deploy step |
| CloudWatch Logs · Metrics · X-Ray | ⚠️ Có Prometheus + JSON log | Cần adapter |
| Cost Explorer · Budgets | ⬜ Không phải code | Console setup |

**Kết luận:** Sơ đồ hiện tại là **target state**, không phải as-is. Code chỉ đủ để chạy standalone Docker compose (FE + BE + GPU).

---

## Phần 2 — To-Be Spec: Roadmap khớp AWS

### Sprint 1 — Ổn định as-is (Foundation)

**Mục tiêu:** Đóng gói, chạy được local đầy đủ, chuẩn hoá.

- [ ] `Dockerfile` cho BE (base `nvidia/cuda:12.4-runtime`, multi-stage build, download weights ở build hoặc entrypoint)
- [ ] `Dockerfile` cho FE (Next.js standalone output)
- [ ] `docker-compose.yml` — FE + BE, mount `weights/` volume, GPU passthrough
- [ ] `.env.local.example` cho FE
- [ ] GitHub Actions: lint + test BE (pytest), FE (`next build`)
- [ ] README hợp nhất quy trình chạy

**Deliverable:** `docker compose up` chạy được end-to-end.

---

### Sprint 2 — Auth: Cognito + Google Sign-In

**Kiến trúc:**

```text
Browser ──(1) redirect───▶ Cognito Hosted UI
                            └─ Google IdP (federation)
Browser ◀──(2) code──────── Cognito callback (/auth/callback trên FE)
Browser ──(3) exchange──▶ Cognito /oauth2/token → JWT (id_token + access_token)
Browser ──(4) API call───▶ FastAPI
   header: Authorization: Bearer <access_token>
FastAPI ──(5) verify──▶ JWKS từ Cognito (cache) → validate iss/aud/exp
```

**FE changes:**
- Cài `oidc-client-ts` hoặc `aws-amplify/auth`
- Thêm `src/lib/auth.ts` — wrapper login/logout/getToken/refresh
- Thêm `src/context/AuthContext.tsx` — expose `user`, `token`, `signIn()`, `signOut()`
- Trang mới: `/login`, `/auth/callback`, `/account`
- `Navbar` — hiển thị avatar/menu khi signed-in
- `lib/api.ts` — inject `Authorization` header từ AuthContext
- Middleware `middleware.ts` (Next.js) — protect `/history`, `/account`

**BE changes:**
- Thêm `app/middleware/auth.py` — dependency `require_user()` verify JWT qua JWKS
- Thêm `app/models/user.py` — DTO `CognitoUser(sub, email, name)`
- Áp `Depends(require_user)` lên tất cả `/upscale/*` routers
- Env mới: `COGNITO_REGION`, `COGNITO_USER_POOL_ID`, `COGNITO_CLIENT_ID`, `COGNITO_JWKS_URL`
- Cache JWKS 1h với `functools.lru_cache` + TTL

**AWS setup (out-of-code):**
- Cognito User Pool + App Client (public, no secret) với OAuth flows: `code`, scope `openid email profile`
- Google IdP federation trong User Pool (Google Cloud Console: OAuth 2.0 Client ID → paste vào Cognito)
- Callback URLs: `http://localhost:3000/auth/callback`, `https://<prod-domain>/auth/callback`
- Hosted UI domain: `<prefix>.auth.<region>.amazoncognito.com`

**Test:** Signup + Google login + gọi `/upscale/ai` với/không token.

---

### Sprint 3 — Database: RDS PostgreSQL

**Schema:**

```sql
-- users: sync từ Cognito khi đăng nhập lần đầu
CREATE TABLE users (
  id          UUID PRIMARY KEY,          -- = cognito sub
  email       TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url  TEXT,
  role        TEXT NOT NULL DEFAULT 'user',  -- user | admin
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- jobs: mỗi lần upscale = 1 row (kể cả sync)
CREATE TABLE jobs (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  method          TEXT NOT NULL,             -- ai | standard | smart | face | ai_stream
  mode            TEXT,                      -- restoration | colorization | inpainting | null
  target_resolution TEXT,                    -- 2k | 4k
  input_key       TEXT,                      -- S3 key (Sprint 4)
  output_key      TEXT,
  input_size_bytes  BIGINT,
  output_size_bytes BIGINT,
  original_wh     TEXT,                      -- "WxH"
  final_wh        TEXT,
  scale_factor    REAL,
  faces_detected  INT,
  status          TEXT NOT NULL,             -- queued | processing | success | failed
  error_message   TEXT,
  duration_ms     INT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at    TIMESTAMPTZ
);
CREATE INDEX idx_jobs_user_created ON jobs(user_id, created_at DESC);
CREATE INDEX idx_jobs_status ON jobs(status) WHERE status IN ('queued','processing');

-- usage_quota: giới hạn theo tháng
CREATE TABLE usage_quota (
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  period       DATE NOT NULL,               -- '2026-07-01'
  job_count    INT NOT NULL DEFAULT 0,
  bytes_out    BIGINT NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, period)
);
```

**BE changes:**
- Cài `sqlalchemy[asyncio]`, `asyncpg`, `alembic`
- Thêm `app/db/`:
  - `session.py` — async engine, `AsyncSession` per-request via `Depends`
  - `models.py` — SQLAlchemy ORM
  - `repositories/` — `UserRepo`, `JobRepo`, `QuotaRepo`
- Migration Alembic
- Dependency `require_user` extend: sync Cognito → row `users`, bump `updated_at`
- Mỗi router tạo `Job` row lúc bắt đầu, update `status/completed_at` lúc kết thúc
- Endpoint mới:
  - `GET /jobs?limit=20&cursor=` — lịch sử user hiện tại
  - `GET /jobs/{id}` — chi tiết
  - `DELETE /jobs/{id}` — xoá
- Env: `DATABASE_URL=postgresql+asyncpg://...`

**FE changes:**
- Trang `/history` — list jobs (paginated), preview thumbnail
- Trang `/account` — usage tháng hiện tại + quota

**AWS setup:**
- RDS PostgreSQL 16, `db.t4g.micro` (dev) / `db.t4g.small` (prod), Multi-AZ off ở dev
- Secrets Manager giữ password, IAM role EC2 read secret
- VPC private subnet, security group chỉ cho phép EC2 app SG

---

### Sprint 4 — Async Pipeline: S3 + SQS + Worker

**Tại sao:** Ảnh lớn 4K face+bg mất 15–60s. Sync request block ALB / API Gateway timeout. Tách async cho các phương thức nặng, giữ sync cho `standard` và `ai` ảnh nhỏ.

**Flow mới:**

```text
FE                             API Gateway    Lambda-create-job         S3-input    SQS      EC2-worker (ASG)   S3-output  DynamoDB
 │  POST /jobs {method,params} │              │                         │           │        │                  │          │
 ├──────────────────────────▶  ├─▶ create ──▶ │ INSERT jobs (queued)   │           │        │                  │          │
 │                             │              │ presign PUT ────────────▶           │        │                  │          │
 │  { job_id, upload_url } ◀───┤              │                         │           │        │                  │          │
 │  PUT upload_url (file)                                             │           │        │                  │          │
 │                             │              S3:ObjectCreated ────────▶ SQS       │        │                  │          │
 │                             │                                        │ ─ poll ─▶│ process (GPU)             │          │
 │                             │                                        │           │        │ PUT output ──▶  │          │
 │                             │                                        │           │        │ UPDATE jobs (success, keys) │
 │  GET /jobs/{id} (poll) or SSE /jobs/{id}/events                                                                        │
 │  { status, output_url (presigned GET) }                                                                                │
```

**BE changes:**
- Endpoint sync giữ nguyên (fallback / ảnh nhỏ)
- Endpoint async mới:
  - `POST /jobs` — validate params, tạo row `jobs (queued)`, trả `{job_id, upload_url}`
  - `GET /jobs/{id}` — read từ DB
  - `GET /jobs/{id}/events` — SSE khi status chưa terminal
- **2 chế độ chạy** cùng 1 image Docker:
  - `MODE=api` → `uvicorn app.main:app` (không cần GPU)
  - `MODE=worker` → `python -m app.worker` — long-poll SQS, dispatch theo `method`, gọi lại `ImageProcessor`/`SmartProcessor`/`FaceEnhancementService`
- `_progress_store` in-memory bị xoá, tiến độ ghi vào `jobs.progress` hoặc DynamoDB
- Weights: worker mount EFS (khuyến nghị) hoặc pre-bake vào AMI/EBS

**AWS setup:**
- S3 bucket `upscale-input-<env>` (lifecycle 7d, versioning off), `upscale-output-<env>` (lifecycle 30d)
- CloudFront distribution cho output bucket, chỉ signed URL
- SQS standard queue `upscale-jobs` + DLQ (`maxReceiveCount: 3`, retention 14d)
- Lambda `create-job` (Node/Python) — nhận API Gateway, presign PUT, insert DB
- EC2 launch template `g5.xlarge` (NVIDIA A10G, đủ cho 4K), User Data pull image từ ECR, chạy `MODE=worker`
- ASG target-tracking scale theo custom metric `ApproximateNumberOfMessagesVisible / instance` (KHÔNG dùng CPU)
- ALB chỉ cho API mode (sync endpoints), listener HTTPS

---

### Sprint 5 — Observability

- **CloudWatch Logs:** `awslogs` driver container → log group `/upscale/api`, `/upscale/worker`
- **CloudWatch Metrics:** custom metric từ `prometheus_client` bằng CloudWatch Agent (embedded metric format) — GPU utilization đọc `nvidia-smi -q -x`
- **X-Ray:** `pip install aws-xray-sdk`, `patch_all()` trong `main.py`, add middleware; propagate trace ID qua SQS message attribute
- **Alarms:**
  - SQS backlog > 20 (2 datapoints × 5 phút) → SNS
  - DLQ có message → SNS ngay
  - 5xx rate API Gateway > 1% → SNS
  - GPU util worker > 95% × 10 phút → scale-out
- **Dashboard:** 1 CloudWatch dashboard tổng: request rate, p50/p95/p99 latency (từng endpoint), queue depth, active workers, error rate, jobs/day per user (từ DB)

---

### Sprint 6 — CI/CD + Hardening

- GitHub Actions:
  - `on: push` → lint + test + docker build → push ECR (tag `sha`, `latest-dev`)
  - `on: release` → build → push ECR tag `latest-prod` → trigger CodeDeploy blue/green trên ASG
- FE: build `next start` container hoặc export static → S3 + CloudFront
- Secrets Manager cho `COGNITO_*`, `DATABASE_URL`, S3 bucket names
- WAF: rule managed AWSManagedRulesCommonRuleSet, rate-based rule 2000 req/5min per IP → **xoá** `RateLimiter` middleware trong BE
- ACM cert + Route53 record cho `api.<domain>`, `<domain>`
- IAM least-privilege:
  - EC2-worker role: `s3:GetObject upscale-input/*`, `s3:PutObject upscale-output/*`, `sqs:*Message upscale-jobs`, `rds-db:connect`, `secretsmanager:GetSecretValue`
  - Lambda create-job role: `s3:PutObject upscale-input/*` (presign only), `rds-db:connect`

---

## Phần 3 — Ma trận mapping Feature × AWS Service

| Feature | AWS service | Trạng thái | Sprint |
|---|---|---|---|
| Static FE hosting | S3 + CloudFront | ⬜ | 6 |
| DNS + TLS | Route53 + ACM | ⬜ | 6 |
| WAF | AWS WAF managed rules | ⬜ | 6 |
| API entry | API Gateway HTTP API | ⬜ | 4 |
| Sync API (small images) | ALB + EC2 GPU | ⬜ | 4 |
| Async job intake | Lambda + SQS | ⬜ | 4 |
| GPU inference worker | EC2 g5 + ASG | ⬜ | 4 |
| Auth | Cognito + Google IdP | ⬜ | 2 |
| User & job data | RDS PostgreSQL | ⬜ | 3 |
| Image storage | S3 (input + output) | ⬜ | 4 |
| Model weights | EFS mount (or bake AMI) | ⬜ | 4 |
| Secrets | Secrets Manager | ⬜ | 2+ |
| Logs | CloudWatch Logs | ⬜ | 5 |
| Metrics | CloudWatch Metrics + Prometheus | ⚠️ partial | 5 |
| Tracing | X-Ray | ⬜ | 5 |
| CI/CD | GitHub Actions + ECR + CodeDeploy | ⬜ | 6 |
| Cost control | Budgets + Cost Explorer | ⬜ | 6 |

---

## Phần 4 — Locked decisions (đã chốt)

| # | Chủ đề | Quyết định |
|---|--------|-----------|
| 1 | Tenancy | **Single-tenant, multi-user.** Chỉ dùng `user_id` (UUID từ Cognito `sub`) trên mọi bảng. Không có `tenant_id`. Nếu bán B2B sau này mới thêm `organization_id`. |
| 2 | Pricing tier | **2 tier:** `free` (10 ảnh/ngày, max 2048×2048, không dùng model `smart`) và `pro` (200 ảnh/ngày, max 4096×4096, full model, ưu tiên queue). Schema: `usage_quota(user_id, date, count, tier)`. Stripe tích hợp ở sprint sau. |
| 3 | Retention ảnh | Output — Free: **7 ngày**, Pro: **30 ngày**. Input gốc: **24h** cho mọi tier. Enforce bằng S3 Lifecycle rule theo prefix `free/` và `pro/`. |
| 4 | Model weights | **Bake vào custom AMI** tại `/opt/models/`. Update model = build AMI mới + rolling update ASG. Không dùng EFS. |
| 5 | Region | **`ap-southeast-1` (Singapore)** cho toàn bộ stack. Lý do: latency VN ~30–50ms, có sẵn `g4dn.xlarge` / `g5.xlarge`. |
| 6 | Domain | Chưa có domain thực tế — dùng placeholder cho tới khi user cung cấp: `upscale.example.com` (FE / CloudFront), `api.upscale.example.com` (BE / ALB), `auth.upscale.example.com` (Cognito Hosted UI). Cognito callback: `https://upscale.example.com/auth/callback`. Giai đoạn dev dùng subdomain Lovable + Cognito mode dev, migrate khi có domain. |
| 7 | i18n | **Không cần cho MVP.** Giữ tiếng Việt hardcode nhưng gom string vào `messages/vi.ts` để dễ gắn `next-intl` sau. |

### Hệ quả cần cập nhật trong các sprint

- **Sprint 2 (Auth):** Cognito User Pool tạo ở `ap-southeast-1`, callback URL dùng placeholder domain, lưu `tier='free'` mặc định khi user signup.
- **Sprint 3 (DB):** Bảng `users(id, email, tier, created_at)`, `jobs(id, user_id, ...)`, `usage_quota(user_id, date, count, tier)` — tất cả không có `tenant_id`.
- **Sprint 4 (Async):** S3 bucket layout `s3://upscale-input/{user_id}/...` với Lifecycle 24h; `s3://upscale-output/{tier}/{user_id}/...` với Lifecycle 7d cho prefix `free/`, 30d cho `pro/`.
- **Sprint 5 (Infra):** Packer/EC2 Image Builder pipeline để bake AMI với weights Real-ESRGAN + GFPGAN + CodeFormer. ASG dùng launch template trỏ tới AMI ID mới nhất.
- **Middleware BE:** Trước mỗi request `/upscale/*`, check `usage_quota` + validate `max_dimension` theo tier; reject với 429 nếu vượt.

