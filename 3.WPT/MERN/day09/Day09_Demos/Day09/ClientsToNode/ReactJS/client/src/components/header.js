import useAuthHelper from '../hooks/useAuthHelper'; 

function Header(props)
{
    var {isLoggedIn} = useAuthHelper();

  

    const showLogout = ()=>
    {
        var isUserLoggedIn = isLoggedIn();
        if(isUserLoggedIn)
        {
            return  <button onClick={props.signout}>Logout</button>;
        }
    }

    return <div>
            <h1>Welcome {props.userName}</h1>
                {showLogout()}
            <h1>This is Header!</h1>
           </div>
}

export default Header;