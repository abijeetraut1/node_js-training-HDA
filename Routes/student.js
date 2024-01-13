const router = require('express').Router()

const {
    createBlog, getBlogs, DeleteBlogs, getBlogsById
} = require("./../controller/studentController")

router.post("/create", createBlog);
router.get("/get", getBlogs);
router.get("/get/:id", getBlogsById);
router.delete("/delete/:id", DeleteBlogs);

module.exports = router;