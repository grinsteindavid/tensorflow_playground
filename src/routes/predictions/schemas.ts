import Joi from 'joi';

export const Body = Joi.object().keys({
    input: Joi.object().keys({}).required(),
});
