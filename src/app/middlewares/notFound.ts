import {NextFunction, Request, Response} from 'express';
import httpStatus from 'http-status';

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export default function notFound(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    err: {
      code: httpStatus.NOT_FOUND,
      description: 'API not found',
    },
  });
}
