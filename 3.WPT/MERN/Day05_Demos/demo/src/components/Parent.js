import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = { companyName: "Infosys" } 
    Change=(parameterFromChild)=>
    {
        this.setState({companyName: parameterFromChild})
    }

    // Change=()=>{
    //                 this.setState({companyName: "Sunbeam"})
    //             }
    x = 100;

    render() 
    { 
        debugger;
        return (<div>
                    <h1>This is parent UI</h1>
                    <hr></hr>
                    <Child messageFromParent="hi!" 
                           company={this.state.companyName}
                           mypara={this.x}
                           F1 = {this.Change}>
                    </Child>
                    {/* <button onClick={this.Change}>
                        Change Data
                    </button> */}
                </div>);
    }
}
 
export default Parent;



// import React, { Component } from 'react';
// import Child from './Child';

// class Parent extends Component {
//     state = {  } 
//     render() 
//     { 
//         debugger;
//         return (<div>
//                     <h1>This is parent UI</h1>
//                     <hr></hr>
//                     <Child messageFromParent="hi!" 
//                            company="sunbeam"></Child>
//                 </div>);
//     }
// }
 
// export default Parent;