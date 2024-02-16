import { NextFunction, Request, Response } from 'express';

import logger from '../config/logger';
import db from '../db';
import queries from '../db/queries';
import { ApiError } from '../utils/helpers/response.helpers';

export const checkIfOrderExists = async (
  { params: { orderId } }: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const post = await db.oneOrNone(queries.getOrderById, orderId);
    if (!post) {
      throw ApiError('Order not found', 404);
    }

    return next();
  } catch (error) {
    logger.error('checkIfOrderExists::Middleware', error);

    return next(error);
  }
};
