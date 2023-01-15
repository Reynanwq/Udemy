/*Configuração inicial

*/

const express = require('express');
const app = express();
const port = 3000;
/*Forma de ler JSON: para isso utilizamos midwalers*/

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

/*Rota inical / endpoint */
app.get('/home', (req, res) => {
    res.json({ message: 'oi express' })
});

/*Entregar uma porta*/

app.listen(port); //deu um pequeno erro com o listen, mas já foi resolvido

//login: reynan
//password: reynann1234