import { Response } from 'express';

export const ApiError = (message: string, code: number) => ({
  status: 'error',
  message,
  code,
});

export const successResponse = ({
  res,
  message,
  code,
  data,
}: {
  res: Response;
  message: string;
  code: number;
  data: Record<string, any>;
}) => {
  res.status(code).json({
    status: 'success',
    message,
    code,
    data,
  });
};
