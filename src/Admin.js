import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
function Admin() {
  return (
    <div >
    <h1 id='container2'>Welcome to Admin page <i class="fa-solid fa-user"></i></h1>
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
    <a href='#'>Forget password ?</a>
    </div>
    <br></br>
  <button>Log in <i class="fa-solid fa-right-to-bracket"></i></button><br></br>
   <div id='icons2'>
   <i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-whatsapp"></i><i class="fa-brands fa-linkedin"></i>
   </div>
   <a href='#' id='havnt'>Already haven't an account ?</a>
    </form>
  </div>

    
    </div>
  )
}

export default Admin
