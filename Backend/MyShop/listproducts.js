var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log("---WELCOME TO MY SHOP--- \n")

for(var i=0;i<10;i++){
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}
