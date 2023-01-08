const express = require('express');
const app = express();
const port = 5050;
//1° parametro é o diretório || 2° parametro é o que eu vou enviar
app.get('/t1', function(req, res) {
    res.status(200).send(
        "Time da SKT na temporadada - 2023")
});

app.listen(port, () => console.log(`The Server is Online na porta ${port}`));