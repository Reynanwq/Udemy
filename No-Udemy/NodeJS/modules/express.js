const express = require('express');
const UserModel = require("../src/model/user.model");

const app = express();
app.use(express.json()); //reconhecer que sempre usamos json nas nossas requisições 

app.get('/users', async(req, res) => {
    /*res.contentType("application/html"); //para passar como html
    res.status(200).send("<h1>Hello Express</h1>");*/
    try {
        const users = await UserModel.find({}); //deixar vázio para pegar tudo
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

/* -------------  Pegar o usuário pelo ID ------------ */

app.get('/users/:id', async(req, res) => { //id entra como parametro
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

/* ------------- POST -----------
Usado para pegar alguma coisa que foi criada no nosso banco
*/
app.post('/users', async(req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user); //201 diz que o registro que eu quero criar, foi criado com sucesso.
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/*-------------------- ATUALIZAR UM USUÁRIO ---------------- */


/*-------------------- DELETAR UM USUÁRIO ---------------- */




const port = 8080;
/*aqui eu quebrei a cabeça porque botei "app.linsten = (port,..."*/
app.listen(port, () => console.log(`Rodando o Express na porta ${port}`));