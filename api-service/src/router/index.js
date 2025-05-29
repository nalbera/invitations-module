import { Router } from "express";
import userRouter from "./userRouter.routes.js";
import invitationsRouter from "./invitationsRouter.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/invitation", invitationsRouter);

export default router;