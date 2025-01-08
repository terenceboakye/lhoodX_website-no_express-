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
    http = require('http'), //http module
    httpStatus =require("http-status-codes"),
    router = require("./router"),
    contentsType = require("./contentType");
    utils = require("./utils");


//Registering individual routes with the router module\

//--for Homepage
router.get("/", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("views/home.html", res);
});

//--for course
router.get("/menu", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("views/courses.html", res);
});

//---for About
router.get("/about", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("views/about.html", res);
});

//---for Contact
router.get("/contact", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("views/contact.html", res);
});

//--for Thanks after form submission
router.post("/", (req, res) => {
    res.writeHead(200, contentsType.html);
    utils.getFile("views/thanks.html", res);
});

//--css
router.get("/styles.css", (req, res) => {
    res.writeHead(200, contentsType.css);
    utils.getFile("views/css/styles.css", res);
});

//Starting the server...
http.createServer(router.handle).listen(port);

console.log(`The server has started and is listening on port number: ${port}`);



