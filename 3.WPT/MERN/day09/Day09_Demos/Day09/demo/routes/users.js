const express =  require("express");
const app = express();
const mysql  = require('mysql');



app.use(express.json());

//Users : GET, POST, PUT, DELETE

app.get("/",(request, response)=>{
            var statement = 'select * from Emp';
            const connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'manager',
                database : 'karadDB'
              });
            connection.connect();
            connection.query(statement, (error, result)=> 
            {
                if(error==null)
                {
                    response.send(JSON.stringify(result));
                }
                else
                {
                    response.send(error);
                }
                 connection.end();
            });
           //
})

app.get("/:no",(request, response)=>{
            var statement = 
                 `select * from Emp where No = ${request.params.no}`;
            const connection = mysql.createConnection({
                    host     : 'localhost',
                    user     : 'root',
                    password : 'manager',
                    database : 'karadDB'
                  });
            connection.connect();
            connection.query(statement, (error, result)=> 
            {
                if(error==null)
                {
                    response.send(JSON.stringify(result));
                }
                else
                {
                    response.send(error);
                }
                connection.end();
            });    
          
})

app.post("/",(request, response)=>{
            const connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'manager',
                database : 'karadDB'
            });
            console.log(request.body);
            var statement = 
                 `insert into Emp values(${request.body.No}, 
                                        '${request.body.Name}', 
                                        '${request.body.Address}')`;
            connection.connect();
            console.log(statement);
            connection.query(statement, (error, result)=> 
            {
                if(error==null)
                {
                    response.send(JSON.stringify(result));
                }
                else
                {
                    response.send(error);
                }
                connection.end();
            });    

         
})

app.put("/:no",(request, response)=>{
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'manager',
        database : 'karadDB'
      });
    var statement = 
         `update Emp set Name='${request.body.Name}', 
                         Address='${request.body.Address}'
                         where No = ${request.params.no}`;
    connection.connect();
    connection.query(statement, (error, result)=> 
    {
        if(error==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(error);
        }
        connection.end();
    });    
    
})

app.delete("/:no",(request, response)=>{
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'manager',
        database : 'karadDB'
      });
    var statement = 
         `delete from Emp where No = ${request.params.no}`;
    connection.connect();
    connection.query(statement, (error, result)=> 
    {
        if(error==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(error);
        }
        connection.end();
    });    
 
})




module.exports = app;