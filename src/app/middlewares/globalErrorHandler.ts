import { NextFunction, Request, Response } from 'express';

// @ts-expect-error unused vars
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export default function globalErrorHandler(
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong',
    err,
  });
}
