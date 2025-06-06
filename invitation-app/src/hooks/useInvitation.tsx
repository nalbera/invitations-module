import { useState, useEffect, useContext } from "react";
import type { Invitations, UserContextType } from "../types/types";

import { AuthContext } from "../context/AuthContext";
import getInvitationByIdService from "../services/getInvitationByIdService.service";


const useInvitation = (invitationId: string) => {

    const [invitation, setInvitation] = useState<Invitations>();

     const { token } = useContext(AuthContext) as UserContextType;

     useEffect(() => {
        const getInvitation = async (invitationId: string) => {
            try {
                                
                const invitation = await getInvitationByIdService(token, invitationId);


                setInvitation(invitation);
                
            } catch (error) {
                console.log(error);
            }
        }

        getInvitation(invitationId);

    },[invitationId, token]);

    return invitation;
}

export default useInvitation;