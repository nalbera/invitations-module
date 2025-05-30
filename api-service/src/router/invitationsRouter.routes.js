import { Router } from "express";

import { createInvitationsController, createQrCodeController } from "../controllers/invitations/index.js";
import { createInvitationsSchema } from "../schemas/index.js";

import authUserMiddleware from "../middlewares/authUserMiddleware.js";
import validationsMiddleware from "../middlewares/validationsMiddleware.js";

const invitationsRouter = Router();


invitationsRouter.post('/', authUserMiddleware, validationsMiddleware(createInvitationsSchema), createInvitationsController);

invitationsRouter.get('/qr-invitation/:invitationId', authUserMiddleware, createQrCodeController);

export default invitationsRouter;