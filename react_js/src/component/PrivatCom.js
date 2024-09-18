import { Navigate, Outlet } from "react-router-dom"

function PrivatCom(){
    let auth = localStorage.getItem('user')
    return auth?<Outlet/>:<Navigate to="/signup" />
}
export default PrivatCom