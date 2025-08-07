import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ProductsService } from '../modules/products/products.service';
import { CreateProductDto } from '../modules/products/dto/product.dto';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productsService = app.get(ProductsService);

  const dummyProducts: CreateProductDto[] = [
    {
      name: 'Amazon Echo Dot',
      description: 'Smart speaker with Alexa',
      price: 29.99,
      image: 'https://example.com/echo-dot.jpg',
    },
    {
      name: 'Fire TV Stick',
      description: 'Streaming media player',
      price: 39.99,
      image: 'https://example.com/fire-stick.jpg',
    },
    {
      name: 'Kindle Paperwhite',
      description: 'E-reader with backlight',
      price: 129.99,
      image: 'https://example.com/kindle.jpg',
    },
  ];

  for (const product of dummyProducts) {
    await productsService.create(product);
  }

  console.log('Seed complete ✅');
  await app.close();
}

bootstrap();
