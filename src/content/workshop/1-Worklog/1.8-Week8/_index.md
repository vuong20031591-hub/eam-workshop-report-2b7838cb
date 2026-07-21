---
title: "Week 8 Worklog"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

## WEEK 8 WORKLOG

Upload flow week. Building the actual "user drops a photo, backend receives it" path front to back. `UPS-8` on Linear.

I spent most of the week on the frontend upload UI. Drag-and-drop area, file picker fallback, preview thumbnail, validation for size and MIME type, and a small progress bar for when the upload is in flight. Nothing fancy visually, but I wanted the interaction to feel right before we bolted anything expensive behind it. I paired for a couple of hours on the backend side to make sure the FastAPI `/upload` endpoint agreed with the frontend on multipart form field names, because that mismatch would waste half a day if we found it later.

On the backend the endpoint validates the file, stores it in a local temp folder for now (S3 comes later, in the AWS phase), and returns a job id the frontend can hold on to. I kept the validation server-side even though the client already checks, because trusting the client is how you find out about bugs in production.

I also wrote a short "how the upload works" note in the repo so anyone new to the project can trace one request end to end without reading the code cold.

On the team side, one thing I had to push on: someone wanted to skip server-side validation because "the client already does it". Sent the PR back with a comment.

End of the week: a user can pick a photo, see it preview, hit upload, and the backend answers with a job id. No AI yet, but the plumbing is in place.

Next week: integrate Real-ESRGAN and CodeFormer.
