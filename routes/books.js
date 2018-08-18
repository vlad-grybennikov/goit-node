const express = require("express");
const router = express.Router();
const {getBooks, changeBook, sendBooks} = require("../controllers/books");

// Books
router.get("/", getBooks, sendBooks);
router.post("/");
router.put("/:title/", changeBook, sendBooks);
router.delete("/:title/");
// *
router.get("/:title/");

module.exports = router;