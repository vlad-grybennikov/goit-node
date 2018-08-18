const USERS = require("../mock-data/users");
const {merge} = require("lodash");

// Controller
module.exports.getUsers = (req, res, next) => {
    req.users = USERS;
    next();
};

// Controller
module.exports.sendUsers = (req, res, next) => {
    res.status(200);
    res.json(req.users);
};

module.exports.addUser = (req, res, next) => {
    const user = req.body;
    USERS.push(user);
    req.users = USERS;
    next();
}
module.exports.changeUser = (req, res, next) => {
    const {index} = req.params;
    const {username, test, anotherName} = req.body;

    merge(USERS[index], {
        username,
        test,
        anotherName
    });
    req.users = USERS[index];
    next();
}
