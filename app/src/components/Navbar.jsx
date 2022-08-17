import "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
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
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar