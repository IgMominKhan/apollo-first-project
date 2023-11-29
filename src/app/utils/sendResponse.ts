import {Response} from 'express';

type TResponse<T> = {
  status: number;
  success: boolean;
  data: T;
  message: string;
};

export default function sendResponse<T>(res: Response, data: TResponse<T>) {
  res.status(data.status).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
}
