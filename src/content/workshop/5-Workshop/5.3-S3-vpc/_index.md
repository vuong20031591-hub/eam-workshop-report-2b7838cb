---
title : "Access S3 from VPC"
date : 2024-01-01
weight : 3
chapter : false
pre : " <b> 5.3. </b> "
---

#### Using a Gateway endpoint

In this section you'll create a Gateway endpoint so that an EC2 instance inside the VPC can upload objects to S3 without going through the public Internet. Creating the endpoint only takes two pieces of information: which VPC to attach it to, and which service to reach — S3 in this case.

![overview](/images/5-Workshop/5.3-S3-vpc/diagram2.png)

#### Content

- [Create gateway endpoint](3.1-create-gwe/)
- [Test gateway endpoint](3.2-test-gwe/)
