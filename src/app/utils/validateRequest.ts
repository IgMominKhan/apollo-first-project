import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export default function validateRequest(Schema: AnyZodObject) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await Schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
}
