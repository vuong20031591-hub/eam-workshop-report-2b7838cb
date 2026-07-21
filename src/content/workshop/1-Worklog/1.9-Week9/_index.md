---
title: "Week 9 Worklog"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

## WEEK 9 WORKLOG

Model integration week. Wiring Real-ESRGAN and CodeFormer into the backend so an uploaded photo actually comes back sharper. `UPS-9` on Linear.

I did the research half. Real-ESRGAN handles the general upscaling, CodeFormer is stronger on faces, and running them one after the other is a reasonable pipeline for our use case. I set up both locally, ran them on a small test set, and eyeballed the outputs to check they were doing what the papers claim. Some of the marketing shots are cherry-picked, so it was worth confirming on our own images.

On the integration side I paired with the person owning the inference module. We wrapped both models behind a single `enhance(image)` function so the rest of the backend does not care which model ran, and added a params object for the knobs that matter (upscale factor, face restore on/off, fidelity weight for CodeFormer).

The awkward part of the week was performance. Running both models on CPU is painfully slow, slow enough that a single request would time out over the current setup. We agreed to keep it CPU for now in dev, and to move to GPU only when we get to the AWS phase. I wrote that decision into the project notes so it does not become an argument later.

I also put together a small internal eval set (twenty photos of different sizes, some with faces, some without) and a script that runs the pipeline on all of them and dumps the outputs into a folder. It is not a benchmark, but it catches regressions.

Next week: dockerize everything and get it running on ECS/Fargate with S3.
