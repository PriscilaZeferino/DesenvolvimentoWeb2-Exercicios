const faker = require('faker');

function gerarLista() {
    for(var i = 0; i <= 10; i++) {
        console.log(faker.fake("{{commerce.productName}} -> R$ {{commerce.price}}"));
    }    
}

gerarLista();

faker.locale = "pt_BR";
console.log("\nNova lista...");
gerarLista();

