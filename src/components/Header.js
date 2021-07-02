import React from "react";
import "./Header.css";
import user from "../images/user.png";

const Header = () => {
    return (
        <header>
            <img src={user} alt="user image" className="header-img" />
            <h2 className="header-title">@mareadelmar</h2>
        </header>
    );
};

export default Header;
