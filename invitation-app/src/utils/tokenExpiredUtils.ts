import { jwtDecode } from "jwt-decode";

export const tokenExpiredUtils = (token: string) => {

    if(!token) return true;

    try {
        
        const decodeToken = jwtDecode(token);

        const currentTime = Date.now() / 1000;

        if(decodeToken.exp != undefined) return decodeToken.exp < currentTime;

    } catch (error) {
        if(error instanceof Error) {
            console.log(error);
            return true;
        }
    }
}

export default tokenExpiredUtils;