import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { useNavigate } from 'react-router-dom';

import "./LoginPage.scss";

function LoginPage() {

    const navigate = useNavigate();

    const { users, setLoggedInUser } = useContext(GbayContext);

    const checkLogin = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setLoggedInUser(username);
            navigate('/');
        } else {
            alert('Login failed');
        }
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <button onClick={checkLogin} className="login-btn">Login</button>
        </div>
    )
}

export default LoginPage