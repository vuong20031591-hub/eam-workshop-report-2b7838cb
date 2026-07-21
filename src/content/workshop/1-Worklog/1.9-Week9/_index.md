---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives

- Wire Real-ESRGAN for upscaling and CodeFormer for face restoration into one pipeline.
- Wrap the pipeline behind enhance(image, params) so the rest of the backend does not care which model ran.
- Have a small internal eval set to measure quality and catch regressions early.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Install and run Real-ESRGAN locally on several photos and compare against the originals. | 15/06/2026 | 15/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| Tue | Install CodeFormer and try different fidelity weights on face photos. | 16/06/2026 | 16/06/2026 | [CodeFormer](https://github.com/sczhou/CodeFormer) |
| Wed | Wrap both models behind enhance(image, params) with knobs for upscale factor and face restore. | 17/06/2026 | 17/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Thu | Build a 20-image eval set and a script that runs the pipeline and dumps outputs to a folder. | 18/06/2026 | 18/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Time everything on CPU and commit to CPU-in-dev, GPU-on-AWS as the plan. | 19/06/2026 | 19/06/2026 | [Amazon EC2 GPU](https://000004.awsstudygroup.com/) |

### Week 9 Results

- The pipeline runs end to end on the test images and outputs are clearly better than inputs.
- enhance() has a tight interface, ready to be packaged into a worker next week.
- The small eval set immediately caught a default someone flipped by accident.

### Challenges & Lessons Learned

- **Challenge:**
  - CPU is slow enough that a single request would time out under the current setup.
- **Solution:**
  - Accept CPU in dev to avoid burning money, push the GPU switch to the AWS phase, and write that call into project notes.
- **Lesson:**
  - Some trade-offs are worth locking in writing early instead of re-arguing every week.

### Plan for Next Week

- Dockerize FE, BE and the worker.
- Deploy to ECS Fargate with S3 for staging.
- Plan the eventual switch of the pipeline onto GPU.
