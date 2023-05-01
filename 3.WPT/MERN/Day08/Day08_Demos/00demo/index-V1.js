/////////////////////////////////----------Sync Function

const fs =  require('fs');

console.log("---------------Start----------------");

    var files = fs.readdirSync("c:/");
   
    if(files.length>0)
    {
        files.map((file)=>{
            console.log(file);
        })
    }
    else
    {
        console.log("No Files Found!");
    }


console.log("---------------End----------------");


/////////////////////////////////----------Async Function
// const fs =  require('fs');

// console.log("---------------Start----------------");

// fs.readdir("c:/", (error, files)=>{
//     if(error==null)
//     {
//         if(files.length>0)
//         {
//             files.map((file)=>{
//                 console.log(file);
//             })
//         }
//         else
//         {
//             console.log("No Files Found!");
//         }
//     }
// } );

// console.log("---------------End----------------");