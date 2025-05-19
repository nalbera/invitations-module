import User from '../../models/Users.js';

const findByUserNameService = async (userName) => {

    const user = await User.findOne({userName});

    return user;
}

export default findByUserNameService