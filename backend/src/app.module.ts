import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/order.module';
@Module({
  imports: [
    ConfigModule.forRoot(), // Load from .env
    //MongooseModule.forRoot(process.env.MONGO_URI), // from .env
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/mydb'),

    ProductsModule,
    AuthModule,
    UsersModule,
    CartModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
