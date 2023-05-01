

import '../assets/common.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import User from './User';
import { useEffect, useState } from 'react';

function Users ()
{
    var [allusers, setallusers]  = useState( [] );
    
    useEffect(()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status ==200)
            {
                var entireResponse =JSON.parse( helper.responseText);
                
                setallusers(entireResponse.data);
            }
        };
        helper.open("GET","https://reqres.in/api/users");
        helper.send();

    }, []);

    var RemoveUser=(id)=>{
        console.log(`U have asked to delete user with id = ${id} `);
        var remainingUsers = [];
       
        allusers.map((user)=>{
            if(user.id != id)
            {
                remainingUsers.push(user);
            }
        })
        setallusers(remainingUsers);
    }


    return (<div className='usersContainer'>
                {
                    allusers.map((user)=>
                    {
                        return (
                        <User key={user.id} 
                              myUser={user}
                              RemoveUser={RemoveUser}/>);
                    })
                }
            </div>);
}
 
export default Users;