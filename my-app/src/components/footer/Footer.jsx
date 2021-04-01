import React from 'react'
import './Footer.css'
import { AiFillLinkedin, AiOutlineTrademark, AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
export default function Footer() {
    return (
        <div className="mainDivFooter">
            <div className="art">
            {/* <div className="content"> */}
            <div>
                <header>People Serch</header>
                {/* <a href='#'>About</a>
                <a href='#'>About</a>
                <a href='#'>About</a>
                <a href='#'>About</a> */}
            </div>
            <div>
                <header>By Adiv Shenkor</header>
                {/* <a href='#'>About</a>
                <a href='#'>About</a>
                <a href='#'>About</a>
                <a href='#'>About</a> */}
            </div>
            <div>
                <header>Contact Us</header>
                
                    <AiFillLinkedin/>
                    <AiFillFacebook/>
                    <AiFillGithub/>
                    <AiFillInstagram/>
                
            </div>
            {/* </div> */}
            <div className="notice">
                copyright protected <AiOutlineTrademark/>
                <strong> Tec-Career Code-IN</strong>
            </div>
            </div>
        </div>
    )
}
