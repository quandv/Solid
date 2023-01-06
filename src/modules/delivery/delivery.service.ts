import { IDeliveryProvider, IDeliveryService } from "./delivery.interface";

export class DeliveryService implements IDeliveryService {
  private readonly deliveryProvider: IDeliveryProvider

  constructor(deliveryProvider: IDeliveryProvider) {
    this.deliveryProvider = deliveryProvider;
  }

  createOrder = async (order) => {
    if (order.weight > 100) {
      if(order.height > 1000) {
        return await this.deliveryProvider.createVietelOrder(order);
      } else {
        return await this.deliveryProvider.createJNTOrder(order);
      }
    } else {
      return await this.deliveryProvider.createGHNOrder(order);
    }
  }
}