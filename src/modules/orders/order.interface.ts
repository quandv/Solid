export interface IOrderService {
  createOrder(any): Promise<string>;
  updateOrder(string, any): Promise<string>;
}

export interface IOrderDelivery {
  asignDeliveryProvider(any): void;
}

export interface IOrderNotification {
  sentReceiptEmail(any): Promise<string>;
  sentReceiptSms(any): Promise<string>;
}