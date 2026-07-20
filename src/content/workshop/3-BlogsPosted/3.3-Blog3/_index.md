---
title: "Blog 3"
date: 2026-06-20
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# Serverless Architecture on AWS

### Article Title

**Serverless Architecture on AWS — Building a Book Management Application Without Servers**

### Content Summary

The system in the diagram is built using a **Serverless** model on the AWS platform, combining **Amazon S3**, **Amazon API Gateway**, **AWS Lambda**, and **Amazon DynamoDB** services. This model enables the application to operate flexibly, automatically scale with traffic, and reduce operational costs by eliminating server management.

![Serverless Architecture Diagram](/images/blog3/serverless-architecture.png)

### Main Content

#### Amazon S3 - Static Website Hosting

First, users access the website hosted as a **Static Website** on **Amazon S3**. S3 not only stores the user interface (HTML, CSS, JavaScript) but also serves as a hosting platform with fast content delivery and low cost. After the interface loads, all operations such as viewing the book list, adding new books, or deleting books are sent to the API layer.

#### Amazon API Gateway - API Communication Gateway

**Amazon API Gateway** acts as a bridge between the user interface and backend processing functions. This service receives HTTP requests from users, routes them to the appropriate Lambda function, and returns results. API Gateway also provides security features, throttling, and automatic log monitoring.

#### AWS Lambda - Business Logic Processing

Each request is forwarded to a corresponding **AWS Lambda**:

- **GET /books** → calls the `list_books` function to retrieve the book list from **Amazon DynamoDB**
- **POST /books** → calls the `create_book` function to add a new book to the database
- **DELETE /books/:id** → calls the `delete_book` function to delete a book by ID

Lambda only runs when there's a request, optimizing costs as you only pay for actual execution time. Moreover, Lambda automatically scales with the number of requests without manual configuration.

#### Amazon DynamoDB - NoSQL Database

**Amazon DynamoDB** is a fully managed NoSQL database that stores book information in the **Books table**. DynamoDB provides high performance, low latency, and automatic scaling, making it ideal for serverless applications requiring fast data access.

#### Automatic Image Processing

For images, when a user uploads a new file, the image is saved to an **S3 Bucket** containing raw images (store raw file). This event automatically triggers the **Lambda resize_image** function, which resizes and optimizes the image before saving it to another **S3 Bucket** dedicated to processed images (store resized file).

This event-driven mechanism is fully automatic, requiring no manual intervention, helping the website load faster and optimizing storage capacity. This is especially useful when displaying thumbnails or responsive images for different devices.

### Advantages of Serverless Architecture

#### 1. No Server Management

You don't have to worry about installing, updating, or maintaining servers. AWS automatically handles all infrastructure issues.

#### 2. Automatic Scaling

The system automatically scales up when there are many users and scales down when traffic decreases, ensuring optimal performance without wasting resources.

#### 3. Cost Savings

Pay only for what you use - the number of Lambda invocations, actual DynamoDB capacity, and S3 bandwidth. No costs for idle servers.

#### 4. Fast Development Speed

Developers can focus on business logic code instead of worrying about infrastructure, helping bring products to market faster.

#### 5. High Reliability

Each AWS service has a high SLA and is replicated across multiple Availability Zones, ensuring the system is always available.

### Conclusion

Overall, Serverless architecture maximizes AWS managed services to build a modern system with high scalability, easy maintenance, and suitability for web applications requiring automatic data and image processing.

This model is particularly suitable for:
- Startups and small projects with limited budgets
- Applications with uneven traffic patterns
- Systems requiring rapid development and deployment
- Event-driven use cases like file upload, image processing, sending notifications

By eliminating the burden of server management, Serverless allows teams to focus on creating value for users instead of spending time on infrastructure operations.

---

### Article Shared on AWS Study Group

![Post on AWS Study Group VN](/images/blog3/facebook-post.png)
