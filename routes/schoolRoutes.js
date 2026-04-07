const express = require("express");

const router = express.Router();

const {
    addSchool,
    listSchools
} = require("../controllers/schoolControllers");
const { validateSchool, validateCoordinates } = require("../middleware/validation");


router.post("/addSchool", validateSchool, addSchool);

router.get("/listSchools", validateCoordinates, listSchools);


module.exports = router;