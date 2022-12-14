import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import  SubNavbar from "./SubNavbar"

import {useContext, useState, useEffect} from 'react';
import GbayContext from '../context/GbayContext';

import {FaShoppingCart} from "react-icons/fa";


import { ReactComponent as Logo } from '../assets/images/gbay-logo-yellow.svg';

import "./Navbar.scss";

function Navbar() {
    
    const { loggedInUser, setLoggedInUser } = useContext(GbayContext);
    const navigate = useNavigate();

    const [subNavBarOpen, setSubNavBarOpen] = useState(false);

    const [contentSubNav, setContentSubNav] = useState(false);

    function toggleSubNav(content) {
       setContentSubNav(content);
       setSubNavBarOpen(true);
    }

    useEffect(()=>{console.log("hallo")},[toggleSubNav])

    const logout = () => {
        setLoggedInUser(null);
        navigate("/");
    }

    return (
        <header>
            <div className="container">
                {/* <img src={require("../assets/images/gbay-logo-yellow.svg").default} alt="G-bay logo" /> */}
                <Logo />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <a onClick={ () => toggleSubNav ("themes")}>Themes</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a onClick={ () => toggleSubNav ("categories")}>Categories</a>*/}
                        {/*</li>*/}
                        <li>
                            <Link to="/about-us">About us</Link>
                        </li>
                        <li>
                            {loggedInUser ? (<a onClick={logout}>Logout</a>) : (<Link to="/login">Login</Link>)}
                        </li>
                        <li>
                            <Link to="/shopping-cart"><FaShoppingCart></FaShoppingCart></Link>
                        </li>
                    </ul>
                </nav>
                {loggedInUser ? (<Link className="link-userpage" to={`/user/${loggedInUser.id}`}><div className="navbar__user-info"><FaUserCircle /><p>{loggedInUser.username}</p></div></Link>) : null}
            </div>
            {subNavBarOpen ? <SubNavbar content={contentSubNav}/> : null}
        </header>
    )
}

export default Navbar