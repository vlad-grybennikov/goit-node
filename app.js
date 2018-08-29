const express = require("express");
const app = express();
const config = require("./config");
const bodyParser = require('body-parser');
const usersRoute = require("./routes/users");
const winston = require("winston");

// Подключаемся к базе данных
require("./utils/connect");

const productionLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'all.log' })
    ]
});

const developmentLogger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ]
});

const {checkTechnologies} = require("./controllers/technologies");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
    if(process.env.NODE_ENV === 'production'){
        productionLogger.log("info", `${req.url} --- ${req.method}`);
    } else {
        developmentLogger.log("info", `${req.url} --- ${req.method}`);
    }
    next();
})

// Users
app.use("/users/", usersRoute);

app.use(express.static("public"));

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

app.listen(config.port, () => {
    console.log(`SERVER IS STARTED ON: ${config.port}`);
});
