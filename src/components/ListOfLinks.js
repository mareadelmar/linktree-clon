import React from "react";
import "./ListOfLinks.css";
import database from "../services/data.json";
import LinkItem from "./LinkItem";

const ListOfLinks = () => {
    return (
        <section className="main-container">
            {database.map((item) => (
                <LinkItem name={item.name} key={item.name} />
            ))}
        </section>
    );
};

export default ListOfLinks;
