import type { Invitations } from "../types/types";


const createInvitationService = async (fullName: string, entryDate: string, entryTime: string, expirationDate: string, token: string): Promise<Invitations> => {
    const data = {
        fullName: fullName,
        entryDate: entryDate,
        entryTime: entryTime,
        expirationDate: expirationDate
    }
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/invitation`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            authorization: token
        },
        body: JSON.stringify(data)
    });

    const json = await response.json();
    
    if (!response.ok) throw new Error(json.message);

    return json.data.newInvitation;

}

export default createInvitationService;