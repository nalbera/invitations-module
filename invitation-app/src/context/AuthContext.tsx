import { createContext, useEffect, useState } from "react";
import type { AuthProps } from "./types";

const AuthContext = createContext({});

const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const [userLogged, setUserLogged] = useState();

    useEffect(() => {

        if(token?.length) {
            localStorage.setItem('token', token);
        }
    },[token]);


    useEffect(() => {
        const getDataUserLogged = async () => {
            try {
                
                const {VITE_API_URL} = import.meta.env;

                if(token) {
                    const response = await fetch(`${VITE_API_URL}/user/profile`, {
                        headers: {
                            authorization: token
                        }
                    })
                    const json = await response.json();

                    if(!response.ok) throw new Error(json.message);

                    setUserLogged(json.data);
                }

            } catch (error) {
                if(error instanceof Error) {
                    logout();
                }
            }   
        }

        getDataUserLogged();

    },[token]);

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
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