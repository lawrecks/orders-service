export enum OrderStatusEnum {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  REFUNDED = 'REFUNDED',
}

export enum PaymentStatusEnum {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export enum PaymentTypeEnum {
  WALLET = 'WALLET',
  CARD = 'CARD',
}
