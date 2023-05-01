const os = require('os');

//console.log(os);

let memoryDetails = os.freemem();
console.log("Free Memory Available " + memoryDetails);

console.log(os.platform());

console.log(os.arch());

console.log(os.hostname());

console.log(os.networkInterfaces())

console.log(os.totalmem());

// console.log("Hello Node")

// setInterval(()=>{
//     console.log("Hello Node")
// },1000)


// alert("hi");//------------This throws exception

// console.log(window);//------------This throws exception
//                      as window obejct is not available i 
//                      Node

// console.log(global);//Global offers setInterval like 
//                     functions in Node
//                     Global is global object in Node. 

