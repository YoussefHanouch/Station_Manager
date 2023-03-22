import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Forgotpass.css';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  return (
    <div >
       <div className="forgot_pass">
      <form onSubmit={handleSubmit} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <center ><h1 style={{color:"black", margin_top:"5"}}>Forgot Password</h1></center>
         <br></br><br></br>
          <label >Email :</label>   
        <input type="email" name="email" className="forgot-password-input"  required    placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}
        />  <br></br><br></br><br></br>
       

       <Link to='/Confirmer' className="decoration" ><button type="submit"  className="forgot-password-button">Forgot Password</button></Link> 
       
         <br></br><br></br><br></br>
        <center className="page_log">        Retourner à <a   className="page_log"  href="/login">la page de connexion</a>
    </center>
  </form>
      </div>
    
       

    </div>
  );
}

export default ForgotPassword;
