const express =  require("express");
const config = require('config');

const portNo = config.get("portno");

const app = express();
app.use(express.json());

const usersApp =  require('./routes/users');
const adminApp = require('./routes/admin');
const { response } = require("./routes/users");

app.use((request,response, next)=>{
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Headers", "*")
    response.setHeader("Access-Control-Allow-Methods", "*")
    next();
})

app.use("/users", usersApp);
app.use("/admin", adminApp);

app.get("/home",(request,response)=>{
    response.send("Welcome Home");
})

app.listen(portNo,()=>{
    console.log("Server Started at port no " + portNo);
})

