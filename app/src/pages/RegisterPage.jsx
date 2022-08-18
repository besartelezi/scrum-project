import {useContext, useEffect} from 'react';
import GbayContext from '../context/GbayContext';

import "./RegisterPage.scss";
import React, { useState } from 'react';

function RegisterPage(){
    const { users } = useContext(GbayContext);

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [userName , setUserName] = useState({
        value : "",
        error : false,
        tag : ''
    });

    const [pass , setPass] = useState('');
    const [passConfirm , setPassConfirm] = useState('');

    const handleUserName = (event) => {
        let input = event.target.value;
        setUserName({value: input});
        let errortemp = users.find(user => user.username === input);
        if (errortemp !== undefined){
            setUserName({value : input ,error: true, tag: <span className='error'>This username is already taken.</span>})
        }else {
            setUserName({value : input ,error: false, tag: <span className='confirm'>Good!</span>})
        }
    }



    return (
        <div className="container">
            <h1>Register</h1>
            
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="First Name" id="firstname"
                   value={firstName} onChange={(event)=> setFirstName(event.target.value)}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Last Name" id="lastname"
                   value={lastName} onChange={(event)=> setLastName(event.target.value)}/>

            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="example@email.com" id="email"
                   value={email} onChange={(event)=> setFirstName(event.target.value)}/>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username"
                   value={userName.value} onChange={handleUserName}/>
            {userName.tag}



            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" value={pass}/>

            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" placeholder="Password" id="confirmpassword" value={passConfirm}/>

            <button className="login-btn">Register</button>
        </div>
    )
}

export default RegisterPage;