
////////////////////////////////////////////////////--Version 2
import React, { Component } from 'react';
import '../assets/common.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

class Users extends Component {
    state = { allusers: [] }
    
    componentDidMount(){
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 && helper.status ==200)
            {
                var entireResponse =JSON.parse( helper.responseText);
                
                this.setState({allusers: entireResponse.data})
            }
        };      
        helper.open("GET","https://reqres.in/api/users");
        helper.send();
    }

    RemoveUser=(id)=>{
        console.log(`U have asked to delete user with id = ${id} `);
        var remainingUsers = [];
       
        this.state.allusers.map((user)=>{
            if(user.id != id)
            {
                remainingUsers.push(user);
            }
        })

        this.setState({allusers:remainingUsers });
        

    }
    render() { 
        return (<div className='usersContainer'>
                {
                    this.state.allusers.map((user)=>{
                        return (<div className='userContent' key={user.id}>
                                    <img src={user.avatar}></img>
                                    <h3>{user.first_name} {user.last_name}</h3>
                                    <h3>{user.email}</h3>
                                    <button className='btn btn-danger'
                                            onClick={()=>
                                                {
                                                    this.RemoveUser(user.id);
                                                }}>
                                        Delete
                                    </button>
                                </div>);
                    })
                }
            </div>);
    }
}
 
export default Users;


////////////////////////////////////////////////////--Version 1
// import React, { Component } from 'react';
// import '../assets/common.css';

// class Users extends Component {
//     state = { allusers: [] }
    
//     componentDidMount(){
//         this.setState({allusers: 
//             [
//                 {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
//                 {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
//                 {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
//                 {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
//                 {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
//                 {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
//             ]})
//     }
//     render() { 
//         return (<div className='usersContainer'>
//                 {
//                     this.state.allusers.map((user)=>{
//                         return (<div className='userContent'>
//                                     <img src={user.avatar}></img>
//                                     <h3>{user.first_name} {user.last_name}</h3>
//                                     <h3>{user.email}</h3>
//                                 </div>);
//                     })
//                 }
//             </div>);
//     }
// }
 
// export default Users;