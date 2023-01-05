import { IDeliveryProvider, IDeliveryService } from "./delivery.interface";

export class DeliveryService implements IDeliveryService {
  private readonly deliveryProvider: IDeliveryProvider

  constructor(deliveryProvider: IDeliveryProvider) {
    this.deliveryProvider = deliveryProvider;
  }

  createOrder = async (order) => {
    if (order.weight > 100) {
      await this.deliveryProvider.createVietelOrder(order);
    } else {
      await this.deliveryProvider.createGHNOrder(order);
    }
  }
}