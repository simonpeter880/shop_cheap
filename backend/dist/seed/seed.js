"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const products_service_1 = require("../modules/products/products.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const productsService = app.get(products_service_1.ProductsService);
    const dummyProducts = [
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
//# sourceMappingURL=seed.js.map