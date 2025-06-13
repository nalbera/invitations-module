

const deleteInvitationService = async (invitationId: string, token: string) => {
    
    const url = `${import.meta.env.VITE_API_URL}/invitation/delete/${invitationId}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            authorization: token
        }
    });

    const json = await response.json();

    if(!response.ok) throw new Error(json.message);

    return;
}

export default deleteInvitationService;