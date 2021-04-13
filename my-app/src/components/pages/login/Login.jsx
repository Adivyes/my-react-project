import React, { useState } from 'react'
import './Login.css'
import { TextField, Button } from '@material-ui/core';
import Header from '../../header/Header'
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [error, setError] = useState ('')
    const history = useHistory()


   function userCheck() {
        let storegKeyValue = localStorage.getItem(document.getElementById("emailInput").value)
        if (storegKeyValue && storegKeyValue === document.getElementById("passwordInput").value) {
            history.push("/users")
            
            return true
        }
        else {
            
            setError("Please check your password or email")
        }
    }
// let error = 'Worng Password Or Email'
    return (
        <div className="mainLoginDiv">
            <Header greetings="Login" />
            
            <div className="loginContiner">
            
                <TextField id="emailInput" label="Email" variant="outlined" type="email" required /><br /><br />
                <TextField id="passwordInput" label="Password" variant="outlined" type="password" required /><br />
                <span className="errorMessage">{error}</span><br/><br/>
                <Button id="buttonComponentInLogin" variant="contained" size="small" onClick={userCheck}>login</Button>
            </div>

            <div className="custom-shape-divider-bottom-1615231397">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill1"></path>
                </svg>
            </div>
        </div>
    )
}
