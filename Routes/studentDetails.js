const router = require('express').Router()

const {
    addStudent,
    showAllStudent,
    deleteStudent,
    getStudent
} = require("./../controller/studentPersonelDetails")

router.post("/create", addStudent);
router.get("/get", showAllStudent);
router.get("/get/:id", getStudent);
router.delete("/delete/:id", deleteStudent);

module.exports = router;