import { Router } from "express";

import { loginUserController } from "../controllers/users/index.js";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send('User Router'));
userRouter.post("/login", loginUserController);


export default userRouter;