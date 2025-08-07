import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { CartService } from '../cart/cart.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private cartService: CartService,
  ) {}

  async createOrder(userId: string) {
    const cart = await this.cartService.getCart(userId);
    if (!cart || cart.items.length === 0) {
      throw new Error('Cart is empty');
    }

    const total = cart.items.reduce((sum, item) => {
      const product = item.product as any;
      return sum + (product.price * item.quantity);
    }, 0);

    const order = await this.orderModel.create({
      user: userId,
      items: cart.items,
      total,
    });

    // Clear the cart
    cart.items = [];
    await cart.save();

    return order;
  }

  async getUserOrders(userId: string) {
    return this.orderModel.find({ user: userId }).populate('items.product');
  }
}
