const express = require("express");
const app = express();
const config = require("./config/development");
const bodyParser = require('body-parser');
const usersRoute = require("./routes/users");
const booksRoute = require("./books");

const {checkTechnologies} = require("./controllers/technologies");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
    console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
    next();
})

// Users
app.use("/users/", usersRoute);
app.use("/users/:index/books/", booksRoute);

const TECH = {
    html: false,
    css: false,
    javascript: false
}
app.get("/technologies/", checkTechnologies);
// app.post("/users/")
// app.put("/users/")
// app.delete("/users/")
// app.all("/users/")

// Not Found Error
app.use((req, res, next) => {
    const error = new Error("Not Found!");
    next(error);
})

// All errors
app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        error: err.message,
        stack: err.stack
    })
})

app.listen(config.port);