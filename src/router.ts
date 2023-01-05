import * as express from 'express';
import orderRouter from './modules/orders/order.router';

const router = express.Router();

router.use('/order', orderRouter)

export default router