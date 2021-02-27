import React from 'react'
import './Login.css'
import Input from '../../input/Input'
import ButtonReuse from '../../button/ButtonReuse'
import Header from '../../header/Header'

export default function Login() {
    return (
        <div className="mainLoginDiv">
            <Header/>
             <Input/>
             <div className="buttonComponentInLogin">
             <ButtonReuse/>
             </div>
             
        </div>
    )
}
