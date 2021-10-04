const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("Bem vindo ao meu exercício!");
});

app.get("/:nome", (req,res) =>{
    res.send("Bem vindo(a) " + req.params.nome + "!");
});

app.get("/nome/Jose", (req,res) => {
    res.send("Bem vindo(a) Jose!");
});

app.get("/nome/Maria", (req,res) => {
    res.send("Bem vindo(a) Maria!");
});

app.get("/repetir/:msg/:qtd", (req, res) => {
    var txt = req.params.msg+" ";
    txt = txt.repeat(req.params.qtd);
    res.send(txt);
});

app.get("/repetir/:Ola/:3", (req, res) => {
    res.send("Ola! Ola! Ola!");
});

app.get("/repetir/Oi/5", (req, res) => {
    res.send("Oi Oi Oi Oi Oi");
});

app.get("/repetir/Tchau/1", (req, res) => {
    res.send("Tchau/1");
});

app.get("/som/:animal", (req, res) => {
    if(req.params.animal == 'cao') {
        res.send("O cachorro faz 'Auuu Auuu Auuu'.");
    } else if(req.params.animal == 'gato') {
        res.send("O gato faz 'Miauuu'.");
    } else if(req.params.animal ==  'vaca') {
        res.send("A vaca faz 'Mooon'.");
    } else if(req.params.animal ==  'ovelha') {
        res.send("A ovelha faz 'Meeeee'.");
    } else if(req.params.animal ==  'cavalo') {
        res.send("O cavalo faz 'Rhiiiii'.");
    } else {
        res.send("Animal desconhecido.");
    }
    
})

app.get("*", (req,res) => {
    res.send("Página não encontrada!");
});

app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000!");
});