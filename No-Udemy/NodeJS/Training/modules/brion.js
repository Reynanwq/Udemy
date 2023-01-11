const express = require('express');
const app = express();
const port = 5050; //porta padrão para esse projeto

app.get('/brion', function(req, res) {
    res.status(276).send("A escalação da brion para a temporada de 2023") //resposta de sucesso
});

app.listen(port, () => console.log(`My server Freddit Brion is runnig in the port ${port}`));