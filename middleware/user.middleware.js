const mongoose = require('mongoose');
const Joi = require('joi');

exports.validateUser = (req, res, next) => {
    const schemaUser = Joi.object({

        name: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string().email()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        adress: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required(),
        city: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required(),
        country: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required(),
        phone: Joi.string().alphanum(),
        isAdmin: Joi.boolean().default(false)
    });
    const { value, error } = schemaUser.validate(req.body);

    if (error) {
        const { path, message } = error.details[0];
        res.status(500).json({
            success: false,
            value,
            error: {
                path: path[0],
                message
            }
        })
    }
    next();

};