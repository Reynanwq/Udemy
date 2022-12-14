const express = require('express');
const userModel = require('../src/model/user.model');
const UserModel = require("../src/model/user.model");

const app = express();
app.use(express.json()); //reconhecer que sempre usamos json nas nossas requisições 

app.set("view engine", "ejs"); //exibir no formato ejs
app.set("views", "src/views");

/* -------------- EXIBIR NO TERMINAL ------------ */
app.use((req, res, next) => {
    console.log(req.body);
    console.log(`Date: ${new Date()}`); //data de execução
    console.log(`Request Type: ${req.method}`);
    next();
});

app.get("/views/users", async(req, res) => {
    const users = await UserModel.find({});

    res.render("index", { users });
});

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
//PATCH: utilizado quando queremos atualizar o registro parcialmente
//PUCH: mudar o registro por completo, praticamente criar do zzero

app.patch("/users/:id", async(req, res) => {
    try {
        const id = req.params.id; //pesquisar o que isso faz
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(erro.message);
    }
});

/*-------------------- DELETAR UM USUÁRIO ---------------- */
//utilizamos a requeste do tipo DELETE

app.delete('/users/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndRemove(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})



const port = 8080;
/*aqui eu quebrei a cabeça porque botei "app.linsten = (port,..."*/
app.listen(port, () => console.log(`Rodando o Express na porta ${port}`));