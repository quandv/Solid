import * as express from 'express';
import { DeliveryProvider } from '../delivery/delivery.provider';
import { DeliveryService } from '../delivery/delivery.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

const orderRouter = express.Router();

const deliveryProvider = new DeliveryProvider();
const deliveryService = new DeliveryService(deliveryProvider);
const orderService = new OrderService(deliveryService);
const orderController = new OrderController(orderService);

orderRouter.post('/create', orderController.createOrder);
orderRouter.put('/update', orderController.updateOrder);

export default orderRouter