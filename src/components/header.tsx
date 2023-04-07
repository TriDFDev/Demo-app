import React from "react";

const Header = () => {
    return (
        <header className="header--container">
            <div>
                <p className="header--text">Artists/</p>
            </div>
            <div className="header--input">
                <input className="input" type="text" />
            </div>
            <div>
            <p className="header--text">New</p>
            </div>
        </header>
    )
}
export default Header;