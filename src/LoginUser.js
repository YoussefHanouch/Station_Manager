import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Login() {
  return (

    <div>
    <div id='login2'>
    <h1>Sign <span>in</span></h1>
    <form>
    <div id='inp'>
    <label>Username:</label>
    <input  type={"text"} placeholder='Enter your username' /><br></br><br></br>
    <label>Password:</label>
    <input id='pass' type={"password"} placeholder='Enter your password' />
    </div>
   <br></br>
    <div id='rem'>
    <input type={"checkbox"} /><label>Remembre me </label>
     <Link  to='/forgotPassword' className='frgt' href=''>Forgot password?</Link>
    </div>
    <br></br>
   <Link to='/nav'> <button>Log in <i class="fa-solid fa-right-to-bracket"></i></button></Link><br></br>
   <div id='icons2'>
   <i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-whatsapp"></i><i class="fa-brands fa-linkedin"></i>
   </div>
   <a href='#' id='havnt'>Already haven't an account ?</a>
    </form>
  </div>

    
    </div>
  )
}

export default Login
