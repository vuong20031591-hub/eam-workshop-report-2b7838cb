---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Week 9 Objectives

- As lead, steer the ML pair toward one pipeline that combines Real-ESRGAN and CodeFormer instead of two parallel efforts.
- Lock the enhance(image, params) contract so the rest of the backend stays decoupled from model choice.
- Set up a small internal eval set so regressions get caught in review, not in demo.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Review the Real-ESRGAN spike, compare outputs against originals with the ML owner. | 15/06/2026 | 15/06/2026 | [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) |
| Tue | Pair on CodeFormer fidelity weights on face photos and pick sensible defaults together. | 16/06/2026 | 16/06/2026 | [CodeFormer](https://github.com/sczhou/CodeFormer) |
| Wed | Design and sign off the enhance(image, params) interface with upscale factor and face-restore knobs. | 17/06/2026 | 17/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Thu | Curate the 20-image eval set myself and review the runner script that dumps outputs to a folder. | 18/06/2026 | 18/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Run CPU timings with the team and make the call: CPU-in-dev, GPU-on-AWS, written into project notes. | 19/06/2026 | 19/06/2026 | [Amazon EC2 GPU](https://000004.awsstudygroup.com/) |

### Week 9 Results

- The pipeline runs end to end on the test images and outputs are visibly better than inputs.
- enhance() has a tight interface everyone agreed on, ready to be packaged into a worker next week.
- The eval set I curated caught a default flipped by accident the day after we set it up.

### Challenges & Lessons Learned

- **Challenge:**
  - CPU is slow enough that a single request would time out, and the team wanted to jump on GPU immediately.
- **Solution:**
  - I chose to accept CPU in dev to avoid burning money, pushed the GPU switch to the AWS phase, and wrote the call into project notes.
- **Lesson:**
  - A lead's job is sometimes to lock a trade-off in writing so the team stops re-arguing it every standup.

### Plan for Next Week

- Dockerize FE, BE and the worker.
- Deploy to ECS Fargate with S3 for staging.
- Plan the eventual switch of the pipeline onto GPU.
