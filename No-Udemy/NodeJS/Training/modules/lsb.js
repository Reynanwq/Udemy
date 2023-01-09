const express = require('express');
const app = express();
const port = 5050;

app.get('/lsb', function(req, res) {
    /*Enviando uma resposta de sucesso no meu requerimento*/
    res.status(250).send("Escalação do time da LSB na temporada de 2023")
});
//porta é o primeiro parametro
app.listen(port, () => console.log(`My server LIVI SANDBOX is running in the port ${port}`));