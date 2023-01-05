import * as vietelPostSDK from 'vietel-post-sdk'; // example
import * as ghnSDK from 'ghn-sdk'; // example
import * as db from 'db-connection'; // example

export class OrderService {
  async createOrder(order: any): Promise<string> {
    // create order (process & save to DB)
    await this.processOrder(order)

    // assign delivery provider
    await this.asignDeliveryProvider(order)

    // sent email to user
    await this.sentReceiptEmail(order)

    // decrese order's products stock
    await this.updateProductStock(order)

    // ...other tasks
    return "create order successful"
  }

  private async processOrder(order: any): Promise<string> {
    // do somethings

    return "saved order to DB"
  }

  private async asignDeliveryProvider(order) {
    if (order.weight > 100) {
      await vietelPostSDK.createOrder(order)
    } else {
      await ghnSDK.createOrder(order)
    }
  }

  private async sentReceiptEmail(order) {
    return "sent receipt email successful"
  }

  private async updateProductStock(order) {
    // do somethings
    // update to DB
    db.Product.update()
  }
}