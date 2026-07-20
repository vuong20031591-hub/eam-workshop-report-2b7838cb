---
title : "Access S3 from on-premises"
date : 2024-01-01
weight : 4
chapter : false
pre : " <b> 5.4. </b> "
---

#### Overview

In this section you'll create an Interface endpoint so that resources in the simulated on-premises environment ("VPC On-prem") can reach Amazon S3 over the VPN tunnel, again without touching the public Internet.

Why an Interface endpoint and not a Gateway one:

+ Gateway endpoints only serve traffic originating from the VPC where they live. Requests coming in from on-premises, or from a peered VPC, cannot use them.
+ Interface endpoints are ENI-based with private IPs in your subnets, so external callers reaching in over Site-to-Site VPN or Direct Connect can resolve and hit the service just like a local client.
+ Interface endpoints run on AWS PrivateLink, which also fronts a wide catalog of services: several AWS services, PrivateLink Endpoint Services published by other AWS customers and partners from their own VPCs, and supported AWS Marketplace offerings. For this workshop we focus on the S3 case.

![Interface endpoint architecture](/images/5-Workshop/5.4-S3-onprem/diagram3.png)
