export default {
  getPendingOrders: `
    SELECT orders.*, 
        json_build_object(
              'id', p.id,
              'type', p.type,
              'status', p.status,
              'created_at', p.created_at,
              'updated_at', p.updated_at
          ) as payment
    FROM orders 
    LEFT JOIN payments p ON p.order_id = orders.id
    WHERE orders.status = 'PENDING';
  `,

  updateOrderStatus: `
    UPDATE orders
      SET status = $2
    WHERE id = $1;
  `
}