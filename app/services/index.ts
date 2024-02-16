import db from '../db';
import queries from '../db/queries';
import { OrderStatusEnum, PaymentStatusEnum } from '../enums';
import { Order } from '../models';

export const processPendingOrders = async () => {
  const orders: Order[] = await db.many<Order>(queries.getPendingOrders);

  const updateOrders: Promise<Order>[] = [];
  let noOfOrdersProcessed = 0;
  let noOfOrdersYetToBeProcessed = 0;
  orders.forEach((order) => {
    if (order.payment.status === PaymentStatusEnum.COMPLETED) {
      updateOrders.push(
        db.query<Order>(queries.updateOrderStatus, [order.id, OrderStatusEnum.CONFIRMED]),
      );
      noOfOrdersProcessed++;
    } else {
      noOfOrdersYetToBeProcessed++;
    }
  });

  await Promise.all(updateOrders);

  return { noOfOrdersProcessed, noOfOrdersYetToBeProcessed };
};

export const refundOrder = async (orderId: string) => {
  return db.query(queries.updateOrderStatus, [orderId, OrderStatusEnum.REFUNDED]);
};
