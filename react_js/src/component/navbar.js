import {NavLink} from 'react-router-dom'

function navbar (){
    return(
        <div>
            <ul className='navbar'>
                <li> <NavLink className="nav-link"  to="">Home</NavLink></li>
                <li> <NavLink className="nav-link"  to="/about">About</NavLink></li>
                <li> <NavLink className="nav-link"  to="/profile/mihir">Mihir</NavLink></li>
                <li> <NavLink className="nav-link"  to="/profile/dave">dave</NavLink></li>

            </ul>
        </div>
    )
}
export default navbar