const express = require('express');
const app = express();
const port = 5050;
app.get('/geng', function(req, res) {
    res.status(200).send("Time da GENG na temporadada - 2023")
});
/*Já mandei, agora preciso ler*/
app.listen(port, () => console.log(`The Server GENG is Online na porta ${port}`));