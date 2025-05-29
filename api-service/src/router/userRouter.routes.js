import { Router } from "express";

import { loginUserController, userProfileController } from "../controllers/users/index.js";
import { loginSchema } from "../schemas/inex.js";

import authUserMiddleware from "../middlewares/authUserMiddleware.js";
import validationsMiddleware from "../middlewares/validationsMiddleware.js";

const userRouter = Router();


userRouter.post("/login", validationsMiddleware(loginSchema), loginUserController);

userRouter.get('/profile', authUserMiddleware, userProfileController);

export default userRouter;