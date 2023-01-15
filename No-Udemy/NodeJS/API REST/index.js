/*Configuração inicial

*/

const express = require('express');
const app = express();
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

/* ROTAS DA API */

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

/*Rota inical / endpoint */
app.get('/home', (req, res) => {
    res.json({ message: 'oi express' })
});


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirest.5yq1hjx.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectamos ao mongoDB')
            //app.listen(port);
    })
    .catch((err) => console.log(err));
/*Entregar uma porta*/
const port = 3000;
app.listen(port); //deu um pequeno erro com o listen, mas já foi resolvido