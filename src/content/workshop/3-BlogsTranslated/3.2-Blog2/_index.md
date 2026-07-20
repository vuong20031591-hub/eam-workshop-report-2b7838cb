---
title: "Blog 2"
date: 2026-05-07
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# The AWS Service Trio in Architecture

### Article Title

**The AWS Service Trio in Architecture — VPC, EC2, and EFS**

### Content Summary

The architecture in the diagram uses three core AWS services — **Amazon VPC**, **Amazon EC2**, and **Amazon Elastic File System (EFS)** — to build a secure, flexible, and highly available system.

![VPC, EC2, and EFS architecture diagram](/images/blog2/vpc-ec2-efs-architecture.png)

### Main Content

#### Amazon VPC (Virtual Private Cloud)

Amazon VPC acts as a virtual private network that isolates and protects all resources in AWS. Inside the VPC, the system is divided into multiple subnets spread across different Availability Zones, improving fault tolerance and network traffic management.

#### Amazon EC2 (Elastic Compute Cloud)

Amazon EC2 provides virtual servers that run applications and handle user requests. Deploying multiple EC2 instances across Availability Zones keeps the system running even when one zone fails, while making it easier to scale as demand grows.

#### Amazon Elastic File System (EFS)

Amazon EFS is a shared file storage service for multiple EC2 instances. Through Mount Targets placed in each Availability Zone, EC2 servers can access the same data source, ensuring consistency and eliminating the need to replicate data between servers.

### Conclusion

The combination of VPC, EC2, and EFS creates a highly scalable architecture with centralized shared data, strong availability, and straightforward management. This pattern is commonly used for web applications, enterprise systems, and platforms where many servers need access to the same shared data.
