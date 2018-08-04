// const app = require("express")();
const express = require("express");
const app = express();
const config = require("./config/development");
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
    console.log(`${req.url} --> ${req.method} --> ${Date.now()}`);
    next();
})

// endpoint = url + method

const USERS = require("./mock-data/users");

// Controller
const getUsers = (req, res, next) => {
    req.users = USERS;
    next();
};

// Controller
const sendUsers = (req, res, next) => {
    res.status(200);
    res.json(req.users);
};

const addUser = (req, res, next) => {
    const user = req.body;
    USERS.push(user);
    req.users = USERS;
    next();
}

const getBooks = (req, res, next) => {
    const index = req.params.index;
    req.books = USERS[index].books;
    next();
};
const sendBooks = (req, res, next) => {
    res.status(200);
    res.json(req.books);
}

// Users
app.get("/users/", getUsers, sendUsers);
app.post("/users/", addUser, sendUsers);
app.delete("/users/:index/");
app.put("/users/:index/"); // (Lodash) _.merge

// Books
app.get("/users/:index/books", getBooks, sendBooks);
app.post("/users/:index/books");
app.put("/users/:index/books/:title");
app.delete("/users/:index/books/:title");
// *
app.get("/users/:index/books/:title");

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