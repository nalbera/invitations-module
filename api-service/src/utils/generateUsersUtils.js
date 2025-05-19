import dbConnect from "../config/dbConnect.js";
import User from "../models/Users.js";
import data from "../data/users.js";
import bcrypt from 'bcrypt';

const generateUsersUtils = async () => {
    try {

        await dbConnect();

        let passwordHashed;
        const arrayData = data.map((user) => {
            passwordHashed = bcrypt.hashSync(user.password, 10);
            return {
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: passwordHashed,
                appartamentNumber: user.appartamentNumber
            }
        });

        const newUsers = await User.insertMany(arrayData);

        console.log({
            status: 'ok',
            message: 'Users created successfully',
            data: newUsers
        });
        
        process.exit(1);
        
    } catch (error) {
        console.log(error);   
    }
}

generateUsersUtils();