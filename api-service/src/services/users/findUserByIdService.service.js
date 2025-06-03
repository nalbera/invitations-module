import User from "../../models/Users.js";

const findUserByIdService = async (id) => {

    const user = await User.findById({_id: id}, {password: false, userName: false});

    return user;

}

export default findUserByIdService;