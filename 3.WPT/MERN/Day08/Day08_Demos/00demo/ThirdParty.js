const {EventEmitter} =  require('events');


//Author: Pramod 
class EDAL extends EventEmitter
{
    Insert(data)
    {
        //-----------------------------------
        //---------------------------------
        //-------logic---------------------
        console.log( data  + " inserted successfully");
        this.emit("onInsertSuccess", "ho gaya!")
    }
}


module.exports = EDAL