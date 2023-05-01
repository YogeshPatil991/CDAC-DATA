const http =  require('http');
//console.log(http);
 
const server = http.createServer((request, response)=>{
    if(request.url == "/home")
    {
        response.setHeader("content-type", "text/html");
        response.write(`<html>
                            <head>
                                <title>Demo</title>
                            </head>
                            <body>
                                <h1 style="color: red">
                                    Welcome Home
                                </h1>
                            </body>
                            </html>`);
    }
    else if(request.url == "/users")
    {
    
        response.setHeader('content-type', 
                           'application/json');
        response.write(`[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
        ]`);
    }
    response.end();   
})
server.listen(9999, ()=>{ console.log("Server Started Listening..")});