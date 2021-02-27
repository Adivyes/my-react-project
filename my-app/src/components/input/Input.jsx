import React from 'react'
import './Input.css'

export default function Input() {
    return (
        <div className="mainDivInput">
            
            <div className="inputFlex">
                <label>email</label>
            <input type="email"/>
            <label>password</label>
            <input type="password"/>
            </div>
            
        </div>
    )
}
