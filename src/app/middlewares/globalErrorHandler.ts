import { NextFunction, Request, Response } from 'express';

export default function globalErrorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  res.status(500).json({
    success: false,
    // @ts-expect-error error
    message: err.message || 'Something went wrong',
    err,
  });
}
