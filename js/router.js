/*
*@desc     :    Handles HTTP requests of routes changes and maps the client
*               request to the appropriate route.
*
* @author  :   Terence Boakye Mensah
*              Teiman - Madina
*
*@book_used:    get_programming_with_nodejs
*                  (johnattan wexler)
*               listing 7.6 
*
*@date     :   Tues, 7th January, 2025, 
*              time(11:44:00 AM)
*
*/

const htmlContentType = {"Content-Type": "text/html"},
    utils = require("/utils"),
    httpStatus = require("http-status-codes");

//-1-rRoutes objects to hold routes functions
//-2-all routes mapped to POST and GET requests
const routes = {
  
    //---GET routes
    "GET":{},

    //---POST routes
    "POST": {}

};

//@desc : Creates a handle function to handle requests
exports.handle =(req, res) => {

    try{
        route[method][req.url](req, res);
    }
    catch(e){
        res.setHeader(httpStatus.OK, contentTypes.html);
        utils.getFile("view/error.html", res);

    }
};

//@desc : Create the GET and POST to map route functions

//--GET
exports.get = (url, action) => {
    routes[GET][url] = action ;
};ini

//--POST
exports.post = (url, action) => {
    routes[POST][url] = action ;
};


