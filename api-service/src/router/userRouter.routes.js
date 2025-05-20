import { Router } from "express";

import { loginUserController, userProfileController } from "../controllers/users/index.js";

import authUserMiddleware from "../middlewares/authUserMiddleware.js";

const userRouter = Router();


userRouter.post("/login", loginUserController);

userRouter.get('/profile', authUserMiddleware, userProfileController);

export default userRouter;