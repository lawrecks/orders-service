import { NextFunction, Request, Response } from 'express';
import * as service from '../services';
import logger from '../config/logger';
import { successResponse } from '../utils/helpers/response.helpers';

export const processPendingOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await service.processPendingOrders();

    return successResponse({
      res,
      message: 'Orders processed successfully',
      code: 200,
      data,
    });
  } catch (error) {
    logger.error('processPendingOrders::Controller', error);

    return next(error);
  }
};

export const refundOrder = async (
  { params: { orderId } }: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await service.refundOrder(orderId);

    return successResponse({
      res,
      message: 'Order refunded successfully',
      code: 200,
      data,
    });
  } catch (error) {
    logger.error('refundOrder::Controller', error);

    return next(error);
  }
};
