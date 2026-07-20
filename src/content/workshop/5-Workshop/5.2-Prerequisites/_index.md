---
title: "5.2 - Prerequisites"
date: 2026-07-18
weight: 12
chapter: false
pre: "<b>5.2. </b>"
---

## Overview

Set up your AWS environment: create an account, configure an IAM admin user, and verify console access.

---

## Step 1: Create AWS Account

1. Go to [https://aws.amazon.com](https://aws.amazon.com)
2. Click **"Create an AWS Account"**
3. Complete registration (email, password, payment, identity verification)
4. Choose **Basic Support Plan** (free)

---

## Step 2: Create IAM Admin User

Never use root for daily work.

1. Search **IAM** in the AWS Console → open it

![5.2.1](/images/5-Workshop/5.2.1.png)
2. Left sidebar → **Users** → **"Create user"**

![5.2.2](/images/5-Workshop/5.2.2.png)![5.2.3](/images/5-Workshop/5.2.3.png)
3. Username: `upscale-deployer`

![5.2.4](/images/5-Workshop/5.2.4.png)
4. **Attach policies directly** → search `AdministratorAccess` → check it

![5.2.5](/images/5-Workshop/5.2.5.png)
5. **Next** → **Create user**

![5.2.6](/images/5-Workshop/5.2.6.png)

### Enable Console Access

1. Click `upscale-deployer` → **"Security credentials"** tab

![5.2.7](/images/5-Workshop/5.2.7.png)![5.2.8](/images/5-Workshop/5.2.8.png)
2. **Console access** → **"Enable"**

![5.2.9](/images/5-Workshop/5.2.9.png)
3. Set custom password, uncheck "must create new password at next sign-in"
4. **Apply**

![5.2.10](/images/5-Workshop/5.2.10.png)
5. **Save the sign-in URL** (e.g., `https://123456789.signin.aws.amazon.com/console`)

![5.2.11](/images/5-Workshop/5.2.11.png)

---

## Step 3: Sign In as IAM User

1. Sign out of root
2. Go to the IAM sign-in URL
3. Log in with `upscale-deployer` credentials

---

## Step 4: Select Region

All resources go in **ap-southeast-1**:

1. Top-right corner → click region dropdown
2. Select **Asia Pacific (Singapore) ap-southeast-1**

---

## Summary

| Item | Value |
|------|-------|
| IAM User | `upscale-deployer` with AdministratorAccess |
| Region | ap-southeast-1 (Singapore) |
| CLI Required | No |

> **Next**: [5.3 - Infrastructure](../5.3-infrastructure/)
