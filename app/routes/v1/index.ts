import { Router, Request, Response } from 'express';

import * as controller from '../../controllers';
import * as middleware from '../../middlewares';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Welcome to Orders Service API!',
  });
});

router.patch('/orders/process', controller.processPendingOrders);

router.patch(
  '/orders/refund/:orderId',
  middleware.checkIfOrderExists,
  controller.refundOrder,
);

export default router;
