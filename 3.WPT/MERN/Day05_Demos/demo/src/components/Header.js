

import '../assets/common.css';

function Header(props) 
{
    return (<div className='header'>
                <h1>{props.msg}</h1>
            </div>
    );
}
 
export default Header;


//-----------------------------------------------Class Component
// import React, { Component } from 'react';
// import '../assets/common.css';

// class Header extends Component {
//     render() 
//         { 
//         return (<div className='header'>
//                     <h1>This is Header</h1>
//                 </div>
//         );
//     }
// }
 
// export default Header;