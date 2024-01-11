const DBconfig = require("../dbConfig/dbConfig");
const Sequelize = require("sequelize");
const blogs = require("./blogs");

const sequelize = new Sequelize(DBconfig.db, DBconfig.USER, DBconfig.PASS, {
    host: DBconfig.HOST,
    dialect: DBconfig.dialect,
    operatirAlias: false,
    loggin: false,
    port: DBconfig.POST,
    pool: {
        max: DBconfig.max,
        min: DBconfig.min,
        accurate: DBconfig.accurate,
        idle: DBconfig.idle
    }
})

sequelize.authenticate().then(() => {
    console.log("conneced to database successfully");
}).catch(err => {
    console.log(err)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = blogs;

module.exports = db;