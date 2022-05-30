// Validation

const Joi = require('@hapi/joi');

//Register Validation
const signupValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
        .min(2)
        .required(),
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required()
    })
    return schema.validate(data)
};

//login Validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        password: Joi.string()
        .min(6)
        .required()
    })
    return schema.validate(data)
};

module.exports.signupValidation = signupValidation;

module.exports.loginValidation = loginValidation;