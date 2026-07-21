---
title: "Week 3 Worklog"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 1.3. </b> "
---

### Week 3 Objectives

- Use IAM Roles to allow EC2 to access AWS services securely, without hardcoded keys.
- Get familiar with AWS Cloud9 as a browser-based development environment.
- Deploy a Static Website on Amazon S3 and verify public accessibility.

### Tasks Completed During the Week

| Day | Task | Start | Completion | Reference Material |
| --- | --- | --- | --- | --- |
| Mon | Learn IAM Roles for EC2 and attach an IAM Role to an EC2 instance for secure service access. | 01/05/2026 | 01/05/2026 | [IAM Roles for EC2](https://000048.awsstudygroup.com/) |
| Tue | Create an AWS Cloud9 environment and explore the cloud-based development workspace. | 04/05/2026 | 04/05/2026 | [AWS Cloud9](https://000049.awsstudygroup.com/) |
| Wed | Practice coding, running commands, and managing files in AWS Cloud9. | 05/05/2026 | 05/05/2026 | [Cloud9 Usage](https://000049.awsstudygroup.com/) |
| Thu | Create an Amazon S3 bucket, configure Static Website Hosting, and upload website files. | 06/05/2026 | 06/05/2026 | [S3 Static Website](https://000057.awsstudygroup.com/) |
| Fri | Test website accessibility, configure bucket permissions, and verify successful deployment. | 07/05/2026 | 07/05/2026 | [S3 Permissions](https://000057.awsstudygroup.com/) |

### Week 3 Achievements

- Attached an IAM Role to an EC2 instance, allowing it to access AWS services without embedding credentials.
- Set up an AWS Cloud9 environment and practiced coding directly in the browser.
- Successfully deployed a Static Website on S3 with public access.
- Understood Bucket Policy and Public Access Block for S3 hosting.

### Challenges & Lessons Learned

- **Challenge:**
  - Configuring an S3 bucket for public static hosting requires disabling Block Public Access and writing a proper Bucket Policy — easy to mis-configure security.
- **Solution:**
  - Follow the awsstudygroup lab exactly, only open the permissions strictly required for the static site, and re-check the Bucket Policy after deploying.
- **Lesson:**
  - S3 is powerful but sensitive to permissions — always double-check the settings before making a bucket public.

### Plan for Next Week

- Continue with S3 topics: versioning, lifecycle, and encryption.
- Explore CloudFront to deliver a static website through a CDN.
- Start integrating AWS services into a small end-to-end demo.
