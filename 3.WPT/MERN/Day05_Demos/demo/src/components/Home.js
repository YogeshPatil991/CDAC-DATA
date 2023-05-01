import React, { Component } from 'react';
import '../assets/common.css';
class Home extends Component 
{
    state = { days: [] } 

    componentDidMount(){
        this.setState({days:
                        ["Monday","Tuesday","Wednesday"]});
    
        // this.state.days.push("Monday");
        // this.state.days.push("Tuesday");
        // this.state.days.push("Wednesday");

        console.log("componentDidMount method called.")
    }
    componentDidUpdate(){
      
        console.log("componentDidUpdate method called.")
    }

    ExecuteMe = ()=>{
        //this.setState({days:["Thursday"]});
        debugger;
        var newDays = [...this.state.days,"Thursday"];
        this.setState({days:newDays});
         console.log("Button click code executed..State changed");
    }
    render() 
    {
       console.log("Render called...")
        return (<div className='feed'>
                    {
                        this.state.days.map((day)=>{
                            return <h1 key={day}>{day}</h1>
                        })
                    }
                    <button onClick={this.ExecuteMe}>Click Me</button>
                </div>);
    }
}
 
export default Home;




////////////////////////////////////////////Version 1
// import React, { Component } from 'react';
// import '../assets/common.css';
// class Home extends Component 
// {
//     state = { message: "" } 

//     componentDidMount(){
//         debugger;
//         this.setState({message:"Welcome Home"});
//         console.log("componentDidMount method called.")
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate method called.")
//     }

   

//     ExecuteMe = ()=>{
//         //debugger;
//         //this.state.message = "xyz";

//         this.setState({message:"xyz"});
//          console.log("Button click code executed..State changed");
//     }
//     render() 
//     {
//        // debugger; 
//        console.log("Render called...")
//         return (<div className='feed'>
//                     <h1>{this.state.message}</h1>
//                     <button onClick={this.ExecuteMe}>Click Me</button>
//                 </div>);
//     }
// }
 
// export default Home;