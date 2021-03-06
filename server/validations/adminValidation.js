// Validation
const Joi = require('@hapi/joi');

// Add admin validation
const addAdminValidation = (data) => {
    const adminSchema = Joi.object({
        name: Joi.string().min(4).required(),
        username: Joi.string().min(6).max(24).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email()
    });

    return adminSchema.validate(data);
};

module.exports.addAdminValidation = addAdminValidation;