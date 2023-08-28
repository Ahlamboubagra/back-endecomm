const mongoose = require('mongoose');
const Joi = require('joi');




exports.validateCategory = async(req, res, next) => {
    const schemacategory = Joi.object({

        label: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required(),
        icon: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required()(),
        color: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required(),
        product: Joi.string().alphanum()
            .min(3)
            .max(30)
            .required()
    });
    const { value, error } = schemacategory.validate(req.body);

    if (error) {
        const { path, message } = error.details[0];
        res.status(500).json({
            success: false,
            error: {
                path: path[0],
                message
            }
        })
    }
    next()

};