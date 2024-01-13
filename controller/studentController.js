const db = require("../model/index");
const blogs = db.student;

exports.createBlog = async (req, res) => {
    let data = {
        title: req.body.title,
        desc: req.body.desc,
    };

    let createdBlogs = await students.create({
        name: req.body.title,
        desc: req.body.desc
    });

    res.status(200).json({
        data: createdBlogs,
        message: "Created Successfully"
    })
};

exports.getBlogs = async (req, res) => {
    const blog = await students.findAll()

    res.status(200).json({
        status: "success",
        message: blog
    })
}

exports.DeleteBlogs = async (req, res) => {
    const blog = await students.destroy({
        where: {
            id: req.params.id
        }
    })


    res.status(200).json({
        status: "data deleted",
        message: blogs
    })
}

exports.getBlogsById = async (req, res) => {
    const blog = await students.findByPK(req.params.id)

    res.status(200).json({
        message: blog
    })
}