import React from 'react'
import './UserCard.css'
import { useHistory } from 'react-router-dom';

export default function UserCard(props) {
    const{userData, id}=props
    const history = useHistory()
    
    function showCardDitels(){
        history.push("/user",{data:userData})
    }

    return (
        <div className="card" id={`card${id}`} onClick={showCardDitels}>
            <div className="cardImg"><img className="img1" src={userData.picture.medium}/></div>
            <div className="cardTitle"> 
            <h3>{userData.name.first} {userData.name.last}</h3>
            <h4>{userData.dob.age}</h4>
            <h6>{userData.email}</h6>
            </div>
            
        </div>
    )
}
