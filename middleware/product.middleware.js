const mongoose = require('mongoose');
const Joi = require('joi');





exports.validateproduct = (req, res, next) => {
    const schemaproduct = Joi.object({
        title: Joi.string().uppercase().trim().min(5).max(25).required(),
        description: Joi.string().alphanum()
            .min(3)
            .max(30),
        brand: Joi.string().alphanum()
            .min(3)
            .max(30),
        countstock: Joi.string().alphanum()
            .min(3)
            .max(30),
        countStock: Joi.string().alphanum()
            .min(3)
            .max(30),
        thumbnail: Joi.string().alphanum()
            .min(10)
            .max(30),
        images: Joi.string(),

    });
    const { value, error } = schemaproduct.validate(req.body);

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