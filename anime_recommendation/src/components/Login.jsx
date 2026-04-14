import React, { useState } from 'react'

const Login = () => {
    const [login, setlogin] = useState(true);
    const[username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const handlesubmit=()=>{
        // checking for credentials
    }
    if(login){
        return (
        <div>
            <h4>Login</h4>
            <label > username</label>
            <br />
            <input type="text" onChange={(e)=>{setusername(e.target.value)}}/>
            <br />
            <label>Password</label>
            <br />
            <input type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
            <br />
            <button type="submit" onClick={()=>{handlesubmit()}}>submit</button>
            <br />
            <button onClick={(e) => { setlogin(!login) }}>{login ? "Signup using email" : "login using username"}</button>
        </div>
    )
    }
    else{
        return (
        <div>
            <h4>Sign up</h4>
            <label > Email</label>
            <br />
            <input type="text" />
            <br />
            <label > Username</label>
            <br />
            <input type="text" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" />
            <br />
            <button type="submit">submit</button>
            <br />
            <button onClick={(e) => { setlogin(!login) }}>{login ? "Signup using email" : "login using username"}</button>
        </div>
    )
    }
}

export default Login
