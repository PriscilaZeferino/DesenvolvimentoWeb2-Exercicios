const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const num =  Math.ceil(Math.random() * 10);
    
    // res.render('index', {rand: num});
    // res.render('index', {num: num});
    res.render('index', {num});
})

app.get('/curso/:curso', (req, res) => {
    
})

app.listen(3000, () => {
    console.log("Escutando requisicoes na rota 3000");
})