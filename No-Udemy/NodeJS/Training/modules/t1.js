const express = require('express');
const app = express();
const port = 5050;

app.use(express.json()); //Facilitar o uso do json em nossas requisições

/* -------------- EXIBIR NO TERMINAL ------------ */

/* -------------  Pegar o player pelo ID ------------ */

/* -------------Criar Player  -----------
POST: Usado para pegar alguma coisa que foi criada no nosso banco
*/

/*-------------------- ATUALIZAR UM PLAYER ---------------- */

/*-------------------- DELETAR UM PLAYER ---------------- */


//1° parametro é o diretório || 2° parametro é o que eu vou enviar
app.get('/t1', function(req, res) {
    res.status(200).send(
        "Time da SKT na temporadada - 2023")
});

app.listen(port, () => console.log(`The Server is Online na porta ${port}`));