import React, { useState } from 'react'
import './Login.css'
import { assets } from '../assets/Food Del Frontend Assets/assets/assets'

const Login = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sing up")
  return (
    <div className='login-container'>
        <form className='login-form-container'>
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currState === "Login" ? <></> :<input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required minLength="6"/>
                 
                
            </div>
            <button>{currState === "Sing up" ? "Create Account" : "Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing , i agree to the terms of use & privacy policy. </p>
            </div>
            {currState === "Login" ? <p>Create a new account? <span onClick={()=>setCurrState("Sing up")}>Click here</span></p> 
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p> }


        </form>
    </div>
  )
}

export default Login