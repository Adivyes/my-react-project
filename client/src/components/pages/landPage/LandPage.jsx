import React from 'react'
import Signup from '../signUp/Signup'
import Header from '../../header/Header'
import Login from '../login/Login'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"



export default function LandPage() {
    return (
        <Router>
        <div>
        <Header greetings="wellcom"/> 
                <ul>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="signUp">Signup</Link></li>
                </ul>
            <Switch>
                    <Route path ="/login"><Login/></Route>
                    <Route path ="/signUp"><Signup/></Route>
            </Switch>
        </div>
    </Router>
    )
}
