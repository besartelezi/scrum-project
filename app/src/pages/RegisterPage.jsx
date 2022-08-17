import { useContext } from 'react';
import GbayContext from '../context/GbayContext';

import "./RegisterPage.scss";
import React, { useState } from 'react';

function RegisterPage(){
    const { users } = useContext(GbayContext);

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [userName , setUserName] = useState('');
    const [userNameError , setUserNameError] = useState(false);
    const [userNameTouched , serUserNameTouched] = useState(false);
    const [pass , setPass] = useState('');
    const [passConfirm , setPassConfirm] = useState('');

    const handleUserName = (event) => {
        const username = event.target.value;
        setUserName(username);
        serUserNameTouched(true);
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
                   value={userName} onChange={handleUserName}/>
            {
                userNameError
                ? (<p className='error'>Username already exists</p>)
                : (<p className='confirm'>You're good to go!</p>)
            }



            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" value={pass}/>

            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" placeholder="Password" id="confirmpassword" value={passConfirm}/>

            <button className="login-btn">Register</button>
        </div>
    )
}

export default RegisterPage;