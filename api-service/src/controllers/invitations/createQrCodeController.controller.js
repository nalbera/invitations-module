import { getInvitationByIdService } from "../../services/invitations/index.js";
import generateQrUtils from "../../utils/generateQrUtils.js";

const createQrCodeController = async (req, res, next) => {
    try {
        
        const { invitationId } = req.params;

        const currentInvitation = await getInvitationByIdService(invitationId);

        const qr = await generateQrUtils(currentInvitation);

        res.send({qr});

    } catch (error) {
        next(error);
    }
}

export default createQrCodeController;