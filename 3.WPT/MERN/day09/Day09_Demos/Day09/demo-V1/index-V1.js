const express =  require("express");

const app = express();

app.use((request, response, next)=>{
    response.write("Stop 1");
    next();   
})


app.use((request, response, next)=>{
    response.write("Stop 2");
    next();   
})


app.get("/users",(request, response)=>{
    response.write("U called Users");  
    response.send();     
})

app.listen(9999,()=>{
    console.log("Server Started ...")
})

