import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ShippingModule } from './modules/shipping/shipping.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, CartModule, OrdersModule, PaymentsModule, ShippingModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
