const express =  require("express");

const app = express();
app.use(express.json());

const usersApp =  require('./routes/users');
const adminApp = require('./routes/admin');

app.use("/users", usersApp);
app.use("/admin", adminApp);

app.get("/home",(request,response)=>{
    response.send("Welcome Home");
})

app.listen(9999,()=>{
    console.log("Server Started ...")
})

