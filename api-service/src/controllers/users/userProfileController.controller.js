import { findUserByIdService } from "../../services/users/index.js";

const userProfileController = async (req, res, next) => {
    try {
        
        const { id } = req.user;

        const userProfile = await findUserByIdService(id);

         res.status(200).send({
            status: 'success',
            data: userProfile
         });

    } catch (error) {
        next(error);
    }
}

export default userProfileController;