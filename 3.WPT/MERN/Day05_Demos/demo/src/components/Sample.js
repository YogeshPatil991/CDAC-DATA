import { useEffect, useState } from "react";


function Sample()
{
    var [myName, setMyName] = useState("Mahesh");
  

    useEffect(()=>  {
                        //Similar to componentDidMount
                        console.log("Component Did Mount")
                    },[]);

    useEffect(()=>  {
                        //Similar to componentDidUpdate
                        //Initial Value setup to a variable
                        //i.e. myName is also treated as 
                        //myName updated from undefined to 
                        //"mahesh"
                        console.log("Component Did Update")
                    },[myName]);

    
    // useEffect(()=>  {

    //                 },[myName, address]);

    // useEffect(()=>  {

    //                 },[address]);

    var Change = function()
    {
        console.log("Hi");
        //debugger;
        //myName = "Nilesh";

        setMyName("Nilesh");
    }
    return (<>
                <div>Name:{myName} </div>
                <button onClick={Change}>Click Me</button>
            </>)
}

export default Sample;