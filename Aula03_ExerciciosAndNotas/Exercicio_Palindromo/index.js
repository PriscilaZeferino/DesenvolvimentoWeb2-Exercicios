const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/palindromo');
})

app.get('/palindromo', (req, res) => {
    const {q} = req.query;

    var palavra = q;
    var palavraInvertida;

    if(palavra) {
        palavraInvertida = [...palavra].reverse().join('');
    }

    res.render('index', {palavra: q, palavraInvertida: palavraInvertida});
})

app.get('*', (req, res) => {
    res.send("Página não existente!");
})

app.listen(3000, () => {
    console.log("Escutando requisicoes na rota 3000");
})