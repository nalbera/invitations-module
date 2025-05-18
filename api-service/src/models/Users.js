import mongoose, { Schema, model } from "mongoose";

const userSchemma = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    appartamentNumber: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const User = model('users', userSchemma);

export default User;