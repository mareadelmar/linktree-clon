import React from "react";
import "./LinkItem.css";
import { Link } from "wouter";
import github from "../images/github.svg";
import pedacitos from "../images/pedacitos.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";

const icons = [
    { name: "github", img: github },
    { name: "pedacitos", img: pedacitos },
    { name: "instagram", img: instagram },
    { name: "linkedin", img: linkedin },
];

const LinkItem = ({ name }) => {
    const iconItem = (icon) => {
        icons.map((item) => {
            console.log(item, icon);
            if (item.name === icon) return item.img;
        });
    };

    console.log(iconItem(name), name);
    return (
        <>
            <Link to={`/${name}`} className="link-content">
                <img src={iconItem(name)} alt={name} />
                <div className="link-title">
                    <h4>{name}</h4>
                </div>
            </Link>
        </>
    );
};

export default LinkItem;
