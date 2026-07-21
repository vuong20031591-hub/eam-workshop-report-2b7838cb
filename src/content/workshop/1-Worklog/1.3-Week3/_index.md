---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Week 3 Objectives

- Attach an IAM Role to EC2 in place of an access key and verify the SDK picks it up.
- Try Cloud9 to see whether it earns a slot next to VS Code.
- Ship a static site on S3 with just enough public access, not a wide-open bucket.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference |
| --- | --- | --- | --- | --- |
| Mon | Create an IAM Role for EC2 with a minimal policy, attach via an instance profile. | 04/05/2026 | 04/05/2026 | [IAM Roles for EC2](https://000005.awsstudygroup.com/) |
| Tue | Run the AWS CLI on the instance and confirm credentials come from the role. | 05/05/2026 | 05/05/2026 | [IAM Roles for EC2](https://000005.awsstudygroup.com/) |
| Wed | Open Cloud9 and write a small Python script that reads from S3. | 06/05/2026 | 06/05/2026 | [AWS Cloud9](https://000006.awsstudygroup.com/) |
| Thu | Create an S3 website bucket, upload index.html and assets, enable Static Website Hosting. | 07/05/2026 | 07/05/2026 | [S3 Static Website](https://000010.awsstudygroup.com/) |
| Fri | Write a minimal public-read Bucket Policy and disable the right layer of Block Public Access. | 08/05/2026 | 08/05/2026 | [S3 Static Website](https://000010.awsstudygroup.com/) |

### Week 3 Results

- The EC2 uses a role instead of a key, so credentials no longer sit on disk.
- Cloud9 works, but I still lean on VS Code for real work.
- Static site has a URL and opens with the content I expected.
- Now I understand why Block Public Access exists and when disabling it is defensible.

### Challenges & Lessons Learned

- **Challenge:**
  - The bucket kept returning 403 even after the policy was in place; I forgot Block Public Access was still on at the account layer.
- **Solution:**
  - Separate the layers, account, bucket and object, then flip one at a time and re-test.
- **Lesson:**
  - AWS default guardrails are usually on my side; disabling one needs a reason, not habit.

### Plan for Next Week

- RDS: bring up a small Postgres and reach it from an EC2 in the same VPC.
- Try Lightsail to see how the experience differs from EC2.
- Read up on backups and snapshots ahead of time.
