/*---------------- Arquivo onde minha rota será jogada ---------------- */

const router = require('express').Router();
const Person = require('../models/Person');
/* -------------- INICIO ROTAS DA API ---------------*/
//utilizamos o async para garantir que o tempo de resposta para o usuário seja respeitado
//req.body: corpo da requisição, ou seja, onde vai chegar os dados.



router.post('/', async(req, res) => {
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
        res.status(500).json(message.error)
    }
});

/* -------------- FINAL ROTAS DA API ---------------*/

module.exports = router;