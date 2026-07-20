---
title : "Introduction"
date : 2024-01-01 
weight : 1 
chapter : false
pre : " <b> 5.1. </b> "
---

#### What is a VPC endpoint

A VPC endpoint is a managed virtual device that is horizontally scaled, redundant, and highly available. It lets resources in your VPC (EC2, Lambda, containers, …) talk directly to AWS services without going through an Internet Gateway or NAT, and without you having to worry about the endpoint's own availability.

For Amazon S3 there are two options: a **Gateway endpoint** for resources running inside the VPC, and an **Interface endpoint** (PrivateLink) that also serves on-premises resources connecting in via VPN or Direct Connect.

#### Workshop overview

The workshop provisions two VPCs to mimic a typical hybrid setup:

+ **"VPC Cloud"** holds the cloud-side resources: the VPC endpoints and an EC2 instance used for testing.
+ **"VPC On-Prem"** plays the role of an on-premises data center or factory. It contains an EC2 instance running strongSwan VPN, pre-configured to bring up a Site-to-Site VPN tunnel to an AWS Transit Gateway. That tunnel simulates connectivity from an on-premises location to the AWS cloud.

To keep costs down, only a single VPN instance is provisioned. For real production workloads AWS recommends running multiple VPN devices in parallel to keep the connection highly available.

![overview](/images/5-Workshop/5.1-Workshop-overview/diagram1.png)
