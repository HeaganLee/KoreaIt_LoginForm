import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { authenticatedState } from '../../atoms/auth/AuthAtoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { useQuery } from 'react-query';
import { getAuthenticatied } from '../../api/auth/AuthApi';

const validationToken = async(accessToken) => {
    const response = await axios.get("http://localhost:8080/auth/authenticatied", {params: {accessToken}});
    return response.data
}

const AuthRoute = ({ path, element }) => {
    const accessToken = localStorage.getItem("accessToken");
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
    const [ data, isLoading, isError ] = useQuery(() => getAuthenticatied(accessToken));
    setAuthenticated(data);

    const permitAll = ["/login", "/register", "/password/forget"];


    if(!authenticated) {

        if(accessToken !== null){
           validationToken(accessToken).then((flage) => {
                setAuthenticated(flage);
           });
           if(authenticated) {
            return element;
           }
           console.log("페이지 이동 테스트")
           return <Navigate to={path} />;
        }
        if(permitAll.includes(path)) {
            return element;
        }

        return <Navigate to="/login" />;
    }
    
   

    if(permitAll.includes(path)) {
        return <Navigate to="/"  />;
    }
    
    return element;
};

export default AuthRoute;