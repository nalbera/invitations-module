import generateErrorsUtils from '../utils/generateErrorsUtils.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authUserMiddleware = async (req, res, next) => {
    try {
        
        const { authorization } = req.headers;

        const {JWT_SECRET} = process.env;

        if(!authorization) throw generateErrorsUtils('Authorization header is missing', 401);

        let tokenInfo;

        try {
            
            tokenInfo = jwt.verify(authorization, JWT_SECRET);

        } catch (error) {
            generateErrorsUtils('Invalid credentials', 401);
        }

        req.user = tokenInfo;

        next();
        
    } catch (error) {
        next(error);
    }
}

export default authUserMiddleware