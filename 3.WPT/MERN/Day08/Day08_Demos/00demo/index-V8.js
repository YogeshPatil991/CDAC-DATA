const http =  require('http');
//console.log(http);
 
const server = http.createServer((request, response)=>{
    response.setHeader('content-type', 
                        'application/json');

            
    if(request.url == "/users")
    {
        if(request.method.toUpperCase() == "GET")
        {
            response.write("Reply for GET Request");
        }
        else  if(request.method.toUpperCase() == "POST")
        {
            console.log(request);
            response.write("Reply for POST Request");
        }
        else  if(request.method.toUpperCase() == "PUT")
        {
            response.write("Reply for PUT Request");
        }
        else  if(request.method.toUpperCase() == "DELETE")
        {
            response.write("Reply for DELETE Request");
        }
        else
        {
            response.write("INVALID TYPE Request");
        }
      
    }
    else
    {
        response.write(JSON.stringify(
                        {"message": "Invalid Call"}));
    }
    response.end();   
})
server.listen(9999, ()=>{ console.log("Server Started Listening..")});