const Blog = require("../models/BlogModel")
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({
            success: true,
            message: "All Blog Fetched",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.addBlogs = async (req, res) => {
    try {
        console.log(req.body);
        await Blog.create(req.body)
        res.json({
            success: true,
            message: "Blog Created Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}
exports.removeBlogs = async (req, res) => {
    try {
        // console.log(req.body);
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            success: true,
            message: "Blog Romoved Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}

exports.editBlogs = async (req, res) => {
    try {
        // console.log(req.body);
        const { blogId } = req.params
        await Blog.findByIdAndUpdate(blogId, req.body)
        res.json({
            success: true,
            message: "Blog Edited Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}