const express = require('express');
const UserModel = require("../src/model/user.model");

const app = express();

app.get('/users', (req, res) => {
    /*res.contentType("application/html"); //para passar como html
    res.status(200).send("<h1>Hello Express</h1>");*/
    const users = [{
        name: "reyynan",
        email: 'reynanwq@gmail.com',
    }, ];
    res.status(200).json(users);
});


/* ------------- POST -----------
Usado para pegar alguma coisa que foi criada no nosso banco
*/

app.post('/users', (req, res) => {
    const user = UserModel.create(req.body)
    res.status(201).json(user); //201 diz que o registro que eu quero criar, foi criado com sucesso.
})

const port = 8080;
/*aqui eu quebrei a cabeça porque botei "app.linsten = (port,..."*/
app.listen(port, () => console.log(`Rodando o Express na porta ${port}`));