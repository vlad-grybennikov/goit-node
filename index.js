const fs = require("fs");
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on("log", () => {
    setImmediate(() => {
        emitter.emit("log");
    })
})
emitter.emit("log");

const openFileSync = (path) => {
    // const file = fs.statSync("./trash/info.txt");
    const file = fs.readFileSync(path);
    const text = file.toString();
    console.log(text.split("")
        .filter((letter) => {
            return letter.toUpperCase() === "T";
        })
        .length

    );
}

const openFile = async (path) => {
    const file = await fs.promises.readFile(path);
    const text = file.toString();
    console.log(text.split("")
        .filter((letter) => {
            return letter.toUpperCase() === "T";
        })
        .length
    );
}

// openFileSync("./trash/info.txt");
openFile("./trash/info.txt");


// Node Core
// RESTful API, Express, HTTP
// MongoDB, NoSQL, SQL, Sequelize
// Security - Json Web Token, Authentification
// Practice, sending Emails
// API, websockets
// Deploy, nginx, pm2, DBs

// mongolab
const Postgres = (sql) => "response"; // native driver for node
const request = (table, limits = 1000) => Postgres(`SELECT * from ${table} LIMIT ${limits}`);

function ServerError(status, message){
    const error = new Error(message);
    error.status = status;
    return error;
}
const {pid, kill} = process;
setTimeout(() => {
    kill(pid);
}, 10000);

request("orders", 50);
console.log("Test 52");
module.exports = 52;