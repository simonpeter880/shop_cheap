"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./schemas/order.schema");
const mongoose_2 = require("mongoose");
const cart_service_1 = require("../cart/cart.service");
let OrdersService = class OrdersService {
    constructor(orderModel, cartService) {
        this.orderModel = orderModel;
        this.cartService = cartService;
    }
    async createOrder(userId) {
        const cart = await this.cartService.getCart(userId);
        if (!cart || cart.items.length === 0) {
            throw new Error('Cart is empty');
        }
        const total = cart.items.reduce((sum, item) => {
            const product = item.product;
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
    async getUserOrders(userId) {
        return this.orderModel.find({ user: userId }).populate('items.product');
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cart_service_1.CartService])
], OrdersService);
//# sourceMappingURL=order.service.js.map