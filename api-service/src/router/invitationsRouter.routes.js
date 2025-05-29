import { Router } from "express";

import { createInvitationsController } from "../controllers/invitations/index.js";

import authUserMiddleware from "../middlewares/authUserMiddleware.js";

const invitationsRouter = Router();


invitationsRouter.post('/', authUserMiddleware, createInvitationsController);


export default invitationsRouter;