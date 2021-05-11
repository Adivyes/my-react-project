import React,{useState, useEffect} from 'react'
import Header from '../../header/Header';
import UserCard from '../userscard/UserCard';
import './Users.css'
export default function Users() {
    const [users, setUsers] = useState([]);



    useEffect(()=>{
        (async()=>{
            let userData;
            try{
                const respons = await fetch('https://randomuser.me/api/?results=12');
                 userData = (await respons.json()).results}
            catch(error){console.log(error);
            userData = [];}
            setUsers(userData);
        })()
    }, []);

    return (
        <div>
            <Header greetings = {'Users'}/>
                <div className="mainUserDiv">
                 {users.map((user, index)=><UserCard  userData={user} id={index}  key={index}/>)}
                </div>
        </div>
    )
}
