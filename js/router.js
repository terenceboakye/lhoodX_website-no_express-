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
    utils = require("./utils"),
    contentTypes = require("./contentTypes")
    httpStatus = require("http-status-codes");

//-1-rRoutes objects to hold routes functions
//-2-all routes mapped to POST and GET requests
const routes = {
  
    //---GET routes
    "GET":{
 /*       "/": (req, res) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            
            //get the home page
            utils.getFile("view/home.html", res);
        }    
   */ },

    //---POST routes
    "POST": {
 /*       "/users": (req, res) => {
            
        //handles post request for the users url
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            
            //displays a thanks message
            utils.getFile("view/thanks.html", res);
        }    
  */  }

};

//@desc : Creates a handle function to handle requests
exports.handle =(req, res) => {

    try{
        if(routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } 
        else {
            res.statusCode = 404;
            res.end("<h1>No such file exists<br>404 Not Found</h1>");
        }
    }

    catch(e){
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("view/error.html", res);

    //error
        console.error(e);
    }
};

//@desc : Create the GET and POST to map route functions

//--GET
exports.get = (url, action) => {
    routes["GET"][url] = action ;
};

//--POST
exports.post = (url, action) => {
    routes["POST"][url] = action ;
};


