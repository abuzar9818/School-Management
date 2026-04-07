# 🏫 School Management API

A Node.js + Express.js + MySQL backend application that allows users to add schools and retrieve schools sorted by proximity to a given location.

This project was built as part of a backend API assignment to demonstrate REST API development, database integration, validation middleware usage, and deployment.

---

## 🚀 Live Deployment

**Base URL:**
[https://school-management-production-292a.up.railway.app](https://school-management-production-292a.up.railway.app)

**Example working endpoint:**
GET Schools by location:
[https://school-management-production-292a.up.railway.app/api/listSchools?latitude=25.9716&longitude=80.4](https://school-management-production-292a.up.railway.app/api/listSchools?latitude=25.9716&longitude=80.4)

---

## 📌 Features

- Add a new school
- Fetch schools sorted by distance from user location
- MySQL database integration
- Input validation middleware
- Distance calculation using Haversine Formula
- Production deployment using Railway
- Postman collection included

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **Railway** (Deployment)
- **Postman** (API testing)

---

## 📂 Project Structure

```text
school-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── schoolController.js
│
├── routes/
│   └── schoolRoutes.js
│
├── middlewares/
│   └── validation.js
│
├── utils/
│   └── distance.js
│
├── .env
├── server.js
└── package.json
```

---

## 📡 API Endpoints

### 1️⃣ Add School

**Endpoint:**
`POST /api/addSchool`

**Example Request Body:**
```json
{
  "name": "ABC School",
  "address": "Lucknow",
  "latitude": 26.8467,
  "longitude": 80.9462
}
```

**Example Response:**
```json
{
  "message": "School added successfully"
}
```

---

### 2️⃣ List Schools (Sorted by Distance)

**Endpoint:**
`GET /api/listSchools`

**Example Request:**
`/api/listSchools?latitude=25.9716&longitude=80.4`

**Example Response:**
```json
[
  {
    "id": 1,
    "name": "Test School",
    "address": "Delhi",
    "latitude": 28.7041,
    "longitude": 77.1025,
    "distance": 82.01
  }
]
```

---

## 📍 Distance Calculation Logic

Schools are sorted using the **Haversine Formula** to calculate the distance between user coordinates and school coordinates.
This ensures accurate proximity-based sorting.

---

## ⚙️ Installation (Run Locally)

**Clone repository:**
```bash
git clone https://github.com/YOUR_USERNAME/school-management-api.git
```

**Move into project folder:**
```bash
cd school-management-api
```

**Install dependencies:**
```bash
npm install
```

**Create `.env` file:**
```env
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=your_port
PORT=5000
NODE_ENV=development
```

**Run server:**
```bash
npm run dev
```

---

## 🗄 Database Schema

**Table:** `schools`
```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude DECIMAL(10,8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL
);
```

---

## 📬 Postman Collection

**Postman collection link:**
[https://drive.google.com/file/d/1FIum3kkoFye88KK65LAMtUc5M08gvbse/view?usp=sharing](https://drive.google.com/file/d/1FIum3kkoFye88KK65LAMtUc5M08gvbse/view?usp=sharing)

**Includes:**
- Add School API
- List Schools API

---

## 🌐 Deployment

**Backend deployed on:** Railway

**Live URL:**
[https://school-management-production-292a.up.railway.app](https://school-management-production-292a.up.railway.app)

---

## 👨‍💻 Author

**Abuzar Ahmad**  

*Role*: MERN Stack Developer
