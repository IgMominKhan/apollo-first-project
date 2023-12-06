import { NextFunction, Request, RequestHandler, Response } from 'express';

export default function catchAsync(callback: RequestHandler) {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(callback(req, res, next)).catch((err) => next(err));
}
