const mysql=require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "schoolDB"
});

connection.connect(err => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = connection;