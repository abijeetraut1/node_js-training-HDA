module.exports = {
    HOST: "localhost",
    USER: "root",
    PASS: "",
    POST: 3306,
    db: "test",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        accurate: 30000,
        idle: 10000
    }
}