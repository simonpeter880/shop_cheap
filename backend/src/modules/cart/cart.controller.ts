import {
  Controller, Get, Post, Delete, Patch, Body, Request, UseGuards, Param,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart(@Request() req) {
    return this.cartService.getCart(req.user.userId);
  }

  @Post()
  addToCart(@Request() req, @Body() body: { productId: string; quantity: number }) {
    return this.cartService.addToCart(req.user.userId, body.productId, body.quantity);
  }

  @Patch(':productId')
  updateQty(@Request() req, @Param('productId') productId: string, @Body() body: { quantity: number }) {
    return this.cartService.updateQuantity(req.user.userId, productId, body.quantity);
  }

  @Delete(':productId')
  remove(@Request() req, @Param('productId') productId: string) {
    return this.cartService.removeFromCart(req.user.userId, productId);
  }
}
