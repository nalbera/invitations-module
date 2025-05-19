import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

import generateErrorsUtils from '../../utils/generateErrorsUtils.js';
import { findByUserNameService } from '../../services/users/index.js';

const loginUserController = async (req, res, next) => {
    try {
        
        const {userName, password} = req.body;

        const { JWT_SECRET } = process.env;

        if(!userName || !password){
            throw generateErrorsUtils('Email and password are required', 400);
        }

        const currentUser = await findByUserNameService(userName);

        const isPasswordValid = currentUser ? await bcrypt.compare(password, currentUser.password) : false;

        if(!currentUser || !isPasswordValid) throw generateErrorsUtils('Invalid user name or password', 401);

        const tokenInfo = {
            id: currentUser._id,
            email: currentUser.email
        }

        const token = jwt.sign(tokenInfo, JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).send({
            status: 'success',
            message: 'User logged in successfully',
            token
        })
        

    } catch (error) {
        next(error);
    }
}

export default loginUserController;