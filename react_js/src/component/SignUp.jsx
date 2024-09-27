import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";


function SignUp(){
    const [name,setName] = useState("");
    const [lastName,setlastName] = useState("");
    const [age,setAge] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
    const submit= async()=>{
        let formData = new FormData();
        formData.append("name", name);
        formData.append("lastName", lastName);
        formData.append("Age", age);
        let result = await fetch('http://localhost:2409/signup',{
            method:'Post',
            body:formData
        })
        result = await result.json()
        if(result){
            localStorage.setItem('user',JSON.stringify(result.data))
            navigate('/');
        }
    };
                        
    return(
        <div >
            <h1>SignUp</h1>
            <input type="text" className="inputFiled" value={name} placeholder="Enter Name"  onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" className="inputFiled" value={lastName} placeholder="Enter Last Name" onChange={(e)=>{setlastName(e.target.value)}} />
            <input type="text" className="inputFiled" value={age} placeholder="Enter Age" onChange={(e)=>{setAge(e.target.value)}} />
            <button type="button" className="subBtn" onClick={submit}> SignUp</button>
        </div>
    )
}
export default SignUp