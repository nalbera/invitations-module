

const getInvitationByIdService = async (token: string, invitationId: string) => {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/invitation/detail/${invitationId}`,
        {headers: {
            authorization: token
        }
    });

    const json = await response.json();
    
    if(!response.ok) throw new Error(json.message);

    return json.data;
}

export default getInvitationByIdService;