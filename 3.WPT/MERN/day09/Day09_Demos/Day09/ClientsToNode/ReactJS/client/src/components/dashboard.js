import Header from './header';
import Footer from './footer';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Secure from './secure';
import NotFound from './notfound';
import ProtectedRoute from './protectedroute';
import { useEffect, useState } from 'react';
import Login from './login';
import useAuthHelper from '../hooks/useAuthHelper';
import Users from './users';

function Dashboard()
{
    var [userName, setuserName] = useState("Guest");
    var history =  useHistory();
    var { setSessionStorage, isLoggedIn, getSessionStorage, clearStorage} 
    =  useAuthHelper();
    
    useEffect(()=>{
        if(isLoggedIn())
        {
            var uname =  getSessionStorage("userName");
            setuserName(uname);
        }
        else
        {
            setuserName("Guest");
        }
    }, []);

    var signin = (credentials, OnInvalidLoginCallback)=>
    {
        debugger;
        //if credentials are valid 
        // call setuserName...so that header can show user name
        //else

        if(credentials.uname == "mahesh" && 
            credentials.pwd == "mahesh@123")
            {
                setSessionStorage("isloggedIn","true");
                setSessionStorage("userName",credentials.uname);
                setSessionStorage("token","1234");
                setuserName(credentials.uname);
                debugger;
                history.push("/secure");
            }
        else
        {
            debugger;
            OnInvalidLoginCallback();
        }
    }

    const signout=()=>{
        clearStorage();
        setuserName("Guest");
        history.push("/secure");
    }
    return <div>
            <Header userName={userName} signout={signout}></Header>
            <hr></hr>
                <Link to="/home">Home</Link> | 
                <Link to="/about">About Us!</Link> | 
                <Link to="/contact">Contact Us!</Link> | 
                <Link to="/secure">Show Me Secure Page!</Link> | 
                <Link to="/users">Users!</Link> | 
            <hr></hr>
            <Switch>
                <Route exact path={"/"} component={Home}></Route>
                <Route exact path={"/home"} component={Home}></Route>
                <Route exact path={"/about"} component={About}></Route>
                <Route exact path={"/contact"} component={Contact}></Route>
                <Route exact path={"/login"} component={Login} 
                       signin={signin}></Route>
                <ProtectedRoute exact path={"/secure"} component={Secure}
                        signin={signin}/>
                <ProtectedRoute exact path={"/users"} component={Users}
                        signin={signin}/>
                <Route exact path={"*"} component={NotFound}></Route>
            </Switch>

            <hr></hr>
            <Footer></Footer>
            </div>
}


export default Dashboard;