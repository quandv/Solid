import { IOrderService } from "./order.interface";

export class OrderController {
  private orderService: IOrderService;

  constructor(
    orderService: IOrderService,
  ) {
    this.orderService = orderService;
  }

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
