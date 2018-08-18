const express = require("express");
const router = express.Router();
const {getUsers, sendUsers, changeUser, addUser} = require("../controllers/users");

router.get("/", getUsers, sendUsers);
router.post("/", addUser, sendUsers);
router.delete("/:index/");
router.put("/:index/", changeUser, sendUsers); // (Lodash) _.merge
module.exports = router;