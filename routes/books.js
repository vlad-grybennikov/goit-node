const express = require("express");
const router = express.Router({mergeParams: true});
const {getBooks, changeBook, sendBooks} = require("../controllers/books");

// Books
router.get("/", getBooks, sendBooks);
router.put("/:title/", changeBook, sendBooks);
router.delete("/:title/");
// *
router.get("/:title/");

module.exports = router;


// ---> /news/
// GET --- /news/
    // ---> Controllers:
    //  1) Проверить права доступа
    //  2) Получить новости из БД
    //  3) Возвращать новости
// GET --- /news/:id
// PUT --- /news/:id
// DELETE --- /news/:id
    // ---> Controllers:
    //  1) Проверить права доступа
    //  2) Удалить новость из БД
    //  3) Вернуть удаленную новость
// POST --- /news/







