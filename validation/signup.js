const { Joi } = require('express-validation');

exports.signupvalidation = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })
}