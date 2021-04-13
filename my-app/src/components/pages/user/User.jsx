import React, { useState, useEffect } from 'react'
import Header from '../../header/Header'
import { useLocation } from 'react-router-dom';
import './User.css'



export default function User() {
    const location = useLocation();
    const userData = location.state.data;
    const [gender, setGender] = useState('')
    const [ismale, setMale] = useState({})

    function genderShow() {
        if (userData.gender == "male") {
            setMale(res => res = { boxShadow: '0 0 28px 4px rgba(26, 29, 209, 0.418)' })
            setGender("👦")
        }
        else {
            setGender("👩")
            setMale(res => res = { boxShadow: ' 0 0 28px 4px rgba(230, 35, 204, 0.363)' })

        }
    }
    useEffect(genderShow, [])
    return (
        <div>
            <Header greetings={userData.name.first} secondHeading={userData.name.last} />
            <div className="userDisplayContiner">
                <div className="userCard" style={ismale}>
                    <div className="cardImg1"><img className="imgUser1" src={userData.picture.medium} /></div>
                    <div className="cardTitle">
                        <h6 className="detailDesing">{userData.gender}{gender}</h6>
                        <h4 className="detailDesing">{userData.dob.age}</h4>
                        <h6 className="detailDesing">{userData.location.city} {userData.location.country}</h6>
                        <h6 className="detailDesing">{userData.phone}</h6>
                        <h6 className="detailDesing">{userData.email}</h6>

                    </div>
                </div>
            </div>
        </div>

    )
}

