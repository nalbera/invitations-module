import { Router } from "express";
import userRouter from "./userRouter.routes.js";

const router = Router();

router.use("/user", userRouter);


export default router;