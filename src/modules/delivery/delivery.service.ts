import { IDeliveryProvider, IDeliveryService } from "./delivery.interface";

export class DeliveryService implements IDeliveryService {
  readonly deliveryProvider: IDeliveryProvider

  constructor(deliveryProvider: IDeliveryProvider) {
    this.deliveryProvider = deliveryProvider;
  }

  createOrder = async (order) => {
    if (order.weight > 100) {
      return await this.deliveryProvider.createVietelOrder(order);
    } else {
      return await this.deliveryProvider.createGHNOrder(order);
    }
  }
}

export class DeliveryV2Service extends DeliveryService {
  constructor(deliveryProvider: IDeliveryProvider) {
    super(deliveryProvider);
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