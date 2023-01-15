/*Configuração inicial

*/

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose'); //importando o mongoose 
const DB_USER = 'reynan';
const DB_PASSWORD = encodeURIComponent('reynann1234');
const Person = require('./models/Person');


mongoose.set("strictQuery", false);


app.use(express.json());
/*Forma de ler JSON: para isso utilizamos midwalers*/


app.use(
    express.urlencoded({
        extended: true,
    }),
)


/* -------------- INICIO ROTAS DA API ---------------*/
//utilizamos o async para garantir que o tempo de resposta para o usuário seja respeitado
//req.body: corpo da requisição, ou seja, onde vai chegar os dados.



app.post('/person', async(req, res) => {
    const { name, salary, approved } = req.body

    if (!name) {
        res.status(422).json({ error: 'O nome é obrigatório' })
    }
    const person = {
        name,
        salary,
        approved
    }

    try {
        //criado dados
        await Person.create(person)
        res.status(201).json({ message: 'Pessoa inserida no sistema comm sucesso!' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

/* -------------- FINAL ROTAS DA API ---------------*/


/*Rota inical / endpoint */
app.get('/home', (req, res) => {
    res.json({ message: 'oi express' })
});


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectamos ao mongoDB')
        app.listen(port);
    })
    .catch((err) => console.log(err));
/*Entregar uma porta*/

app.listen(port); //deu um pequeno erro com o listen, mas já foi resolvido