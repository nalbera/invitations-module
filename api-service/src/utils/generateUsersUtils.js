import dbConnect from "../config/dbConnect.js";
import User from "../models/Users.js";
import data from "../data/users.js";

const generateUsersUtils = async () => {
    try {

        await dbConnect();

        const newUsers = await User.insertMany(data);

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