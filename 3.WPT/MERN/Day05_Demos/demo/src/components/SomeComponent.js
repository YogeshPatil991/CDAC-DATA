
////////////////////////////////////////////////Version 2

import { useEffect, useState } from "react";

function SomeComponent()
{
    var [myName, setMyName] =  useState("");
    var [error, setError] =  useState("Name is required.");
    

    var CheckNPrint = ()=>
    {
        if(error=="")
        {
            console.log("Welcome " + myName);
        }
    }

    var handleChange =(args)=>
    {
        if(args.target.value!="")
        {
            setError("");
            setMyName(args.target.value);
        }
        else
        {
            setMyName("");
            setError("Name is required.")
        }
    }
    return (<>
                <center>
                    <br></br><br></br>
                    <input type={"text"} value={myName}
                        onChange={handleChange}/> 
                    
                    <button onClick={CheckNPrint}>
                        Click Me
                    </button>

                    <h2>{error}</h2>
                </center>
            </>)
}

export default SomeComponent;



////--------------------------------------------Version 1
// import { useEffect, useState } from "react";

// function SomeComponent()
// {
//     var [myName, setMyName] =  useState("");
//     var [error, setError] =  useState("");
//     var [isbuttonClicked, setisbuttonClicked] = 
//                         useState(false);

//     var validate=()=>{
        
//         if(myName=="")
//         {
//            // debugger;
//             setError("Name is required.")
//         }
//         else
//         {
//             setError("")
//         }
//     }

//     useEffect(()=>{
//         if(error=="" && isbuttonClicked)
//         {
//             console.log("Welcome " + myName);
//             //debugger;
//         }
//     }, [error]);
//     var CheckNPrint = ()=>
//     {
//         validate();
//         setisbuttonClicked(true);
//     }

//     var handleChange =(args)=>
//     {
//         setMyName(args.target.value);
//     }
//     return (<>
//                 <center>
//                     <br></br><br></br>
//                     <input type={"text"} value={myName}
//                         onChange={handleChange}/> 
                    
//                     <button onClick={CheckNPrint}>
//                         Click Me
//                     </button>

//                     <h2>{error}</h2>
//                 </center>
//             </>)
// }

// export default SomeComponent;