import React from 'react'
import './Footer.css'
import { AiFillLinkedin, AiOutlineTrademark, AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import {Link, BrowserRouter as Router} from "react-router-dom"
export default function Footer() {
    return (
        <div className="mainDivFooter">
            <div className="art">
            {/* <div className="content"> */}
            <div>
                <header>People Serch</header>

            </div>
            <div className="linksDiv">
                <header>By Adiv Shenkor</header>
                <a href='adivyes@gmail.com'>Adivyes@gmail</a>

            </div>
            <div className="linksDiv">
                <header>Keep In Touch</header>
                <a href='https://www.linkedin.com/in/adiv-shenkor-b16b361bb/'><AiFillLinkedin/></a>
                <a href='https://www.facebook.com/adiv.shencor'><AiFillFacebook/></a>
                <a href='https://github.com/Adivyes'><AiFillGithub/></a>
                <a href='https://www.instagram.com/adiv_shenkor/'><AiFillInstagram/></a>            
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
