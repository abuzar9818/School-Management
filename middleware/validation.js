function validateSchool(req, res, next) {

    // Fallback if req.body is undefined (e.g. forgot Content-Type header)
    const { name, address, latitude, longitude } = req.body || {};

    if (!name || !address || latitude === undefined || longitude === undefined) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    if (typeof name !== "string" || typeof address !== "string") {
        return res.status(400).json({
            message: "Name and address must be strings"
        });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({
            message: "Latitude and longitude must be numbers"
        });
    }

    if (latitude < -90 || latitude > 90) {
        return res.status(400).json({
            message: "Latitude must be between -90 and 90"
        });
    }

    if (longitude < -180 || longitude > 180) {
        return res.status(400).json({
            message: "Longitude must be between -180 and 180"
        });
    }

    next();
}

function validateCoordinates(req, res, next) {

    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({
            message: "Latitude and longitude required"
        });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({
            message: "Coordinates must be numbers"
        });
    }

    next();
}

module.exports = {
    validateSchool,
    validateCoordinates
};
