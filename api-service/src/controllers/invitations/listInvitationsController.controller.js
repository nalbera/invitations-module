import { getInvitationsByUserService } from "../../services/invitations/index.js";
import generateErrorsUtils from "../../utils/generateErrorsUtils.js";

const listInvitationsController = async (req, res, next) => {
    try {
        const { id } = req.user;

        const userInvitations = await getInvitationsByUserService(id);

        if(userInvitations.length == 0) throw generateErrorsUtils('No invitations were found to display', 400);

        res.status(200).send({
            status: 'success',
            data: userInvitations
        });
        
    } catch (error) {
        next(error);
    }
}

export default listInvitationsController;