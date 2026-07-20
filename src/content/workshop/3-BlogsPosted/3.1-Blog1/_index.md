---
title: "Blog 1"
date: 2026-06-11
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Overall Architecture — AI Image Upscaling

### Article Title

**Overall Architecture — AI Image Upscaling on AWS**

### Content Summary

**Goal:** An image upscaling API service using AI (Real-ESRGAN) and a traditional method (LANCZOS), optimized for GPU to achieve high quality and strong performance.

![AI Image Upscaling architecture diagram](/images/blog1/ai-image-upscaling-architecture.png)

### Core Architecture

**Frontend Layer**
- CDN and static hosting (CloudFront / Amplify) with edge WAF for protection and fast content delivery.

**Backend API Layer**
- Lightweight API (FastAPI) to receive files, validate input, and return results and metadata.
- Placed behind an Application Load Balancer for flexible scaling.

**AI Processing Layer**
- Deep learning models on GPU (SageMaker / EC2 GPU / AMI).
- Specialized modules for face enhancement (GFPGAN) and image restoration (CodeFormer).

**Orchestration & Queue**
- Job queue (SQS) orchestrates heavy asynchronous tasks.
- Supports retry and load balancing across AI workers.

**Storage & Cache**
- Object storage (S3) for input images and outputs.
- Database (DynamoDB) for metadata and job status.
- Cache (ElastiCache) for popular results to reduce latency.

**Monitoring & Security**
- Logging and metrics (CloudWatch) for operations.
- Secrets management (Secrets Manager) for credentials and API keys.

### Key Points

#### Main Design Decisions

- Separate API and AI workloads for independent scaling (small API instances, GPU-backed AI tier).
- Queue-driven processing for heavy tasks to absorb spikes and improve resilience.
- Preload models when possible to reduce first-request latency; lazy-load when needed.
- FP16 and tile-based processing to lower GPU memory use and safely handle large images.
- Return rich metadata (face count, processing time, suggested mode) for a better frontend experience.

#### Advantages

- Flexible and straightforward to deploy on cloud.
- Clear separation of concerns and cost optimization (scale GPU on demand).
- Better UX through metadata and suggested processing modes.

#### Risks & Suggested Improvements

- **Model download / OOM:** add retry logic, alerting, and fallback strategies (smaller tiles / lower precision).
- **High GPU cost:** autoscale on queue depth; consider Spot instances.
- **Latency optimization:** cache results; return pre-signed S3 URLs instead of streaming through the API.

### Conclusion

The architecture balances image quality and operability — suitable for cloud deployment, easy to extend, with clear improvement paths for performance and cost.
