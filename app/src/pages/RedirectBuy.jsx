import { useContext } from 'react';
import GbayContext from '../context/GbayContext';
import { useNavigate, Link } from 'react-router-dom';

import "./RedirectBuy.scss";
import "./LoginPage.scss";

function RedirectBuy() {

    const navigate = useNavigate();

    const {users, setLoggedInUser} = useContext(GbayContext);

    const checkLogin = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        checkDB(email, password)();
    }

    const checkDB = async (email, password) => {
        fetch('http://localhost:9000/auth/login', {method: 'POST', body: JSON.stringify({email, password}), mode: 'cors', headers: {'Content-Type': 'application/json'}})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.status === "Success!"){
                    const user = data.statusInfo.user;
                    console.log("user", user);
                    localStorage.setItem('auth-token', data.token);
                    setLoggedInUser(user);
                    navigate(`/user/${user.id}`);
                } else {
                    alert('Login failed');
                }
            })
            .catch(err => console.log(err));
    }

    const goToRegisterPage = () => {
        navigate('/register');
    }

    return (

        <div className="container redirect-page">

            <div className="redirect__wrapper__title">
                <h1>Hello there</h1>
                <p>In order to purchase those cool items you want, you first need to be logged in!</p>
            </div>

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <button onClick={() => checkLogin()} className="login-btn">Login</button>

            <div className="redirect__wrapper__or">
                <h1>--- or ---</h1>
            </div>

            <div className="redirect__wrapper__register">
                <p className="redirect__text">If you don't have an account, then you can register here!</p>
                <button className="btn--cta" onClick={goToRegisterPage}>Register now!</button>
            </div>

        </div>
    )
}

export default RedirectBuy