var mysql      = require('mysql');

var connection = mysql.createConnection({
                                host     : 'localhost',
                                user     : 'root',
                                password : 'manager',
                                database : 'ecommerce_karad'
                                });
 
connection.connect();
//---------------------------------------------------
//-----------------------DELETE----------------------
//---------------------------------------------------
// var statement = `delete from Emp where No = 5`;
// connection.query(statement, (error, result)=> 
// {
//     if(error==null)
//     {
//      console.log(JSON.stringify(result));
//     }
//     else
//     {
//         console.log(error);
//     }
// });




//---------------------------------------------------
//-----------------------UPDATE----------------------
//---------------------------------------------------
// var statement = ` update Emp  set Address='Chenai' 
//                   where No = 5`;
// connection.query(statement, (error, result)=> 
// {
//     if(error==null)
//     {
//      console.log(JSON.stringify(result));
//     }
//     else
//     {
//         console.log(error);
//     }
// });

//---------------------------------------------------
//-----------------------INSERT----------------------
//---------------------------------------------------
// var statement = `insert into Emp 
//                     values(5, 'Mahesh', 'Pune')`;
// connection.query(statement, (error, result)=> 
// {
//     if(error==null)
//     {
//      console.log(JSON.stringify(result));
//     }
//     else
//     {
//         console.log(error);
//     }
// });

//---------------------------------------------------
//-----------------------SELECT----------------------
//---------------------------------------------------

var statement = 'select * from users_tbl'
connection.query(statement, (error, result)=> 
{
    if(error==null)
    {
     console.log(JSON.stringify(result));
    }
    else
    {
        console.log(error);
    }
});
 
connection.end();