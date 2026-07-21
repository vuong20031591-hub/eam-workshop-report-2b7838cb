---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Week 8 Objectives

- Build the image upload UI and integrate the upload API on the frontend.
- Develop backend APIs for image upload and storage management.
- Perform integration testing and fix upload workflow issues.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference Material |
| --- | --- | --- | --- | --- |
| Mon | Develop the image upload interface and configure file validation on the frontend. | 08/06/2026 | 08/06/2026 | [TanStack Router](https://tanstack.com/router) |
| Tue | Implement API integration for image upload and display processing status. | 09/06/2026 | 09/06/2026 | [TanStack Router](https://tanstack.com/router); [FastAPI](https://fastapi.tiangolo.com/) |
| Wed | Develop backend APIs for image upload and storage management. | 10/06/2026 | 10/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Thu | Implement image management, error handling, and request validation. | 11/06/2026 | 11/06/2026 | [FastAPI](https://fastapi.tiangolo.com/) |
| Fri | Perform integration testing and fix upload workflow issues. | 12/06/2026 | 12/06/2026 | [TanStack Router](https://tanstack.com/router); [FastAPI](https://fastapi.tiangolo.com/) |

### Week 8 Achievements

- Completed the image upload interface with client-side validation.
- Backend upload and storage management APIs work end-to-end with the frontend.
- Fixed key issues in the upload workflow through integration testing.

### Challenges & Lessons Learned

- **Challenge:**
  - Handling large image uploads and validating file type/size consistently on both sides.
- **Solution:**
  - Apply strict validation on the frontend and re-validate on the backend, plus clear error messaging.
- **Lesson:**
  - Duplicating validation on both frontend and backend improves security and UX.

### Plan for Next Week

- Integrate Real-ESRGAN and CodeFormer AI models into the backend.
- Optimize inference pipeline and validate output quality.
- Test AI enhancement results across multiple image types.
