import { Router, Request, Response } from 'express';

import * as controller from '../../controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Welcome to Orders Service API!',
  });
});

router.get('/orders/process', controller.processPendingOrders);

export default router;
