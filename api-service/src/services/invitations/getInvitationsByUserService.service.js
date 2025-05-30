import Invitations from "../../models/Invitations.js";

const getInvitationsByUserService = async (userId) => {

    const invitations = await Invitations.find({ userId });

    return invitations;
}

export default getInvitationsByUserService;