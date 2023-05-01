import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Users from './Users';

class Dashboard extends Component {
    render() { 
        return (<>
                    <Header msg="This is Header1"></Header>
                    <hr></hr>
                    <Users></Users>
                    <hr></hr>
                    <Footer></Footer>
                </>);
    }
}
 
export default Dashboard;