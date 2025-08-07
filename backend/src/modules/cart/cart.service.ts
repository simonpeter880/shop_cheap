import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './schemas/cart.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<Cart>) {}

  async getCart(userId: string) {
    return this.cartModel.findOne({ user: userId }).populate('items.product');
  }

  async addToCart(userId: string, productId: string, quantity = 1) {
    const cart = await this.cartModel.findOne({ user: userId });
    if (cart) {
      const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId,
      );

      if (itemIndex >= 0) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }

      return cart.save();
    }

    return this.cartModel.create({
      user: userId,
      items: [{ product: productId, quantity }],
    });
  }

  async updateQuantity(userId: string, productId: string, quantity: number) {
    const cart = await this.cartModel.findOne({ user: userId });
    if (!cart) return null;

    const item = cart.items.find(
      item => item.product.toString() === productId,
    );
    if (item) item.quantity = quantity;

    return cart.save();
  }

  async removeFromCart(userId: string, productId: string) {
    const cart = await this.cartModel.findOne({ user: userId });
    if (!cart) return null;

    cart.items = cart.items.filter(
      item => item.product.toString() !== productId,
    );

    return cart.save();
  }
}
