import { useParams } from 'react-router-dom';
function User (){
    const  Param  = useParams();
    const  {name}  = Param;
    return( 
        <div>
            <h1>this {name} user page </h1>
        </div>
    )
}
export default User