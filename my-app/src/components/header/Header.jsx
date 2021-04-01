import React from 'react'
import './Header.css'
export default function Header(props) {
    const {greetings} = props
    return (
        <div className="mainDivHeader">
            <h1>{greetings}</h1>
        </div>
    )
}
