import React from 'react'
import './CSS/Login.css'
const loginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Enter UserName' />
          <input type='phone' placeholder='Enter Phone Number' />
          <input type='email' placeholder='Enter Email' />
          <input type='password' placeholder='Enter password' />
          </div>
          <button>Sign Up</button>
          <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
          <div className='loginsignup-agree'>
            <input type='checkbox' name='' id=''/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
      </div>
    </div>
  )
}

export default loginSignup
