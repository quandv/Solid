export interface IDeliveryProvider {
  createVietelOrder(any): Promise<string>
  createGHNOrder(any): Promise<string>
  createJNTOrder(any): Promise<string>
}

export interface IDeliveryService {
  createOrder(any): void
}