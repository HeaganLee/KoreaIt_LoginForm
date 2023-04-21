import React, { Component, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { refeshState } from '../../atoms/auth/AuthAtoms';


const AuthRouteReactQuery = ({ path, element }) => {
    const [ refresh, setRefresh ] = useRecoilState(refeshState);
    const { data, isLoading } = useQuery(["authenticated"], async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8080/auth/authenticatied", {params: {accessToken}})
        return response;
    }, {
        enabled: refresh
    });

    useEffect(() => {
        if(!refresh) {
            setRefresh(true);
        }
    }, [refresh]);

    if(isLoading) {
        return (<div>로딩중...</div>)
    }

    if(!isLoading) {
        const permitAll = ["/login", "/register", "/password/forget"];
        if(!data.data) {
            if(permitAll.includes(path)) {
                return element
            }
            return <Navigate to="/login" />
        }
        if(permitAll.includes(path)) {
            return <Navigate to="/" />
        }
        return element;
    }

};

export default AuthRouteReactQuery;