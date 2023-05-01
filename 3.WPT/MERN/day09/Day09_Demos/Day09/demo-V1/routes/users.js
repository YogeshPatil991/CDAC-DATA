const express =  require("express");
const app = express();
app.use(express.json());

//Admin : GET, POST, PUT, DELETE

app.get("/",(request, response)=>{
    response.write("Select All Users");  
    response.send();     
})

app.get("/:eno",(request, response)=>{
    response.write("Select User with ENo = " + request.params.eno);  
    response.send();     
})

app.post("/",(request, response)=>{
    response.write("U called Users via POST");  
    console.log(request.body);
    response.send();     
})


module.exports = app;