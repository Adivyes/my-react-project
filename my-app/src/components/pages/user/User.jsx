import React from 'react'
import Header from '../../header/Header'
import { useLocation } from 'react-router-dom';


export default function User() {
    const location = useLocation();
    const userData = location.state.data;

    return (
        <div>
            <Header greetings={'User'}/>
            
            <div className="cardImg"><img className="img1" src={userData.picture.medium}/></div>
            <div className="cardTitle"> 
            <h3>{userData.name.first} {userData.name.last}</h3>
            <h4>{userData.dob.age}</h4>
            <h6>{userData.email}</h6>
            </div>
            
        </div> 
       
    )
}

