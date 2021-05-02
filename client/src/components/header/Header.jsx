import React from 'react'
import './Header.css'
export default function Header(props) {
    const {greetings, secondHeading} = props
    return (
        <div className="mainDivHeader">
            <h1>{greetings} {secondHeading}</h1>
        </div>
    )
}
