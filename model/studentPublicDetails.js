module.exports = (sequelize, Sequelize) => {
    const studentPersonelDetails = sequelize.define("studentPersonelDetails", {
        name: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        faculty: {
            type: Sequelize.STRING,
        },
    });

    return studentPersonelDetails;
};