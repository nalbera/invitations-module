import joi from 'joi';

const createInvitationsSchema = joi.object({
    fullName: joi.string().required(),
    entryDate: joi.date().required(),
    entryTime: joi.string().required(),
    expirationDate: joi.date().required()
});

const loginSchema = joi.object({
    userName: joi.string().required(),
    password: joi.string().required()
});

export {
    createInvitationsSchema,
    loginSchema
}