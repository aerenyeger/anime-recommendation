import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Otpbox = () => {
    const[otp,setotp]=useState("")
    const navigate=useNavigate()
    const handleSubmit=async()=>{
      const res=await axios.post("/",{otp})
      if(res.status==200){
        navigate("/home");
      }
      else{
        //toaster that otp is incorrect
      }
    }
  return (
    <div>
      <h3>Enter otp</h3>
      <br />
      <input type="text" onChange={(e)=>{setotp(e.target.value)}} />
      <button onClick={()=>{handleSubmit()}}>Submit</button>
    </div>
  )
}

export default Otpbox
