/*
*@desc     :   This program is intended to create a 
*               local server and the port for my food website
*
* @author  :   Terence Boakye Mensah
*              Teiman-Accra
*
*@book_used:    get_programming_with_nodejs
*                  (johnattan wexler)
*               listing 7.3  
*
*@date     :   Tues, 7th January, 2025
*              time(05:55:00 AM)
*
*/


//required node modules for the server

//port number
const port = 3000, 
    http = require('http'), 
    httpStatus = require('http-status-codes'),
    router = require('./js/router'),
    contentsType = require("./js/contentTypes"),
    utils = require("./js/utils");


//Registering individual routes with the router module\

//--for Homepage
router.get("/", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("view/index.html", res);
});

//--for course
router.get("/courses.html", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("view/courses.html", res);
});

//---for Contact
router.get("/contact.html", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("view/contact.html", res);
});

//--for Thanks after form submission
router.post("/submit", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("view/thanks.html", res);
});

//--css
router.get("/styles.css", (req, res) => {
    res.writeHead(200, contentsType.css);
    utils.getFile("./css/styles.css", res);
});

//Starting the server...
http.createServer(router.handle).listen(port);

console.log(`The server has started and is listening on port number: ${port}`);



