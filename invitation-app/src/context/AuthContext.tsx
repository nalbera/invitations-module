import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { AuthProps } from "./types";
import tokenExpiredUtils from "../utils/tokenExpiredUtils";
import useUserLogged from "../hooks/useUserLogged";

const AuthContext = createContext({});

const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const navigate = useNavigate();

    useEffect(() => {

        if(token?.length) {
            if(tokenExpiredUtils(token)){
                logout();
                return;
            }
            localStorage.setItem('token', token);
        }
    },[token]);

    const currentToken = token || '';

    const userLogged = useUserLogged(currentToken);
        
    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
        navigate('/');
    }
 
    return (
        <AuthContext.Provider value={{token, userLogged, setToken, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export{
    AuthContextProvider,
    AuthContext
} 