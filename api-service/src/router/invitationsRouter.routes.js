import { Router } from "express";

import { createInvitationsController } from "../controllers/invitations/index.js";
import { createInvitationsSchema } from "../schemas/inex.js";

import authUserMiddleware from "../middlewares/authUserMiddleware.js";
import validationsMiddleware from "../middlewares/validationsMiddleware.js";

const invitationsRouter = Router();


invitationsRouter.post('/', authUserMiddleware, validationsMiddleware(createInvitationsSchema), createInvitationsController);


export default invitationsRouter;