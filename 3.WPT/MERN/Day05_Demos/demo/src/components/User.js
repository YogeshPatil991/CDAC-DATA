import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function User(props) 
{
    return (
        <div className='userContent' 
             key={props.myUser.id}>
            <img src={props.myUser.avatar}></img>
            <h3>{props.myUser.first_name} 
                {props.myUser.last_name}</h3>
            <h3>{props.myUser.email}</h3>
            <button className='btn btn-danger'
                    onClick={()=>
                    {
                     props.RemoveUser(props.myUser.id);
                    }}>
                Delete
            </button>
        </div>);
}
 
export default User;

