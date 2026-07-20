---
title: "Workshop"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Secure Hybrid Access to S3 using VPC Endpoints

#### Overview

AWS PrivateLink lets workloads inside a VPC — or in your on-premises data center — reach AWS services without traffic ever crossing the public Internet. It's the go-to option when you need to keep traffic on a private network, reduce the risk of data exfiltration, and avoid depending on NAT or Internet Gateways.

In this lab you'll build, configure, and test two flavors of VPC endpoint for Amazon S3:

+ **Gateway endpoint** — available for S3 and DynamoDB. Traffic from the VPC reaches the endpoint through route tables; there are no ENIs to manage and no hourly cost.
+ **Interface endpoint** — an ENI-based endpoint with a private IP in your subnet. It works for resources inside the VPC and for callers coming in from on-premises via Site-to-Site VPN or Direct Connect. Clients resolve the service name via DNS to the ENI's IP.

Which one you pick depends on where the traffic originates: if it stays inside the VPC, a Gateway endpoint is the simple, free option; if it comes from on-premises or a peered VPC, you need an Interface endpoint.

#### Content

1. [Workshop overview](5.1-Workshop-overview/)
2. [Prerequisite](5.2-Prerequiste/)
3. [Access S3 from VPC](5.3-S3-vpc/)
4. [Access S3 from On-premises](5.4-S3-onprem/)
5. [VPC Endpoint Policies (Bonus)](5.5-Policy/)
6. [Clean up](5.6-Cleanup/)
