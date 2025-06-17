import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import type { AuthProps } from "./types";
import tokenExpiredUtils from "../utils/tokenExpiredUtils";
import useUserLogged from "../hooks/useUserLogged";
import ModalSessionExpired from "../components/Modal/ModalSessionExpired";


const AuthContext = createContext({});

const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(token?.length) {
            localStorage.setItem('token', token);
        }
    },[token]);

    useEffect(() => {
  
        if(localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            if(tokenExpiredUtils(token)) {
                setToken('');
                localStorage.removeItem('token');
                setShow(true);
            }
        } else {
            navigate('/');
        }

    },[navigate]);

    const currentToken = token || '';

    const userLogged = useUserLogged(currentToken);
        
    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
        navigate('/');
    }
 
    return (
        <AuthContext.Provider value={{token, userLogged, setToken, logout}}>
            <ModalSessionExpired show={show} handleClose={handleClose} />
            { children }
        </AuthContext.Provider>
    )
}

export{
    AuthContextProvider,
    AuthContext
} 