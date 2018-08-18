const USERS = require("../mock-data/users");
const {merge} = require("lodash");
const slug = require("slug");

module.exports.getBooks = (req, res, next) => {
    const index = req.params.index;
    req.books = USERS[index].books;
    next();
};
module.exports.sendBooks = (req, res, next) => {
    res.status(200);
    res.json(req.books);
}

// module.exports = {};
module.exports.changeBook = (req, res, next) => {
    const {title, index} = req.params;
    const userBooks = USERS[index].books;
    const book = userBooks.find((bookEx) => {
        //JS is suck! -> js-is-suck
        return slug(bookEx.title).toLowerCase() === title.toLowerCase();
    });
    merge(book, req.body);
    req.books = book;
    next();
}