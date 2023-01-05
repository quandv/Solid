import * as express from 'express';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

const orderRouter = express.Router();

const orderService = new OrderService();
const orderController = new OrderController();

orderRouter.post('/create', orderController.createOrder);
orderRouter.put('/update', orderController.updateOrder);

export default orderRouter