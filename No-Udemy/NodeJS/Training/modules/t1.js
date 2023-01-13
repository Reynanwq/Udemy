const express = require('express');
const PlayerModel = require("../src/model/player.model");
const app = express();


app.use(express.json()); //Facilitar o uso do json em nossas requisições

/*PEGAR TODAS AS INFRMAÇÕES QUE FORAM PASSADAS */

app.get("/t1", async(req, res) => {
    t //ry {
    const player = await PlayerModel.find({}); //pegar tudo
    res.status(200).json(player);
    /*} catch (error) {
        res.status(500).send(error.message);
    }*/
});

/* -------------- EXIBIR NO TERMINAL ------------ */





/* -------------  Pegar o player pelo ID ------------ */





/* -------------Criar Player  -----------
POST: Usado para pegar alguma coisa que foi criada no nosso banco
*/

app.post("/t1", async(req, res) => {
    try {
        const player = await PlayerModel.create(req.body);
        res.status(201).json(player);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/*-------------------- ATUALIZAR UM PLAYER ---------------- */






/*-------------------- DELETAR UM PLAYER ---------------- */


//1° parametro é o diretório || 2° parametro é o que eu vou enviar
/*app.get('/t1', function(req, res) {
    res.status(200).send(
        "Time da SKT na temporadada - 2023")
});*/

const port = 5050;
app.listen(port, () => console.log(`The Server is Online na porta ${port}`));