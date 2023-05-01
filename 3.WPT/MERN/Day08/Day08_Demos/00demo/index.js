const http =  require('http');
var mysql      = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'manager',
    database : 'karadDB'
    });


 
const server = http.createServer((request, response)=>
{
    response.setHeader('content-type', 
                        'application/json');

   
    if(request.url == "/users")
    {
        if(request.method.toUpperCase() == "GET")
        {
            connection.connect();
            var responseData = '';
            var statement = 'select * from Emp';
            connection.query(statement, (error, result)=> 
            {
                if(error==null)
                {
                    responseData =JSON.stringify(result);
                    //console.log(responseData);
                    response.write(responseData);
                    response.end();   
                }
                else
                {
                    responseData = error;
                    response.write(responseData);
                    response.end();   
                }
            });
         
            connection.end();
          
            
        }
        else  if(request.method.toUpperCase() == "POST")
        {
            response.write("Reply for POST Request");
            response.end();   
        }
        else  if(request.method.toUpperCase() == "PUT")
        {
            response.write("Reply for PUT Request");
            response.end();   
        }
        else  if(request.method.toUpperCase() == "DELETE")
        {
            response.write("Reply for DELETE Request");
            response.end();   
        }
        else
        {
            response.write("INVALID TYPE Request");
            response.end();   
        }
       
    }
    else
    {
        response.write(JSON.stringify(
                        {"message": "Invalid Call"}));
    }
  
   
})
server.listen(9999, ()=>{ console.log("Server Started Listening..")});