const express =  require("express");

const app = express();


//Below line converts request data
//in the form of JSON and then further 
//call continues...
app.use(express.json());


app.get("/users",(request, response)=>{
    response.write("Select All Users");  
    response.send();     
})

app.get("/users/:eno",(request, response)=>{
    response.write("Select User with ENo = " + request.params.eno);  
    response.send();     
})

app.post("/users",(request, response)=>{
    response.write("U called Users via POST");  
    console.log(request.body);
    response.send();     
})

app.get("/admin",(request, response)=>{
    response.write("Select All Admins");  
    response.send();     
})

app.listen(9999,()=>{
    console.log("Server Started ...")
})

