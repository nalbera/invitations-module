import { useEffect, useState } from "react";
import type { User } from "../types/types";
import getUserLoggedService from "../services/getUserLoggedService.service";

const useUserLogged = (token: string) => {

    const [userLogged, setUserLogged] = useState<User | null>();

    useEffect(() => {
        const getDataUserLogged = async () => {
            try {
                
                const user = await getUserLoggedService(token);

                setUserLogged(user);

            } catch (error) {
                if(error instanceof Error) {
                    console.log(error);
                    return
                }
            }   
        }

        getDataUserLogged();

    },[token]);

    return userLogged;
}

export default useUserLogged;