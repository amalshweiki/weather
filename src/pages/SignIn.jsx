import { useState } from "react";

const SignIn = () => {
  const [email,setEmail]=useState();
const [pass,setPass]=useState();
const handelEmail =(e)=>{
  setEmail(e.target.value)
}
const handelPass =(e)=>{
  setPass(e.target.value)
}
 
  const handleclick=(e)=>{
    e.preventDefault();
    console.log(email)
    console.log(pass)
  }
  return (
    <div>

       <form >
    
        <label>Email:</label>
        <input type="text" id="email" onChange={handelEmail} name="email" required />
       
        <label >Password:</label>
        <input type="password" id="password"   onChange={handelPass} name="password" required />
      <button onClick={handleclick}>sign in </button>
      </form>
    </div>
    
  )
}

export default SignIn
