import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="Header text-color-white">
            <div className="row">
                <div className="col s6">
                    <Link to="#"> Gadsden County Jail Search </Link>
                </div>
                <div className="col s6">
                    <Link to="/" className="App-link">
                        Home
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
