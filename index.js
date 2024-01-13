const express = require("express");
const app = express();
const port = 8000;
const db = require("./model/index");
const Blogs = require("./Routes/student");

db.sequelize.sync({
    force: false
})

app.use(express.json({
    extends: true
}));

app.use("/api/blogs", Blogs);

app.listen(port, () => {
    console.log(`listening is port: ${port}`);
})
