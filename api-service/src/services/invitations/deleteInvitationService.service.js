import Invitations from "../../models/Invitations.js";

const deleteInvitationService = async (invitationId) => {

    await Invitations.deleteOne({_id: invitationId});

    return;

}

export default deleteInvitationService;