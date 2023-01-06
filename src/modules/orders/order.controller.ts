import { OrderService } from "./order.service";

export class OrderController {
  private orderService: OrderService = new OrderService();

  createOrder = (req, res, next) => {
    res.status(201).json({
      message: this.orderService.createOrder(req.body),
    })
  }

  updateOrder(req, res, next) {
    res.status(200).json({
      message: "update order successful"
    })
  }
}