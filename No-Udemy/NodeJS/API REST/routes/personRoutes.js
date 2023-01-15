/*---------------- Arquivo onde minha rota será jogada ---------------- */

const router = require('express').Router();
const { Router } = require('express');
const Person = require('../models/Person');
/* -------------- INICIO ROTAS DA API ---------------*/
//utilizamos o async para garantir que o tempo de resposta para o usuário seja respeitado
//req.body: corpo da requisição, ou seja, onde vai chegar os dados.


//CRIAÇÃO DE DADOS
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
        res.status(500).json({ error: error })
    }
});


//READ - LEITURA DE DADOS
router.get('/', async(req, res) => {
    try {
        const people = await Person.find() // pega tudo que tem com o find.
        res.status(200).json(people) //manda todos os dados que estão cadastrados como respostas
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//EXTRAIR OS DADOS DA CONEXÃO/REQUISIÇÃO - PEGANDO USUARIIO PELO ID
router.get('/:id', async(req, res) => {
    const id = req.params.id; // req.params é o que vem pela URL
    try {
        const person = await Person.findOne({ _id: id }) //encontra apenas 1 resultado. Encontrar o user que o ID da rede seja igual o id da requisição
            //O TIPO DE ERRO DEVE ESTÁ CLARO
        if (!person) {
            res.status(442).json({ message: `O usuário não foi encontrado` })
            return
        }
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})



/*----------- ATUALIZAÇÃO DE DADOS DO USUARIO ---------------*/
//podemos utilizar patch ou put

router.patch('/:id', async(req, res) => {
    const id = req.params.id; // req.params é o que vem pela URL
    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved,
    }

    try {
        const updatePerson = await Person.updateOne({ _id: id }, person);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

/* -------------- FINAL ROTAS DA API ---------------*/

module.exports = router;