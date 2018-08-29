const mongoose = require('mongoose');
const config = require("../config");
mongoose.connect(config.db, () => {
    console.log("Успешно подключились к БД");
});

// 1) Скачать Community Server MongoDB
// 2) Скачать MongoDB Compass
// 3) Разархивировать сервер в удобную директорию ~/mongo_db/bin/mongod db-path ~/mongo_db/data
// 4) Запускаем базу данных и ОБЯЗАТЕЛЬНО ПЕРЕДАЕМ ПУТЬ К данным
// 5) Нужно создать базу данных для нашего приложения
// 6) Подключить сервер с помощью mongoose.connect();