const express = require("express");
const app = express();
const port = 8000;
const db = require("./model/index");
const student = require("./Routes/student");
const studentDetails = require("./Routes/studentDetails");

db.sequelize.sync({
    force: false
})

app.use(express.json({
    extends: true
}));

app.use("/student", student);
app.use("/studentDetails", studentDetails);


app.listen(port, () => {
    console.log(`listening is port: ${port}`);
})
