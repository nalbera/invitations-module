import { Router } from "express";

import { loginUserController } from "../controllers/users/index.js";

import authUserMiddleware from "../middlewares/authUserMiddleware.js";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send('User Router'));
userRouter.post("/login", loginUserController);

userRouter.get('/profile', authUserMiddleware, (req, res) => res.send('paso'));

export default userRouter;