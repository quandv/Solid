import * as vietelPostSDK from 'vietel-post-sdk'; // example
import * as ghnSDK from 'ghn-sdk'; // example
import * as jntSDK from 'jnt-sdk'; // example
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

  createJNTOrder = async (order) => {
    await jntSDK.createOrder(order)
    return "create JNT order success"
  }
}