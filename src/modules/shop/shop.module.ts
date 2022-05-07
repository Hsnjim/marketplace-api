import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Shop from './shop.entity';
import Product from '../product/product.entity';

@Module({
  imports: [   
    TypeOrmModule.forFeature([Shop, Product])
 ],
  providers: [ShopService],
  controllers: [ShopController]
})
export class ShopModule {}