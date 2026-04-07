const express = require("express");

const router = express.Router();

const {
    addSchool,
    listSchools
} = require("../controllers/schoolControllers");
const { validateSchool, validateCoordinates } = require("../middleware/validation");


router.post("/addSchool", validateSchool, addSchool);
router.get("/addSchool", (req, res) => {
  res.send("Use POST method to add a school.");
});

router.get("/listSchools", validateCoordinates, listSchools);


module.exports = router;