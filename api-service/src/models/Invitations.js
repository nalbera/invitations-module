import { Schema, model } from "mongoose";

const invitationSchemma = Schema({
    userId: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    entryDate: {
        type: Schema.Types.Date,
        required: true
    },
    entryTime: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Schema.Types.Date,
        required: true
    }
}, {timestamps: true});

const Invitations = model('invitations', invitationSchemma);

export default Invitations;

