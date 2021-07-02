import React from "react";
import "./LinkItem.css";
import { Link } from "wouter";

const LinkItem = ({ name }) => {
    return (
        <>
            <Link to={`/${name}`} className="link-content">
                <img src="" alt="" />
                <div className="link-title">
                    <h4>{name}</h4>
                </div>
            </Link>
        </>
    );
};

export default LinkItem;
