/*
*@desc     :   This program is intended to create a 
*               local server and the port for my food website
*
* @author  :   Terence Boakye Mensah
*              Teiman-Accra
*
*@book_used:    get_programming_with_nodejs
*                  (johnattan wexler)
*               listing 7.5  
*
*@date     :   Tues, 7th January, 2025
*              time(06:38:00 AM)
*
*/
const fs = require('fs'),
    httpStatus = require("http-status-codes"),
    
 //imports tthe modules for use in the getFile   
    contentTypes = require("./contentTypes");

//Exports a function which will read files and return a response    
module.exports = {
    getFile : (file, res) => {
       
        fs.readFile(`./${file}`, (err, data) => {
        //condition statement if there is an error during the reading of the file
            if(err){
                res.writeHead(500, contentTypes.html);    
                res.end("There was an error serving the content");
            }
        
        //works if there is no error
            res.end(data);
        });
    }
};    