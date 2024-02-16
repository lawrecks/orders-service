// Order interface
export interface Order {
  id: number;
  customer_name: string;
  total_amount: number;
  status: OrderStatusEnum; // Assuming OrderStatusEnum is defined elsewhere
  created_at: Date;
  updated_at: Date;
  payment: Payment
}

// Payment interface
export interface Payment {
  id: number;
  order_id: number;
  type: PaymentTypeEnum; // Assuming PaymentTypeEnum is defined elsewhere
  status: PaymentStatusEnum; // Assuming PaymentStatusEnum is defined elsewhere
  created_at: Date;
  updated_at: Date;
}