import { deleteInvitationService } from "../../services/invitations/index.js";

const deleteInvitationController = async (req, res, next) => {
    try {
        
        const { invitationId } = req.params;

        await deleteInvitationService(invitationId);

        res.status(200).send({
            status: 'success',
            message: 'The invitation has been removed'
        });

    } catch (error) {
        next(error);
    }
}

export default deleteInvitationController;