var express = require('express');
var app = express();

app.get('/pesquisa', (req, res) => {
    const {q} =  req.query; //Destructing JavaScript
    res.send(`<h1>Você pesquisou por: ${q}</h1>`);
})

app.listen(3000, () => {
    console.log("Servidor escutando...");
});