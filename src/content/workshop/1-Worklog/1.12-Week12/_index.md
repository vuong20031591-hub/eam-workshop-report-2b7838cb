---
title: "Week 12 Worklog"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

## WEEK 12 WORKLOG

Last week. Final testing, documentation, and the demo. `UPS-12` on Linear.

I ran the app through a proper end-to-end pass on a fresh browser and a fresh account: sign up, upload, wait for the job, download the result. Wrote down every place I hesitated as a bug, even if the app worked, because "worked, but I paused" is a UX bug I want caught before the demo, not during. Most of them turned out to be small copy fixes and one real bug where a failed job never cleared its Redis key.

I chaired a triage on the findings and split them into "must fix before demo" and "nice to have later". The must-fix pile was smaller than I feared, which was a nice surprise for a Friday.

On the documentation side I updated the README so someone new can clone the repo, follow the steps in order, and get a running local stack without asking anyone. Also wrote a short architecture note explaining why the pieces exist, not just what they are, because the "why" is what people forget first.

Demo day itself went fine. Not spotless, but the app did the thing it is supposed to do in front of people who had not seen it before, and the questions afterwards were about product, not about "why did it crash". I take that as a win.

End of the internship. If I did it again I would start the async plumbing earlier, because that was the change that made the app feel real. Wrote that into the final report as the one recommendation I would actually stand behind.
