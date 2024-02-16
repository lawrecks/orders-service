import { OrderStatusEnum, PaymentStatusEnum, PaymentTypeEnum } from "../enums";

// Order interface
export interface Order {
  id: number;
  code: string;
  total_amount: string;
  status: OrderStatusEnum;
  created_at: Date;
  updated_at: Date;
  payment: Payment
}

// Payment interface
export interface Payment {
  id: number;
  order_id: number;
  type: PaymentTypeEnum;
  status: PaymentStatusEnum;
  created_at: Date;
  updated_at: Date;
}