import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { useNavigate, Link } from 'react-router-dom';

import "./LoginPage.scss";

function LoginPage() {

    const navigate = useNavigate();

    const { users, setLoggedInUser } = useContext(GbayContext);

    const checkDB = async (email, password) => {
        fetch('http://localhost:9000/auth/login', {method: 'POST', body: JSON.stringify({email, password}), mode: 'cors', headers: {'Content-Type': 'application/json'}})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.status === "Success!"){
                    const user = data.statusInfo.user;
                    console.log("user", user);
                    setLoggedInUser(user);
                    navigate(`/user/${user.id}`);
                } else {
                    alert('Login failed');
                }
            })
            .catch(err => console.log(err));
    }

    const checkLogin = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        checkDB(email, password)();
    }

    return (
        <div className="container login-page">
            <h1>Login</h1>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder="E-mail" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <button onClick={checkLogin} className="login-btn btn--cta"><span>Login</span></button>
            <p>Not registered yet? <Link to={"/register"}>Register here</Link></p>
        </div>
    )
}

export default LoginPage