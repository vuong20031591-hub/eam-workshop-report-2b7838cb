---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives

- Ship a real upload flow: user drops a photo, sees preview, sees progress, gets back a job id.
- A FastAPI /upload endpoint that validates the file and returns a stable job id.
- A 'how upload works' note short enough for a newcomer to read once and get it.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Build the dropzone with file picker, thumbnail preview and an in-flight progress bar. | 08/06/2026 | 08/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Tue | Validate size and MIME client-side and disable the submit button on failure. | 09/06/2026 | 09/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Wed | FastAPI /upload accepts multipart, re-validates size and MIME, and stores the file temporarily. | 10/06/2026 | 10/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Thu | Agree on multipart field names between FE and BE and put them in the doc. | 11/06/2026 | 11/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | End-to-end tests with a large photo, mid-flight cancel, retry, and a wrong file type. | 12/06/2026 | 12/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Week 8 Results

- Pick photo, preview, upload, watch progress, get a job id, all working end to end.
- Server-side validation caught cases that a tweaked DOM slipped past on the client.
- The upload doc lets a new teammate trace a request end to end in about ten minutes.

### Challenges & Lessons Learned

- **Challenge:**
  - One teammate wanted to skip server-side validation because 'the client already checks' — a fast path to a production bug.
- **Solution:**
  - Returned the PR with a curl command that bypasses client checks and kept the server-side rule.
- **Lesson:**
  - Trusting the client is the fastest way to find a bug after users find it first.

### Plan for Next Week

- Wire Real-ESRGAN and CodeFormer behind a single enhance() function.
- Prepare a small eval set to catch regressions early.
- Lock the CPU-in-dev, GPU-on-AWS decision and record it in project notes.
