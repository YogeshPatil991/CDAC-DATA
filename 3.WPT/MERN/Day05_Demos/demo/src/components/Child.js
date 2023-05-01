
import React, { Component } from 'react';

class Child extends Component {
    
    constructor(props)
    {
        super(props);
        debugger;
    }
    
    state = {  } 
    changeFromChild=()=>
    {
        //this.props.company = "abcd";
        this.props.F1( "abcd");
    }
    render() 
    { 
        debugger;
        return (<div>
                    <h1>This is Child UI</h1>
                    <h2>Message From Parent is : 
                        {this.props.messageFromParent}</h2>
                    <h2>Company From Parent is : 
                        {this.props.company}</h2>
                    <button onClick={this.changeFromChild}>
                        Change button from Child
                    </button>
                </div>);
    }
}
 
export default Child;


// import React, { Component } from 'react';

// class Child extends Component {
    
//     constructor(props)
//     {
//         super(props);
//         debugger;
//     }
    
//     state = {  } 

//     render() 
//     { 
//         debugger;
//         return (<div>
//                     <h1>This is Child UI</h1>
//                     <h2>Message From Parent is : 
//                         {this.props.messageFromParent}</h2>
//                     <h2>Company From Parent is : 
//                         {this.props.company}</h2>
//                 </div>);
//     }
// }
 
// export default Child;