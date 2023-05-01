import { useEffect, useState } from "react";
import '../assets/common.css';

function Users()
{
    const [users, setUsers] = useState([]);
    const [user, setuser] = useState({No:"", Name:"", Address:""});
    const [message,setMessage] = useState("");

    // const [searchKeyword, setsearchKeyword] = useState("");

    const HandleChange = (args)=>{
        var copyOfUser = {...user};
        copyOfUser[args.target.id] = args.target.value;
        setuser(copyOfUser);
    }

    // const Search = ()=>{
    // fetch("https://www.googleapis.com/books/v1/volumes?q=" +searchKeyword )
    // .then((response)=>{return response.json();})
    // .then((result)=>{
    //         debugger;
    //         setBooks(result.items);
    //     })
    // }

    useEffect(()=>{
        if(message!="")
        {
            setTimeout(() => {
                setMessage("");
            }, 5000);
        }
    },[message])

    const Clear = ()=>
    {
        setuser({No:"", Name:"", Address:""});
    }
    const Update = ()=>{
        var userObjectInStringFormat = JSON.stringify(user);
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
            var result =   JSON.parse( helper.responseText)
            if(result.affectedRows > 0)
            {
                setMessage("Record updated successfully!");
                setuser({No:"", Name:"", Address:""});
                GetData();
            }
            else
            {
                setMessage("Record could not get updated!");
            }
            }
        };
        helper.open("PUT",`http://localhost:9999/users/${user.No}`);
        helper.setRequestHeader("content-type","application/json")
        helper.send(userObjectInStringFormat);
    }

    const Delete = (No)=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status == 200)
            {
             var result =   JSON.parse( helper.responseText);
             if(result.affectedRows>0)
             {
                  setMessage("Record Removed Successfully!");
                  GetData();
             }
             else
             {
                setMessage("Something went wrong!")
             }
            }
        };
        helper.open("DELETE","http://localhost:9999/users/" + No);
        helper.send();
    }

    const Edit = (No)=>{
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = ()=>{
                if(helper.readyState == 4 && helper.status == 200)
                {
                 var result =   JSON.parse( helper.responseText);
                 if(result.length > 0)
                 {
                    var userRecord = result[0];
                    setuser(userRecord);
                    setMessage("Record Found!")
                 }
                 else
                 {
                    setMessage("No Record Found!")
                 }
                }
            };
            helper.open("GET","http://localhost:9999/users/" + No);
            helper.send();
    }
    const GetData = ()=>{
                        var helper = new XMLHttpRequest();
                        helper.onreadystatechange = ()=>{
                            if(helper.readyState == 4 && helper.status == 200)
                            {
                             var result =  JSON.parse( helper.responseText)
                             setUsers(result);
                            }
                        };
                        helper.open("GET","http://localhost:9999/users");
                        helper.send();
                    }
    const SendData = ()=>{
        var userObjectInStringFormat = JSON.stringify(user);
        var helper = new XMLHttpRequest();
            helper.onreadystatechange = ()=>{
                if(helper.readyState == 4 && helper.status == 200)
                {
                    var result = JSON.parse( helper.responseText)
                    if(result.affectedRows > 0)
                    {
                        setMessage("Record inserted successfully!");
                        setuser({No:"", Name:"", Address:""});
                    }
                }
            };
            helper.open("POST","http://localhost:9999/users");
            helper.setRequestHeader("content-type","application/json")
            debugger;
            helper.send(userObjectInStringFormat);
    }

    return (<center>
                <table>
                    <tr>
                        <td>No</td>
                        <td>
                            <input id="No" type="text" value={user.No}
                                    onChange={HandleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input id="Name" type="text" value={user.Name}
                                    onChange={HandleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <input id="Address" type="text" 
                                    value={user.Address}
                                    onChange={HandleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={SendData}>Send Data</button>
                        </td>
                        <td>
                            <button onClick={Update}>Update Data</button>
                        </td>
                        
                    </tr>
                    <tr>
                        <td> 
                            <button onClick={GetData}>Get Data</button>
                        </td>
                        <td>
                            <button onClick={Clear}>Clear</button>
                        </td>
                    </tr>
                    <tr>
                        <td> 
                            <button onClick={GetData}>Refresh</button>
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
                <hr></hr>
                {message}
                <hr></hr>
                <br></br>
                <div id="container">
                    {
                            users.map((user)=>
                            {
                                return <>
                                         <div className="user">
                                            No: {user.No} <br/>
                                            Name:  {user.Name} <br/>
                                            Address:  {user.Address} <br/>
                                            <button onClick={()=>
                                                                {
                                                                Edit(user.No);
                                                                }}>
                                                Edit
                                            </button>

                                            <button onClick={()=>
                                                            {
                                                            Delete(user.No);
                                                            }}>
                                                Delete
                                            </button>
                              
                                         </div>
                                         <br></br>
                                       </>
                            })
                    }
               </div>
            </center>)
}

export default Users;