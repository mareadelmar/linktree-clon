import React from "react";
import { Route } from "wouter";
import database from "../services/data.json";

const RoutesLinks = () => {
    return database.map((item) => {
        return (
            <Route
                path={`/${item.name}`}
                component={() => (window.location = item.url)}
            />
        );
    });
};

export default RoutesLinks;
