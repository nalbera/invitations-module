import { insertInvitationService } from "../../services/invitations/index.js";

const createInvitationsController = async (req, res, next) => {
    try {
        
        const { id } = req.user;

        const { fullName, entryDate, entryTime, expirationDate } = req.body;

        const newInvitation = await insertInvitationService({userId: id, fullName, entryDate, entryTime, expirationDate});

        res.status(200).send({
            status: 'success',
            message: "The invitation has been created correctly",
            data: {
                newInvitation
            }
        });
        
    } catch (error) {
        next(error);
    }
}

export default createInvitationsController;