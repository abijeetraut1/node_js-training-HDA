const database = require("./../model/index");
const studentPersonelDetails = database.sudentDetails;

exports.addStudent = async (req, res) => {
    const {
        name,
        address,
        faculty
    } = req.body;
    const student = await studentPersonelDetails.create({
        name: name,
        address: address,
        faculty: faculty
    })

    res.status(200).json({
        message: "success",
        student
    })
}

exports.showAllStudent = async (req, res) => {
    const students = await studentPersonelDetails.findAll()

    res.status(200).json({
        message: "success",
        students
    })
}

exports.deleteStudent = async (req, res) => {
    const student = await studentPersonelDetails.destroy({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({
        message: "success",
        student
    })
}

exports.getStudent = async(req, res) => {
    const student = await studentPersonelDetails.findByPk(req.params.id);

    res.status(200).json({
        message: "success",
        student
    })
}