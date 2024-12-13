/*
# Laptop4Dev Project

The Laptop4Dev project is an initiative that provides laptops to individuals learning new tech skills. 
This API enables users to apply for laptops and allows administrators to manage applications.

Features
1. Submit Applications: Applicants can submit their details and reasons for needing a laptop.
2. View Applications: Admins can view all applications submitted.
3. Total Count: Retrieve the total number of applications.

Endpoints

 POST `/applicants`
- Description: Submit a new application.
- Request Body:
  ```json
  {
    "firstName": "Ayodeji",
    "lastName": "Ayodele",
    "email": "aayodele11@gmail.com",
    "phone": "08135985640",
    "reason": "I need a laptop to learn programming."
  }
  ```
- Response:
  - `201`: Application submitted successfully.
  - `400`: Validation error or email already exists.

GET `/applicants`
- Description: Retrieve all applications.
- Response:
  - `200`: List of applications.

GET `/applicants/count`
- Description: Retrieve the total number of applications.
- Response:
  - `200`: Total count of applications.

Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB server.
4. Run the application:
   ```bash
   node app.js
   ```
5. Test endpoints using Postman.

## Technologies Used
- Node.js
- Express.js
- MongoDB

Author
This project was developed for the **Laptop4Dev** initiative.
*/
