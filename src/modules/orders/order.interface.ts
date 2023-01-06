export interface IOrderService {
  createOrder(any): Promise<string>;
  updateOrder(string, any): Promise<string>;
  asignDeliveryProvider(any): void;
  sentReceiptEmail(any): Promise<string>;
  sentReceiptSms(any): Promise<string>;
}