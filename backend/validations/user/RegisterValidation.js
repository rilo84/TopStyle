const Joi =  require('@hapi/joi');

const registerValidation = (bodyData) =>{
    const userValidationSchema = Joi.object({
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
        adress: Joi.string().required(),
        email: Joi.string().min(2).email().required(),
        username: Joi.string().min(4).required(),
        password: Joi.string().min(6).required()
    });

    return userValidationSchema.validate(bodyData);
}

module.exports = registerValidation;
