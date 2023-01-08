const express = require('express'); //fazendo o uso da biblioteca express
const app = express(); //recebendo a função express
const port = 5050;

/*
1° Nome do meu Diretório
2° Função que tem como parametros: requisição e resposta*/
app.get('/dk', function(req, res) {
    res.status(200).send("Time da DK na temporadada - 2023")
});

app.listen(port, () => console.log(`My Server Danwon KIA is online in the port ${port}`));