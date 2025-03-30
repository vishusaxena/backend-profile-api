# backend-profile-api

# User Profile Management API

## Overview

This is a RESTful API built with **Express.js** and **MongoDB** that allows users to register, authenticate using **JWT**, retrieve, and update their profiles securely.

## Features

- **User Registration** (with password hashing)
- **User Authentication** (JWT-based)
- **Profile Retrieval** (protected route)
- **Profile Update** (protected route)
- **Error Handling & Security Best Practices**

## Tech Stack

- **Backend:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT
- **Security:** bcrypt.js for password hashing

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/backend-profile-api.git
cd backend-profile-api
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run the Server

For development mode:

```sh
npm run dev
```

For production mode:

```sh
npm start
```

## API Endpoints

### **Authentication Routes** (`/api/auth`)

- **POST /register** → Register a new user
- **POST /login** → Authenticate user and return JWT

### **User Routes** (`/api/users`)

- **GET /me** → Get current user's profile (Protected)
- **PUT /me** → Update current user's profile (Protected)

## Testing with Postman

- Import the provided **Postman collection** to test API endpoints.
- Use **Bearer Token Authentication** for protected routes.

## Folder Structure

```
backend-profile-api/
├── config/            # Database configuration
├── controllers/       # Business logic
├── middleware/        # Authentication & error handling
├── models/            # Mongoose schemas
├── routes/            # API routes
├── utils/             # Helper functions
├── .env               # Environment variables
├── .gitignore         # Ignored files
├── index.js           # Main entry point
├── package.json       # Dependencies & scripts
├── README.md          # Project documentation
```

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
