import { Redirect, Route, useHistory } from 'react-router-dom';
import Login from './login';
import useAuthHelper from '../hooks/useAuthHelper'; 

function ProtectedRoute(props)
{
    var {isLoggedIn} = useAuthHelper();

    var isUserLoggedIn = isLoggedIn();
    debugger;
    if(isUserLoggedIn)
    {
        return <Route exact path={props.path} component={props.component}/> ;
    }
    else
    {
         return <Login signin={props.signin}></Login>
    }
}

export default ProtectedRoute;