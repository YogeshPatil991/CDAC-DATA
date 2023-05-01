const express =  require("express");
const app = express();
app.use(express.json());

//Admin : GET, POST, PUT, DELETE
app.get("/",(request, response)=>{
    response.write("Select All Admins");  
    response.send();     
})

module.exports = app;