import { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
function People()
{
    var [errors, seterrors]  = useState([]);
    var [people, setpeople]  = useState([]);
    var [person, setperson]  = useState({
                                            UserName: "", 
                                            Surname:""
                                             } );
    debugger;
    var [flag,setFlag] = useState(false);

    var HandleChange = (args)=>{
        var copyOfaPerson = {...person};
        copyOfaPerson[args.target.id] = args.target.value;
        setperson(copyOfaPerson);
    }
    var Validate=()=>
    {
        debugger;
        var latestErrors = new Array();

        if(person.UserName == "")
        {
            latestErrors.push("Name is required.")
        }
        if(person.Surname == "")
        {
            latestErrors.push("Surname is required.")
        }

        if(latestErrors.length>0)
        {
            seterrors(latestErrors);
        }
        else
        {
            seterrors([]);
        }
       
    }

    var InsertUserInCollection=()=>{
        if(errors.length==0)
        {
             var copyOfPeople = [...people];
             var copyOfperson = {...person};
             copyOfPeople.push(copyOfperson);
             setpeople(copyOfPeople);
             setperson({
                         UserName: "", 
                         Surname:""
                     })
        }
    }

    useEffect(()=>
    {
        console.log("Error Array Changed / Updated...");
        debugger;
        if(flag!=false)
        {
            InsertUserInCollection();
        }
    }, [errors]);

    var Add=()=>
    {
        debugger;
       Validate();
       setFlag(true);
        debugger;
    //    if(errors.length==0)
    //    {
    //         var copyOfPeople = [...people];
    //         var copyOfperson = {...person};
    //         copyOfPeople.push(copyOfperson);
    //         setpeople(copyOfPeople);
    //         setperson({
    //                     UserName: "", 
    //                     Surname:""
    //                 })
    //    }
    }
    
    return (<>
            <br></br>
            <br></br>
            <center>
                <table>
                    <tbody>
                        <tr>
                            <td> UserName</td>
                            <td>
                            <input 
                                id="UserName"
                                type={"text"}
                                value={person.UserName}
                                onChange={HandleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                             Surname
                            </td>
                            <td>
                            <input 
                                id="Surname"
                                type={"text"}
                                value={person.Surname}
                                onChange={HandleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{columnSpan: 2}}>
                                <center>
                                    <button onClick={Add}>
                                        Add record
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
               
                <hr></hr>
                <div>
                    {errors.map((error)=>{
                        return <div style={{color: "red"}}>
                                    {error}
                                </div>
                    })}
                </div>
                <hr></hr>
                {
                    people.map(person=>{
                     return (<div key={person.UserName}>
                                <h1>
                                {person.UserName} | 
                                {person.Surname}
                                <button className='btn btn-danger'>
                                    Delete
                                </button>
                                </h1>
                        <hr></hr>
                        </div>)
                    })
                }
            </center>
        </>);
}
 
export default People;