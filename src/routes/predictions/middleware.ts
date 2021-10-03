import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const middleware = (
    schema: Joi.ObjectSchema<any>,
    property: 'body' | 'params' | 'query'
) => {
    const validate = (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[property]);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message).join(',');

            console.log('error', message);
            res.status(422).json({ error: `[${property}] ${message}` });
        }
    };

    return validate;
};
