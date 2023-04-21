import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const AuthRouteReactQuery = ({ path, element }) => {
    const { data } = useQuery(["authenticated"], async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/auth/authenticated", {params: {accessToken}})
        return response;
    });
    const permitAll = ["/login", "/register", "/password/forget"];
    
    if(permitAll.includes(path)) {
        return <Navigate to="/"  />;
    }
    
    return element;
};

export default AuthRouteReactQuery;