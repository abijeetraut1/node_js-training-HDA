const db = require("../model/index");
const Student = db.student;

exports.createBlog = async (req, res) => {
    let data = {
        title: req.body.title,
        desc: req.body.desc,
    };

    let createdStudent = await students.create({
        name: req.body.title,
        desc: req.body.desc
    });

    res.status(200).json({
        data: createdStudent,
        message: "Created Successfully"
    })
};

exports.getStudent = async (req, res) => {
    const blog = await students.findAll()

    res.status(200).json({
        status: "success",
        message: blog
    })
}

exports.DeleteStudent = async (req, res) => {
    const blog = await students.destroy({
        where: {
            id: req.params.id
        }
    })


    res.status(200).json({
        status: "data deleted",
        message: Student
    })
}

exports.getStudentById = async (req, res) => {
    const blog = await students.findByPK(req.params.id)

    res.status(200).json({
        message: blog
    })
}