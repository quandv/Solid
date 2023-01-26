// import * as vietelPostSDK from 'vietel-post-sdk'; // example
// import * as ghnSDK from 'ghn-sdk'; // example
import * as db from 'db-connection'; // example
import { IDeliveryService } from '../delivery/delivery.interface';
import { IEmailService } from '../email/email.interface';

import { IOrderDelivery, IOrderNotification, IOrderService } from './order.interface';

export class OrderService implements IOrderService, IOrderDelivery, IOrderNotification {
  private readonly deliveryService: IDeliveryService
  private readonly emailService: IEmailService

  constructor(
    deliveryService: IDeliveryService,
    emailService: IEmailService
  ) {
    this.deliveryService = deliveryService
    this.emailService = emailService
  }

  async createOrder(order: any): Promise<string> {
    // create order (process & save to DB)
    await this.processOrder(order)

    // assign delivery provider
    await this.asignDeliveryProvider(order)

    // sent email to user
    await this.sentReceiptEmail(order)

    // decrese order's products stock
    // await this.updateProductStock(order)

    // ...other tasks
    return "create order successful"
  }

  async updateOrder(orderId: string, order): Promise<string> {
    return "update order successful"
  }

  private async processOrder(order: any): Promise<string> {
    // do somethings...
    db.Order.create(order)
    return "saved order to DB"
  }

  async asignDeliveryProvider(order) {
    await this.deliveryService.createOrder(order)
  }

  async sentReceiptEmail(order) {
    await this.emailService.sentEmail(order)
  }

  async sentReceiptSms(order) {
    return "sent receipt sms successful"
  }

  // private async updateProductStock(order) {
  //   // do somethings
  //   // update to DB
  //   db.Product.update()
  // }
}