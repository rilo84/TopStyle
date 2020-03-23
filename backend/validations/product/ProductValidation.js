const Joi =  require('@hapi/joi');

const productValidation = (bodyData) =>{
    const productValidationSchema = Joi.object({
        name: Joi.string().min(2).required(),
        category: Joi.string().min(2).max(50).required(),
        description: Joi.string().max(300).required(),
        price: Joi.number().min(0).required(),
        imagelink: Joi.string().required(),
    });

    return productValidationSchema.validate(bodyData);
}

module.exports = productValidation;