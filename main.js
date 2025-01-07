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

console.log(`The server has started and is listening on port number: ${port}`);



