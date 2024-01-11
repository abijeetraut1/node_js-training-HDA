const express = require("express");
const app = express();
const port = 8000;
const db = require("./model/index");
db.sequelize.sync({
    force: false
})

const testController = require("./controllera/testcontrollers");

app.get("/", (req, res) => {
    res.json({
        message: "hello world from / route"
    });
});






app.get("/testfunction", testController.testfunction)

app.listen(port, () => {
    console.log(`listening is port: ${port}`);
})