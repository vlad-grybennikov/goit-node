// app.js
// models/
// controllers/
// routes/   (POST /users/) -> users.add, users.createActivation, users.checkEmail
// helpers/   -> currency.convert, language.russian, data.analize
// seeders/ -> test data
// utils/ -> object.copyDeep, object.isEqual, date.format("DD-MM-YYYY");
// config/
// index.js
// development.json
// production.json
// test.json
// test/

const http = require("http");
const querystring = require("querystring");
// 1) Делать запросы на другие серверы (http.request);
// 2) Обработка входящих запросов(http.createServer, .listen);

const server = http.createServer({},
    (request /* Запрос */, response /* Ответ */) => {
        // /users/ --- POST, body = { a: 1 }
        // response.statusCode = 201;
        const name = querystring.parse(request.url.slice(2)).name;

        request.query = querystring.parse(request.url.slice(2));

        if(request.url === '/users/' && request.method === "GET"){}
        response.end(`Hello, ${name}`);
        // debugger;
    });
server.listen(8080);

// http://google.com -> 192.168.1.105
// 192.168.1.105:8080, http://google.com:8080
// http://google.com === http://google.com:80


// Не будет работать до тех пор
