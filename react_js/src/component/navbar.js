import {NavLink} from 'react-router-dom'

function navbar (){
    return(
        <div>
            <ul className='navbar'>
                <li> <NavLink className="nav-link"  to="/">Home</NavLink></li>
                <li> <NavLink className="nav-link"  to="/signup">Sign Up</NavLink></li>
            </ul>
        </div>
    )
}
export default navbar