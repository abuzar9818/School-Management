const db = require("../config/db");
const calculateDistance = require("../utils/distance");


exports.addSchool = (req, res) => {

    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({
            message: "All fields required"
        });
    }

    const query = `
        INSERT INTO schools(name, address, latitude, longitude)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        query,
        [name, address, latitude, longitude],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.status(201).json({
                message: "School added successfully",
                school: {
                    id: result.insertId,
                    name,
                    address,
                    latitude,
                    longitude
                }
            });

        }
    );
};


exports.listSchools = (req, res) => {

    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({
            message: "User location required"
        });
    }

    db.query("SELECT * FROM schools", (err, schools) => {

        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        }

        const sortedSchools = schools.map(school => {

            const distance = calculateDistance(
                latitude,
                longitude,
                school.latitude,
                school.longitude
            );

            return { ...school, distance };

        }).sort((a, b) => a.distance - b.distance);


        res.json(sortedSchools);

    });

};