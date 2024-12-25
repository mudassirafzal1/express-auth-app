# Express.js Application with Passport.js Authentication

This project is an Express.js application with user authentication implemented using Passport.js. It includes secure MongoDB database integration and utilizes environment variables for configuration.

## Features
- User authentication with Passport.js (local strategy).
- MongoDB integration for storing user data.
- Environment variable support for sensitive configurations.
- Development environment support with `npm run dev`.

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```env
PORT=3000  # Port number for the server
MONGO_URI=mongodb://localhost:27017/your-database-name  # MongoDB connection string
ACCESS_TOKEN_SECRET=your-secret-key
REFRESH_TOKEN_SECRET=your-secret-key
```

### 4. Start the Application
Run the application in development mode:
```bash
npm run dev
```

The application will start on the specified port (default: `3000`).

## Project Structure
```
├── config          # Configuration files (e.g., Passport.js strategies)
├── controllers     # Application controllers
├── middleware      # Custom middleware functions
├── models          # Mongoose models
├── routes          # Application routes
├── services        # Business logic and service layers
├── utils           # Utility functions
├── .env            # Environment variables file
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```

## Scripts
- `npm install`: Install dependencies.
- `npm run dev`: Start the application in development mode with hot reloading.

## Dependencies
Some of the key dependencies used in this project:
- [Express.js](https://expressjs.com/)
- [Passport.js](http://www.passportjs.org/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)

