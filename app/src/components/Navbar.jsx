import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

import { useContext } from 'react';
import GbayContext from '../context/GbayContext';

import "./Navbar.scss";

function Navbar() {
    
    const { loggedInUser, setLoggedInUser } = useContext(GbayContext);

    const logout = () => {
        setLoggedInUser(null);
    }

    return (
        <header>
            <div className="container">
                <h1>G-bay</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About us</Link>
                        </li>
                        <li>
                            {loggedInUser ? (<a click={logout}>Logout</a>) : (<Link to="/login">Login</Link>)}
                        </li>
                    </ul>
                </nav>
                {loggedInUser ? (<div className="navbar__user-info"><FaUserCircle /><p>{loggedInUser}</p></div>) : null}
                
            </div>
        </header>
    )
}

export default Navbar