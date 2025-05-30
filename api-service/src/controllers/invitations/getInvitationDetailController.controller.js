import { getInvitationByIdService } from "../../services/invitations/index.js";


const getInvitationDetailController = async (req, res, next) => {
    try {
        
        const { invitationId } = req.params;

        const invitation = await getInvitationByIdService(invitationId);

        res.status(200).send({
            status: 'success',
            data: invitation
        })

    } catch (error) {
        next(error);
    }
}

export default getInvitationDetailController;