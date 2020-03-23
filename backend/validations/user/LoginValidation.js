const Joi =  require('@hapi/joi');

const loginValidation = (bodyData) =>{
    const loginValidationSchema = Joi.object({
        username: Joi.string().min(4).required(),
        password: Joi.string().min(6).required()
    });

    return loginValidationSchema.validate(bodyData);
}

module.exports = loginValidation;