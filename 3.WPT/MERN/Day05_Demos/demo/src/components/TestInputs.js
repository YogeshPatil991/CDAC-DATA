

///---------------------------------------Version 2 
import React, { Component } from 'react';
class TestInputs extends Component {
  
    state={UName:"", Surname:"", message:""}
    Show=()=>{
        // if(this.state.UName=="")
        // {
        //     this.setState({message: "Name is required."});
        // }
        // else
        // {
        //     var latestMessage = "hi " + this.state.UName;
        //     this.setState({message: latestMessage});
        // }

        console.log(this.state.UName);
        console.log(this.state.Surname);

    }
    HandleChange=(args)=>
    {
        debugger;
       if(args.target.id=="UName")
       {
            this.setState({UName: args.target.value})
       }
        if(args.target.id=="Surname")
       {
          this.setState({Surname: args.target.value})
       }
    }

    render() { 
        console.log("render is called..");

        return (<div>
                    Name: <input 
                            id="UName" 
                            type={"text"}
                            value={this.state.UName}
                            onChange={this.HandleChange}/>
                        <br></br>
                    Surname: <input 
                            id="Surname" 
                            type={"text"}
                            value={this.state.Surname}
                            onChange={this.HandleChange}/>
   <br></br>
                    <button onClick={this.Show}>Click Me</button>

                    <br></br>
                    <div>{this.state.message}</div>
                </div>);
    }
}
 
export default TestInputs;

///---------------------------------------Version 1
// import React, { Component } from 'react';
// class TestInputs extends Component {
  
//     state={UName:"", message:""}
//     Show=()=>{
//         //console.log("hi " + this.state.UName);
       
//         if(this.state.UName=="")
//         {
//             this.setState({message: "Name is required."});
//         }
//         else
//         {
//             var latestMessage = "hi " + this.state.UName;
//             this.setState({message: latestMessage});
//         }

//     }
//     HandleChange=(args)=>
//     {
//         //debugger;
//         //console.log("data inside input changed..")
//         this.setState({UName: args.target.value})
//     }

//     render() { 
//         console.log("render is called..");

//         return (<div>
//                     Name: <input 
//                             id="UserName" 
//                             type={"text"}
//                             value={this.state.UName}
//                             onChange={this.HandleChange}/>
//                     <button onClick={this.Show}>Click Me</button>

//                     <br></br>
//                     <div>{this.state.message}</div>
//                 </div>);
//     }
// }
 
// export default TestInputs;