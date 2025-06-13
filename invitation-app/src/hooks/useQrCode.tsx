import { useState, useEffect, useContext } from "react";
import type { UserContextType } from "../types/types";

import { AuthContext } from "../context/AuthContext";
import getQrCodeService from "../services/getQrCodeService.service";


const useQrCode = (invitationId: string) => {
       
    const [qrCode, setQrCode] = useState<string>('');
    const { token } = useContext(AuthContext) as UserContextType;

    useEffect(() => {

        if(!invitationId) return;

        const getQrCode =  async () => {
            try {

                const qr = await getQrCodeService(token, invitationId);

                setQrCode(qr);

            } catch (error) {
                console.log(error); 
            }
        }

        getQrCode();

    }, [invitationId, token]);

    return qrCode;
}
export default useQrCode;