import axios from "axios"

export const getAuthenticatied = (accessToken) => {
    return axios.get("http://localhost:8080/auth/authenticatied", {params: {accessToken}})
}