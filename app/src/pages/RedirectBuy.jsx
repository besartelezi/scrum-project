import {useContext} from 'react';
import GbayContext from '../context/GbayContext';
import {useNavigate} from 'react-router-dom';

import "./RedirectBuy.scss";
import "./LoginPage.scss";

import checkLogin from "../helpers/checkLogin";

function RedirectBuy() {

    const navigate = useNavigate();

    const {users, setLoggedInUser} = useContext(GbayContext);

    const goToRegisterPage = () => {
        navigate('/register');
    }

    return (
        <div className="container redirect-page">

            <div className="redirect__wrapper__title">
                <h1>Hello there</h1>
                <p>In order to purchase those cool items you want, you first need to be logged in!</p>
            </div>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <button onClick={() => checkLogin(users, setLoggedInUser, navigate)} className="login-btn">Login</button>
            <div className="redirect__wrapper__or">
                <h1>--- or ---</h1>
            </div>

            <div className="redirect__wrapper__register">
                <p className="redirect__text">If you don't have an account, then you can register here!</p>
                <button class="btn--cta" onClick={goToRegisterPage}>Register now!</button>
            </div>

        </div>
)
}

export default RedirectBuy