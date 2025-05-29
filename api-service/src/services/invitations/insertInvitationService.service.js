import Invitations from "../../models/Invitations.js";

const insertInvitationService = async ({userId, fullName, entryDate, entryTime, expirationDate}) => {

    const invitation = await Invitations.create({userId, fullName, entryDate, entryTime, expirationDate});

    return invitation;
}

export default insertInvitationService;