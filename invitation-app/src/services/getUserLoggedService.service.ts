import type { User } from "../types/types";


const getUserLoggedService = async (token: string): Promise<User> => {
    
    const url = `${import.meta.env.VITE_API_URL}/user/profile`;

    const response = await fetch(url, {
        headers: {
            authorization: token
        }
    });
        
    const json = await response.json();

    if(!response.ok) throw new Error(json.message);
    
    return json.data;
}

export default getUserLoggedService;