import cron from 'node-cron';
import db from '../../db';
import queries from '../../db/queries';
import { Order } from '../../models';
import logger from '../../config/logger';
import { OrderStatusEnum } from '../../enums';

const refundOrders = async () => {
  try {
    const ordersToRefund = await db.many<Order>(queries.getOrdersForRefund);

    for (const order of ordersToRefund) {
      await processRefund(order);
      logger.info(`Order ${order.code} refunded successfully.`);
    }
  } catch (error) {
    logger.error('Error refunding orders:', error);
  }
};

const processRefund = async (order: Order) => {
  try {
    await db.query(queries.updateOrderStatus, [order.id, OrderStatusEnum.REFUND_PENDING]);

    // Initiate the refund process with the payment gateway

    await db.query(queries.updateOrderStatus, [order.id, OrderStatusEnum.REFUNDED]);
  } catch (error) {
    logger.error(`Error refunding order ${order.code}:`, error);
  }
};

const runRefundCronJob = () => {
  // Run cron every hour
  cron.schedule('0 * * * *', async () => {
    logger.info('Running cron job to refund orders...');
    await refundOrders();
  });
};

export default runRefundCronJob;
