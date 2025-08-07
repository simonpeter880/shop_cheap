import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('checkout')
  async checkout(@Request() req) {
    return this.ordersService.createOrder(req.user.userId);
  }

  @Get()
  async getOrders(@Request() req) {
    return this.ordersService.getUserOrders(req.user.userId);
  }
}
