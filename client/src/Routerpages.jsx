import React from 'react'
import Login from './components/pages/login/Login'
import Signup from './components/pages/signUp/Signup'
import Users from './components/pages/users/Users'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import User from './components/pages/user/User'
import Home from './components/pages/home/home'



export default function Routerpages() {
    return (
        <Router>
            <div>
                   
                        {/* <Link to="/"></Link>
                        <Link id="loginLinkRouterId" to="/login"></Link>
                        <Link to="/users"></Link>
                        <Link to=""></Link> */}
                    
                <Switch>
                <Route exact path = "/"><Home/></Route>

                        
                        <Route path ="/login"><Login/></Route>
                        <Route path ="/users"><Users/></Route>
                        <Route path="/user"><User/></Route>
                </Switch>
            </div>
        </Router>
        
    )
}
