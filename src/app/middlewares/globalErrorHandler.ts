import { NextFunction, ErrorRequestHandler} from "express";

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = function globalErrorHandler(err,req,res,next: NextFunction,
) {
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong',
    err,
  });
}

export default globalErrorHandler