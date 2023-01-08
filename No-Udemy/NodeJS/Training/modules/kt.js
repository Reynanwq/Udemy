const express = require('express'); //pegar a biblioteca express
const app = express() //pego a função express
const port = 5050; //pegando a minha porta e aplicando em uma variavel

app.get('/kt', function(req, res) {
    /*Várias vezes eu confundi "res" com "app" kkk */
    res.status(200).send("escalação da KT para temporada de 2023")
});

//pegar o que eu eneviei e ler, listen é uma função
//1° parametro é a porta
app.listen(port, () => console.log(`The server KT ROLSTER is run in the port ${port}`))