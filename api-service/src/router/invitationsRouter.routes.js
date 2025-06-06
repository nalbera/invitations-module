import { Router } from "express";

import { createInvitationsController, createQrCodeController, listInvitationsController, getInvitationDetailController, deleteInvitationController } from "../controllers/invitations/index.js";
import { createInvitationsSchema } from "../schemas/index.js";

import authUserMiddleware from "../middlewares/authUserMiddleware.js";
import validationsMiddleware from "../middlewares/validationsMiddleware.js";

const invitationsRouter = Router();


invitationsRouter.post('/', authUserMiddleware, validationsMiddleware(createInvitationsSchema), createInvitationsController);

invitationsRouter.get('/qr-invitation/:invitationId', authUserMiddleware, createQrCodeController);

invitationsRouter.get('/', authUserMiddleware, listInvitationsController);

invitationsRouter.get('/detail/:invitationId', authUserMiddleware, getInvitationDetailController);

invitationsRouter.delete('/delete/:invitationId', authUserMiddleware, deleteInvitationController);

export default invitationsRouter;