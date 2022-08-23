import "./SubNavbar.scss"

import { Link, useNavigate } from "react-router-dom";

function SubNavbar () {

    const navigate = useNavigate();

    return (
        <div className="container SubNavbar">
            <h1>example SubNavbar</h1>
        </div>
    )

}

export default SubNavbar