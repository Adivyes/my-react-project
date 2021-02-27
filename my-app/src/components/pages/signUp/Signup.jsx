import React from 'react'
import './Signup.css'
import Input from '../../input/Input'
import ButtonReuse from '../../button/ButtonReuse'
import Header from '../../header/Header'


export default function Signup() {
    return (
        <div className="mainSignUpDiv">
            <Header/>
             <Input/>
             <div className="buttonComponentInSignUp">
             <ButtonReuse/>
             <ButtonReuse/>
             </div>
             
        </div>
    )
}
