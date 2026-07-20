---
title : "Clean up"
date : 2024-01-01
weight : 6
chapter : false
pre : " <b> 5.6. </b> "
---

Congratulations on finishing the workshop! Across the previous sections we walked through two architecture patterns for reaching Amazon S3 without the public Internet:

+ A **Gateway endpoint** let EC2 in the VPC talk directly to S3, with no Internet Gateway involved.
+ An **Interface endpoint** extended that same private reachability to workloads sitting in an on-premises data center, connected to AWS through Site-to-Site VPN or Direct Connect.

#### Clean up

1. Open the **Route 53 console → Hosted Zones**, click into the `s3.us-east-1.amazonaws.com` zone, choose **Delete**, and type `delete` to confirm.

   ![hosted zone](/images/5-Workshop/5.6-Cleanup/delete-zone.png)

2. In Route 53 Resolver, disassociate the resolver rule `myS3Rule` from "VPC On-prem" and then delete the rule.

   ![hosted zone](/images/5-Workshop/5.6-Cleanup/vpc.png)

3. Open the **CloudFormation console** and delete the two stacks created for this lab:
    + `PLOnpremSetup`
    + `PLCloudSetup`

   ![delete stack](/images/5-Workshop/5.6-Cleanup/delete-stack.png)

4. Delete the S3 buckets created during the lab:
    + Open the S3 console.
    + For each bucket, click **Empty** to remove the objects inside, then click **Delete** and confirm.

   ![delete s3](/images/5-Workshop/5.6-Cleanup/delete-s3.png)
