const faker = require('faker')
const { getRandomInt } = require('./getRandom')
const theme = ['black', 'red', 'blue']
const category = ['electronics', 'sports']

const productList = []

for(let index = 0; index < 20; index++) 
{
    const newProduct = {
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        weight: faker.datatype.number(500),
        description: faker.commerce.productDescription(),
        image: faker.internet.url(),
        category: category[getRandomInt(0, theme.lenght - 1)], /*PARA DIDERENTES CATEGROIAS ' Sporting Goods y Electronics y '*/
        theme: theme[getRandomInt(0, theme.lenght - 1)] /* Para distintas Cartas q tienen difernetes diseños y fondos*/
    }
    productList.push(newProduct)
}   

module.exports = productList