import * as vietelPostSDK from 'vietel-post-sdk'; // example
import * as ghnSDK from 'ghn-sdk'; // example
import { IDeliveryProvider } from './delivery.interface';

export class DeliveryProvider implements IDeliveryProvider {
  createVietelOrder = async (order) => {
    await vietelPostSDK.createOrder(order)
    return "create VT order success"
  }

  createGHNOrder = async (order) => {
    await ghnSDK.makeOrder(order)
    return "create GHN order success"
  }
}