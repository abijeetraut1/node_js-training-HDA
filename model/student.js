module.exports = (sequelize, Sequelize) => {
    const student = sequelize.define("student", {
        name: {
            type: Sequelize.STRING,
        },
        faculty: {
            type: Sequelize.STRING,
        },
    });

    return student;
};