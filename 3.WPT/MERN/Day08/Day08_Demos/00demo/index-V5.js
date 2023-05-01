//Author: Lovely Ghanshyam

const EDAL = require('./ThirdParty');

var obj = new EDAL();
obj.on("onInsertSuccess",(data)=>{
    console.log("Message received from a publisher"+ data)
})
obj.Insert("xyz record");
