---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives

- As lead, coordinate FE and BE so the real upload flow ships this week: drop a photo, see preview and progress, get back a job id.
- Set the acceptance bar for the /upload endpoint (validation + stable job id) and review PRs against it.
- Get the "how upload works" note written and merged so any newcomer can trace a request end to end.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Review the dropzone PR (file picker, thumbnail preview, progress bar) and pair on UX edge cases. | 08/06/2026 | 08/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Tue | Sit with FE to lock size/MIME validation rules and disable-submit behavior, sign off on the PR. | 09/06/2026 | 09/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Wed | Review the FastAPI /upload PR: multipart parsing, server-side re-validation, temp storage layout. | 10/06/2026 | 10/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Thu | Facilitate the FE/BE contract meeting, lock multipart field names and update the shared doc myself. | 11/06/2026 | 11/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Drive end-to-end testing with the team: large photo, mid-flight cancel, retry, wrong file type. | 12/06/2026 | 12/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |

### Week 8 Results

- The full pick-preview-upload-progress-jobId flow ships on schedule with no scope slip.
- Server-side validation, which I insisted on as a review rule, caught cases a tweaked DOM slipped past.
- The upload doc gets merged, and a new joiner can trace a request end to end in about ten minutes.

### Challenges & Lessons Learned

- **Challenge:**
  - One teammate pushed to skip server-side validation because "the client already checks", a fast path to a production bug.
- **Solution:**
  - Returned the PR with a curl command that bypasses client checks and held the line on the server-side rule.
- **Lesson:**
  - Part of leading is enforcing non-negotiables even when they slow a PR by a day.

### Plan for Next Week

- Wire Real-ESRGAN and CodeFormer behind a single enhance() function.
- Prepare a small eval set to catch regressions early.
- Lock the CPU-in-dev, GPU-on-AWS decision and record it in project notes.
