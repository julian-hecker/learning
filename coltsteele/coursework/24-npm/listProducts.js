const faker = require('faker');

for (let i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + ' ' + faker.commerce.price());
}
