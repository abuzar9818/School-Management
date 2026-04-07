# 🏫 School Management API

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.2-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-v8.0+-blue.svg)](https://www.mysql.com/)

A powerful and lightweight backend API for managing schools. It allows administrators to securely add new schools and lets users seamlessly fetch a list of schools ranked and sorted by proximity to their current geographical location using spatial distance calculations.

## ✨ Features

- **Add New Schools**: Securely store school details including Name, Address, Latitude, and Longitude.
- **Geographic Sorting**: Fetch schools dynamically sorted by their real-world distance from a user's specified coordinates.
- **Input Validation**: Custom middleware to ensure data integrity and catch missing or incorrect HTTP payloads.
- **Secure Configuration**: Robust handling of secure credentials via environment variables.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/) (using `mysql2` driver)
- **Utilities**: CORS, DotEnv, Nodemon

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v18 or higher)
- **MySQL Server**

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd School-Management
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the Database**:
   Create a MySQL database and table using the schema provided below.

4. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your MySQL credentials (see configuration below).

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The server will start on `http://localhost:5000`.*

---

## 🔐 Environment Variables

You need to set up the `.env` file in your root directory. Make sure to wrap your passwords in quotes to avoid syntax issues.

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD="your_password_here"
DB_NAME=schoolDB
PORT=5000
```

---

## 📡 API Endpoints

### 1. Add a School
Registers a new school in the database.

- **URL:** `/api/addSchool`
- **Method:** `POST`
- **Content-Type:** `application/json`

**Request Body:**
```json
{
  "name": "Springfield High",
  "address": "123 Main St, Springfield",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

**Success Response (201 Created):**
```json
{
  "message": "School added successfully",
  "school": {
    "id": 1,
    "name": "Springfield High",
    "address": "123 Main St, Springfield",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
}
```

---

### 2. List Schools by Proximity
Fetches all schools, sorted by distance from the provided user coordinates.

- **URL:** `/api/listSchools`
- **Method:** `GET`
- **Query Parameters:**
  - `latitude` (float) - The user's current latitude
  - `longitude` (float) - The user's current longitude

**Example Request:**
```
GET /api/listSchools?latitude=40.7100&longitude=-74.0000
```

**Success Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Springfield High",
    "address": "123 Main St, Springfield",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "distance": 0.598
  }
]
```

---

## 🗄️ Database Schema

Execute the following SQL command in your MySQL environment to prepare the database structure:

```sql
CREATE DATABASE IF NOT EXISTS schoolDB;

USE schoolDB;

CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---
*Developed with Abuzar Ahmad*
