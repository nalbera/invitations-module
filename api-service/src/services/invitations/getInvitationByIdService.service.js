import Invitations from "../../models/Invitations.js";

const getInvitationByIdService = async (invitationId) => {
    const invitation = await Invitations.findById(invitationId);
    return invitation;
}

export default getInvitationByIdService;