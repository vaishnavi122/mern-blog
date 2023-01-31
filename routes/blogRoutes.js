const { getAllBlogs, addBlogs, removeBlogs, editBlogs } = require("../controllers/blogController")

const router = require("express").Router()

router
    .get("/", getAllBlogs)
    .post("/add", addBlogs)
    .delete("/:blogId", removeBlogs)
// .put("/:blogId", editBlogs)

module.exports = router   