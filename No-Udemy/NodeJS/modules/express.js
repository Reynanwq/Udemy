const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.contentType("application/html"); //para passar como html
    res.status(200).send("<h1>Hello Express</h1>");
});

const port = 8080;

/*aqui eu quebrei a cabeça porque botei "app.linsten = (port,..."*/
app.listen(port, () => console.log(`Rodando o Express na porta ${port}`));