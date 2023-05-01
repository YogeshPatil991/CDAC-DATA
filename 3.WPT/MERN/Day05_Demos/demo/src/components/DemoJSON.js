///////////////////////////////////////---Version 2
import React, { Component } from 'react';
class DemoJSON extends Component 
{
    state = { person: {
                        UserName: "chetan", 
                        Surname:"more"
                      } } 

    HandleChange = (args)=>{
        var copyOfaPerson = {...this.state.person};
        copyOfaPerson[args.target.id] = args.target.value;
        this.setState({ person: copyOfaPerson} )
    }

    Print=()=>{
        console.log(this.state.person.UserName + this.state.person.Surname);
    }
    render() 
    { 
        return (<div>
                    UserName: 
                <input 
                    id="UserName"
                    type={"text"}
                    value={this.state.person.UserName}
                    onChange={this.HandleChange}/>
                     <br></br>
                
                    Surname: 
                    <input 
                    id="Surname"
                    type={"text"}
                    value={this.state.person.Surname}
                    onChange={this.HandleChange}/>
                     <br></br>
                 
                    <br></br>

                    <button onClick={this.Print}>Print</button>
                </div>);
    }
}
 
export default DemoJSON;


//---------------------------------------------Version 1
// import React, { Component } from 'react';
// class DemoJSON extends Component 
// {
//     state = { person: {
//                         UserName: "chetan", 
//                         Surname:"more"
//                       } } 

//     Change = ()=>{
//         debugger;
//         var copyOfaPerson = {...this.state.person};
//        // copyOfaPerson.UserName = "Ketan";
//        copyOfaPerson["UserName"] = "Ketan";
//         this.setState({ person: copyOfaPerson} )
//     }
//     render() 
//     { 
//         return (<div>
//                     UserName: {this.state.person.UserName} <br></br>
//                     Surname: {this.state.person.Surname} 
//                     <br></br>

//                     <button onClick={this.Change}>Change</button>
//                 </div>);
//     }
// }
 
// export default DemoJSON;