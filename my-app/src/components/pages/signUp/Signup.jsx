import React,{ useState } from 'react'
import './Signup.css'
import Header from '../../header/Header'
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



export default function Signup() {
    const [error, setErorr] = useState('')
    const history = useHistory()
    function goToLogin() {
        history.push("/login")
    }

    function register() {

        localStorage.setItem(document.getElementById('inputId').value, document.getElementById('firstPassword').value);

        history.push("/login")
    }

    function checkEmail(param) {

        // let mailStoreg = localStorage.getItem(document.getElementById('inputId').value)
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (param.value.match(pattern)) {
            
            return true
        }
        else{
            setErorr('Invalid Email!')
            return false
        }
        
    }



    function checkPassword() {
        let confirmPassword = document.getElementById('confirmPassword')
        if (document.getElementById('firstPassword').value !== confirmPassword.value) {
            setErorr('Please check your password!')
            return false;
        }
        else {
            return true;
        }
    }

    function validate() {

        if (checkEmail(document.getElementById('inputId')) && checkPassword()) 
            { register() }

    }


    return (
        <div className="mainSignUpDiv">
            <Header greetings="Signup" />
            <div className="signupContiner">
                <TextField id="inputId" label="Email" variant="outlined" type="email" required /><br />
                <TextField id="firstPassword" label="Password" variant="outlined" type="password" required /><br />
                <TextField id="confirmPassword" label="Password" variant="outlined" type="password" required /><br />
                <span className="errorMessage">{error}</span><br/><br/>
                <Button className="button" variant="contained" onClick={validate} size="small">Register</Button>
                <Button className="button" variant="contained" size="small">Reset</Button>
                <Button className="button" variant="contained" size="small" onClick={goToLogin}>Login</Button>
            </div>
            <div className="custom-shape-divider-bottom-1615231397">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>

        </div>
    )
}
