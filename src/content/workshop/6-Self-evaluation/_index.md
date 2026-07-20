---
title: "Self-Assessment"
date: 2024-01-01
weight: 6
chapter: false
pre: " <b> 6. </b> "
---

The Upscale AI workshop took me longer than planned. I budgeted four weeks of building; it turned into closer to six, mostly because Real-ESRGAN on GPU behaves differently once it has to share EFS and Redis with the rest of a real system. I ended with an ECS on EC2 setup that runs end to end, a queue that survives a killed worker, and a much clearer sense of why serverless was the wrong first instinct.

Along the way I did most things through the AWS Console before scripting them. Slower at the start, but the pieces stuck. I kept a worklog every week, even in weeks I did not want to write anything.

To be honest about where I landed:

| No. | Criteria | Description | Good | Fair | Average |
| --- | --- | --- | --- | --- | --- |
| 1 | Technical knowledge | AWS core services, container basics, applying them to a real project | ✅ | ☐ | ☐ |
| 2 | Learning speed | Picking up new services (ECS, EFS, Cognito) and integrating them | ☐ | ✅ | ☐ |
| 3 | Initiative | Deciding what to build next without waiting for a checklist | ✅ | ☐ | ☐ |
| 4 | Responsibility | Finishing what I started and cleaning up resources afterwards | ✅ | ☐ | ☐ |
| 5 | Discipline | Keeping a steady schedule and closing what I opened | ☐ | ☐ | ✅ |
| 6 | Openness to feedback | Rewriting the architecture when it clearly was not working | ☐ | ✅ | ☐ |
| 7 | Written communication | Explaining decisions in the worklog and proposal | ☐ | ✅ | ☐ |
| 8 | Working with others | Asking for help early, giving useful help back | ✅ | ☐ | ☐ |
| 9 | Professional conduct | Handling credentials and shared resources responsibly | ✅ | ☐ | ☐ |
| 10 | Problem solving | Diagnosing failures instead of guessing at them | ☐ | ✅ | ☐ |
| 11 | Contribution to the project | Shipping a system that actually runs end to end | ✅ | ☐ | ☐ |
| 12 | Overall | Assessment of the whole workshop | ✅ | ☐ | ☐ |

### Where I want to improve

Cost discipline is the first thing. I forgot a NAT Gateway running over a weekend and it made a small but embarrassing dent in the bill. I now tag everything on day one and set a budget alarm before creating the first resource.

My debugging still starts too deep in the stack. When an ECS task fails to start I open logs before checking IAM and networking, which are the two things that break first. I want the habit of walking the layers top down before opening CloudWatch.

Written explanations for non-technical readers are still weak. The proposal reads fine to another engineer, less fine to anyone who does not already know what a target group is. Next iteration I want to lead with the outcome and push the plumbing into an appendix.
